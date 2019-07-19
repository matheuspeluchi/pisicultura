import React from 'react'
import {Switch, Route} from 'react-router-dom'

import AreaRestrita from '../components/area-restrita/AreaRestrita'
import ClienteLista from '../components/area-restrita/cliente/client-list/ClientList'
import ClienteForm from '../components/area-restrita/cliente/cliente-form/ClienteForm'

class Routes extends React.Component {

    constructor(props){
        super(props)
    }
                    
    render(){
        return (
            <div >
                <Switch>
                    <Route path="/arearestrita/cliente/novo/:clienteId" component={ClienteForm}/>
                    <Route path="/arearestrita/cliente/novo" component={ClienteForm}/>
                    <Route path="/arearestrita/cliente" component={ClienteLista}/>
                    <Route path="/arearestrita" component={AreaRestrita}/>
                </Switch>
            </div>
        )
    }
}


export default Routes;