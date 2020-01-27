import * as types from '../types'

const addFilters = (filters)  =>{ 
    return {
        type: types.ADD_FILTERS,
        payload: filters
    }
}
const sortPrice = (filters)  =>{ 
    return {
        type: types.SORT_PRICE,

    }
}

const addFiltersTitle = (filtersTitle)  =>{ 
    return {
        type: types.ADD_FILTERS_TITLE,
        payload: filtersTitle
    }
}




export default {
    addFilters,
    sortPrice,
    addFiltersTitle
}
