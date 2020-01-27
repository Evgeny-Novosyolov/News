import React from 'react'
import {Link} from 'react-router-dom'
import './event-list-item.scss'


const EventListItem = ({...props}) =>{
    
    const {id,title, image, body, price, categories, date , description} = props.item
    const {typeName, addFavorite,favorete } = props

    let  newDate = date

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

        
        const textBtn = favorete ? `Добавить в избранное` : `Убрать из избранного`

     

    return(
        <div className="event-box">
            {/* <div className="event-box__wrapper-img">
                <img src={image}/>
            </div> */}
            <div className="event-box__content">
                <div className="event-box__header">
                <Link to={`/events/${id}`}> 
                    <h2 className="event-box__title">{title}</h2>
                </Link> 
                    <h4 className="event-box__subtitle">Категория: {newCategoriesRow}</h4>
                </div>
                <div className="event-box__main"><p>{description}</p></div>
                <div className="event-box__footer">
                    <p className="event-box__date">
                        Дата: 
                        <span className="event-box__date-day"> {newDateRow}</span>
                        <span  className="event-box__date-time"> {time}</span>
                    </p>
                    <p className="event-box__price">Стоимость: {newPrice}</p>
                </div>
            </div>
            <button
            className="event-box__button "
            onClick={()=> addFavorite(id)}
            >{textBtn}</button>
        </div>
        
    )
}

export default EventListItem