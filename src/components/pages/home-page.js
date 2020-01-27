import React from 'react'
import Row from '../row'
import {withRouter} from 'react-router-dom'
import EventsList from '../events-list'
import EventsDetails from '../events-details'
import Filter from '../fllter'
const HomePage =({history, match})=>{

    const {id} = match.params
    
    return(
        <div>
            <Row
                left={<EventsList/>}
                right={
                <>
                <Filter/>
                <EventsDetails/>
                </>
                }
            />
        </div>
    )
}
export default withRouter(HomePage)
