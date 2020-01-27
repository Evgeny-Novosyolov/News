import React, {useEffect} from 'react'

const FilterItem = ({handleChange, filter, stateValue, handleClick }) =>{
   

    useEffect(() => {

    },)

   return (
        <label>
            {/* {filter[0].toUpperCase() + filter.substring(1)} */}
            <input
            type="text"
            value={stateValue}
            name={filter}
            // ref={ref}
            onChange={(e)=> {
                handleChange(e)
                // handleClick()
            }}

            />
        </label>

    )
}

export default FilterItem