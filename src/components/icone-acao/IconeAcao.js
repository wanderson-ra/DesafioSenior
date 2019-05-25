import React, { Component } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View } from 'react-native';

import app from '../../app/index';
import estilos from './estilos';

export default class IconeAcao extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View                
                style={[estilos.icone, this.props.iconStyle]}>
                {
                    this.props.typeIcon === 'material' ?
                        <MaterialCommunityIcons
                            name={this.props.icone}
                            size={this.props.size}
                            color={app.cores.navegacao.iconeAcao} />
                        :
                        <Ionicons
                            name={this.props.icone}
                            size={this.props.size}
                            color={app.cores.navegacao.iconeAcao} />
                }
            </View>
        );
    }
}

IconeAcao.defaultProps = {
    size: 20,
    typeIcon: 'material',
    iconStyle: {}
}
