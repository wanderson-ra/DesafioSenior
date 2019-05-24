import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import Agenda from '../../pages/agenda/Agenda';
import estilos from './estilos';

class Routers extends Component {    

    render() {        
        return (           
                <Router
                    barButtonIconStyle={estilos.botaoBarraNavegacao}
                    titleStyle={estilos.tituloBarranavegacao}
                    navigationBarStyle={estilos.barraNavegacao}
                    key="root">

                    <Stack                        
                        key='root'>

                        <Scene
                            initial={true}
                            hideNavBar={false}
                            title='Agenda'
                            key='agenda'
                            component={gestureHandlerRootHOC(Agenda)}
                        />                      
                    </Stack>
                </Router>           
        );
    }
}

export default Routers;


