import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import action from '../../action'
import './favorite-list-item.scss'

const useItem = ({id: newId,list }) => {

    useEffect(() => {

    }, [list, newId])


    const item = list.find(({id})=> id === Number(newId))

    return item
} 


const EventListItem = ({...props}) =>{
    
   
    const {match: {params : {id}}, list} = props
    


    const item = useItem({id, list})
    
    const {id : itemId, title, image, body, price, categories, date, description} = item
    const {typeName} = props

    const monthName = {
        1: "Январь",
        2: "Февраль",
        3: "Март",
        4: "Апрель",
        5: "Май",
        6: "Июнь",
        7: "Июль",
        8: "Август",
        9: "Сентябрь",
        10: "Октябрь",
        11: "Ноябрь",
        12: "Декабрь",
    }       

    let  newDate = date
    newDate = newDate.split("|")
    const day = newDate[0].split(".")
    const time = newDate[1]
    const newPrice = price === null ? 'бесплатно' : `${price} руб.`

    const newDateRow = `${parseInt(day[0])} ${monthName[parseInt(day[1])].toLowerCase()} `

    let newCategoriesRow = []

    for(let key of categories){
        newCategoriesRow.push(typeName[key])
    }
    newCategoriesRow = newCategoriesRow.join(" / ").toLowerCase()
    return(
        <div className="box" key={itemId}>
            <div className="box__wrapper-img">
                <img src={image}/>
            </div>
            <div className="box__content">
            <div className="box__header">
                    <h2 className="box__title">{title}</h2>
                    <h4 className="event-box__subtitle">Категория: {newCategoriesRow}</h4>
                </div>
                <div className="event-box__main">
                    <p>{description}</p>
                    <p>{body}</p>    
                    </div>
                <div className="event-box__footer">
                    <p className="event-box__date">
                        Дата: 
                        <span className="event-box__date-day"> {newDateRow}</span>
                        <span  className="event-box__date-time"> {time}</span>
                    </p>
                    <p className="event-box__price">Стоимость: {newPrice}</p>
                </div>
            </div>
        </div>
        
    )
}

const mapStateToProps = (state) => ({
    list: state.events.list,
    typeName: state.filters.typeName,
})


export default connect(mapStateToProps, null)(EventListItem)