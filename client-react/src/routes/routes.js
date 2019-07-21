import {Switch, Route} from 'react-router-dom'
import React, { Suspense, lazy } from 'react'


import ClienteLista from '../components/area-restrita/cliente/ClientList.jsx'
import ClienteView from '../components/area-restrita/cliente/ClientView.jsx'
import ClienteForm from '../components/area-restrita/cliente/ClientForm.jsx'
const AreaRestrita = lazy(() => import('../components/area-restrita/AreaRestrita.jsx'));

class Routes extends React.Component {

                    
    render(){
        return (
             <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/arearestrita/cliente/visualizar/:clienteId" component={ClienteView}/>
                    <Route path="/arearestrita/cliente/novo/:clienteId" component={ClienteForm}/>
                    <Route path="/arearestrita/cliente/novo" component={ClienteForm}/>
                    <Route path="/arearestrita/cliente" component={ClienteLista}/>
                    <Route path="/arearestrita" component={AreaRestrita}/>
                </Switch>
            </Suspense>
            
        )
    }
}


export default Routes;