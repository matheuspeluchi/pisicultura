import React, { Component } from 'react';

import {Route, Switch} from 'react-router-dom'
import ClienteView from "./cliente/ClientView";
import ClienteForm from "./cliente/ClientForm";
import ClienteLista from "./cliente/ClientList";
import AreaRestritaIndex from "./index";


class AreaRestrita extends Component {

  render() {
    const {props} = this;
    const contexto = props.match.url;

    return (
            <Switch>
                <Route exact={true} path={`${contexto}/cliente/visualizar/:clienteId`} component={ClienteView}/>
                <Route exact={true} path={`${contexto}/cliente/novo/:clienteId`} component={ClienteForm}/>
                <Route exact={true} path={`${contexto}/cliente/novo`} component={ClienteForm}/>
                <Route exact={true} path={`${contexto}/cliente`} component={ClienteLista}/>
                <Route exact={true} path={`${contexto}`} component={AreaRestritaIndex}/>
            </Switch>
    )
  }

}

export default AreaRestrita;
