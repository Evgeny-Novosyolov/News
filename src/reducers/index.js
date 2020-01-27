import { combineReducers } from 'redux'

import  events from './events'
import filters from './filters'




const reducer = combineReducers({
    events,
    filters

})

export default reducer