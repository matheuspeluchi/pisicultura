import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import AreaRestrita from '../components/area-restrita/AreaRestrita'
import ClienteLista from '../components/area-restrita/cliente/client-list/ClientList';

class Routes extends React.Component {

    constructor(props){
        super(props)
    }
                    
    render(){
        return (

            <Switch>
                <Route path="/arearestrita/cliente" component={ClienteLista}/>
                <Route path="/arearestrita" component={AreaRestrita}/>
            </Switch>
        )
    }
}


export default Routes;