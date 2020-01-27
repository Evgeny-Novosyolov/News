import * as types from '../types'

const initialState = {
    filters: [],
    sortPrice: false,
    filtersTitle: '',
    typeName: {
        holiday: "Праздничный день",
        festival: "Фестиваль",
        performance: "Спектакль",
        opera: "Опера",
    }
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action


    switch(type) {
        case types.ADD_FILTERS:
            const result = []
            if(state.typeName.hasOwnProperty(payload)) {
                result.push(payload)
            } else {
                for(let keys in state.typeName){

                    if(state.typeName[keys].toLowerCase().indexOf(payload) != -1){
                        result.push([keys])
                    }
                }
            }
            return {
                ...state,
                filters :  result
            }


        case types.SORT_PRICE:
            return {
                ...state,
                sortPrice : !state.sortPrice
            }
        case types.ADD_FILTERS_TITLE:
            return {
                ...state,
                filtersTitle : payload
            }
            
        default: 
            return state
    }
    
}

export default reducer