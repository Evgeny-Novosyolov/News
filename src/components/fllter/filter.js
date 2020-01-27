import React, {useEffect, useState,} from 'react'
import { connect } from 'react-redux'
import FilterItem from '../filter-item'

import './filter.scss'
import action from '../../action'



const Filter = ({...props}) =>{

    const {filterName, addFilters, typeName, sortPrice, addFiltersTitle} = props
   



    useEffect(() => {
       
        let arr = []

        let result = filterName.map((item)=>{
            for(let keys in item) {
                arr.push(keys)
            }
        })
        let newArr = new Set(arr)
        newArr = [...newArr]
        setStateFilter(newArr)
    }, [filterName, stateValue, typeName])



    const [stateFilter, setStateFilter] = useState([])
    const [typeState, setTypeState] = useState('')
    const [stateValue, setStateValue] = useState('')
    const [stateValueTitle, setStateValueTitle] = useState('')

    
    const handleChange = (e) =>{
        addFilters(e.target.value)

        const value = e.target.value;
        const key = e.target.name
        if(key === "select") {
            setTypeState(value)
        } else {
            setStateValue(value)
            
        }
    }

    const handleChangeTitle = (e) =>{
        const value = e.target.value;
        setStateValueTitle(value)

        const data = value.trim().toLowerCase()
        
        addFiltersTitle(data)

    }


    const RenderGroup = ({stateValue}) => {
        const items = stateFilter.map((filter)=>{
                let value = stateValue[filter]
                
                return(
                    <FilterItem
                    handleChange={handleChange}
                    key={filter}
                    filter={filter}
                    stateValue={value}
                    // handleClick={handleClick}
                     />

                )
        })
        return items
    }



  

    const RenderType = () => {
        let items= []
        for(let key in typeName){
            items.push(
                <option key={key} value={key}>{typeName[key]}</option>
            )
        }

        return(
            <select value={typeState} onChange={handleChange} name='select'
            className="filter__item">
                <option key="all" value="">Показать все категории</option>
                {items}
            </select>
        )

    }



    return(
        <div className="filter">
            <div className="filter__box">
                <h3 className="filter__title">Фильтрация по категориям</h3>
                <label className="filter__item">
                    <input
                    type="text"
                    value={stateValue}
                    onChange={handleChange}
                    placeholder="Введите категорию"
                    />
                </label>
                <span className="filter__item filter__span">или</span>
                <RenderType/>
            </div>
           <div className="filter__box">
            <label  className="filter__item filter__sort">
                    Сортировать по цене:
                    <input type="checkbox"
                    onClick={sortPrice}
                    />
                </label>
           </div>
           <div className="filter__box">
           <h3 className="filter__title">Фильтрация по заголовкам</h3>
                <label className="filter__item">
                    <input
                    type="text"
                    value={stateValueTitle}
                    onChange={handleChangeTitle}
                    placeholder="Введите заголовок"
                    />
                </label>
           </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    filterName: state.events.list, 
    typeName: state.filters.typeName, 
})

export default connect(mapStateToProps, action)(Filter)