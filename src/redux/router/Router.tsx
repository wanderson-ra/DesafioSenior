import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import Agenda from '../../pages/agenda/Agenda';

class Routers extends Component {

    render() {
        return (
            <Router
                key="root">

                <Stack
                    key='root'>
                    <Scene
                        initial={true}
                        hideNavBar={true}
                        title='Principal'
                        key='principal'
                        component={gestureHandlerRootHOC(Agenda)}
                    />
                </Stack>
            </Router>
        );
    }
}

export default Routers;