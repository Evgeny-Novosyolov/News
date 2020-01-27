import React from 'react'
import Row from '../row'
import {withRouter} from 'react-router-dom'
import FavoritesList from '../favorites-list'

const EventsPage = ({history, match}) =>{

    
    const {id} = match.params
    
    return(
        <Row
        left={<FavoritesList />}
        // right={null}
        />
    )
}



export default withRouter(EventsPage)