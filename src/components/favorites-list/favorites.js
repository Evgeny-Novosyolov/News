import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './favorites.scss'
import action from '../../action'

const FavoritesList = ({...props}) =>{

    const {list, addFavorite} = props
    



    const renderItems = (item, idx) => {
        const {id, title, price, date} = item
                let  newDate = date
               
                newDate = newDate.split("|")
                const day = newDate[0]
                const time = newDate[1]
                const newPrice = price === null ? 'бесплатно' : `${price} руб.`
        return (
                      
            <tr key={id}>
            <td>{idx + 1}</td>
            <td>
            <Link to={`/events/${id}`}>
                {title}
            </Link>
            </td>
            <td>{newPrice}</td>
            <td>{`${day} / ${time}`}</td>
            <td>
            <button
               onClick={()=> addFavorite(id)}
                className="btn btn-outline-dark">
                Отказаться
            </button>
            </td>
            </tr>  

            );
        };

        const  items = list.map(renderItems)
        const renderRow = list.length > 0 ?  items  : null


    return (
        <div className="favorites">
           <h2 className="favorites__title">Избранное</h2>
            <table className="table">
            <thead>
            <tr>
                <th>#</th>
                <th>Наименование</th>
                <th>Цена</th>
                <th>Дата / время</th>
                <th></th>
            </tr>
        </thead>
            <tbody>
                {renderRow}
            </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => ({
    list: state.events.cartItems,
})


export default connect(mapStateToProps,action)(FavoritesList)

