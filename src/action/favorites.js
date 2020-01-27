import * as types from '../types'

const addFavorite = (id)  =>{ 
    return {
        type: types.ADD_FAVORITES,
        payload: id
    }
}




export default {
    addFavorite,
}
