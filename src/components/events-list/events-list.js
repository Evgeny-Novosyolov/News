import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import EventsListItem from '../event-list-item'
import './events-list.scss'
import action from '../../action'

const useFilters = ({list, filters, sortList, filtersTitle})=>{


    const newList = list.filter((item)=>{
        const {categories} = item
        for(let keys of filters){

            if(categories.indexOf(keys.toString()) != -1){
                return item
            }
        }
    })

    function sortPrice(params) {
         

        if(sortList) {
            return  params.sort((a,b)=>{
                return a.price - b.price
            })
        } else {
            return  params.sort((a,b)=>{
                return a.id - b.id
            })
        }
       
        
    }

    const items = newList.length != 0 ? newList : list


    function searchTitle(params) {
        return params.filter((item)=> {
            const title = item.title.toLowerCase()
            if(title.indexOf(filtersTitle) != -1){
                return item
            }
        })
    }
   
   
    return  searchTitle(sortPrice(items))
}





const EventsList = ({...props}) =>{

    const {list, addFavorite, filters, sortList, typeName, cartItems, filtersTitle} = props

    const newList = useFilters({list, filters, sortList, filtersTitle})

    
    useEffect(() => {

    }, [list, newList])

   

    const items = newList.map((item)=>{

        const {id : itemId} = item
        
        const favorete = cartItems.findIndex(({id}) => id == itemId) 

        const result =  favorete != -1 ? false : true

        return(
            <li 
            className="event__item"
            key={itemId}
            // onClick={()=> addFavorite(id)}
            >
                <EventsListItem
                item = {item}
                typeName = {typeName}
                addFavorite={addFavorite}
                favorete={result}
                />

            </li>
        )
    })

    return(
        <div className="event__wrapper">
            <ul className="event__list">
                {items}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    list: state.events.list,
    filters: state.filters.filters,
    sortList: state.filters.sortPrice, 
    typeName: state.filters.typeName,
    cartItems: state.events.cartItems, 
    filtersTitle: state.filters.filtersTitle, 
})

export default connect(mapStateToProps, action)(EventsList)