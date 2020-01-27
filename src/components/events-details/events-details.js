import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import action from '../../action'
import './events-details.scss'

const EventsDetails = ({...props}) =>{

    const {list, addFavorite} = props

    useEffect(() => {
 
    }, [list])        

    
    const RenderItems = () => {
        const items = list.map((item)=>{
            const {id, title} = item
                return(
                    <li key={id}
                    className="events-details__item"
                    >
                            <Link to={`/events/${id}`}> 
                                    <span className="events-details__title">{title}</span>
                            </Link> 
                            <button
                            className="events-details__button btn btn-light"
                            onClick={()=> addFavorite(id)}
                            >Отказаться</button>
                    </li> 
                )
        })
        return items
    }


    const renderRow = list.length > 0 ? <RenderItems/> : null
        
    
    return(
        <div className="events-details__wrapper">
            <h4>
                Список избранного:
            </h4>
            <ol className="events-details__list">
                {renderRow}
            </ol>
        </div>
    )
}

const mapStateToProps = (state) => ({
    list: state.events.cartItems,
})

export default connect(mapStateToProps, action)(EventsDetails)