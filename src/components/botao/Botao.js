import React, { Component, Fragment } from 'react';
import { Text, View, Platform } from 'react-native'
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';


import Ripple from '../../components/ripple/Ripple';
import estilos from './estilos';
import app from '../../app/index';

class Botao extends Component {

    static defaultProps = {
        habilitado: false,
        height: width(Platform.select({ ios: '10%', android: '10%' })),
    };

    constructor(props) {
        super(props)
    }

    render() {
        const { habilitado } = this.props;
        return (
            <Fragment>
                {
                    habilitado ?
                        <Ripple
                            rippleDuration={700}
                            rippleColor={app.cores.botaoPrimario.rippleColor}
                            onPress={this.props.acao}
                            style={[estilos.containerPrimarioHabilitado, { width: this.props.width, height: this.props.height }]}>
                            <Text style={estilos.textoBotaoPrimario}>{this.props.titulo}</Text>
                        </Ripple>
                        :
                        <View
                            style={[estilos.containerPrimarioDesabilitado, { width: this.props.width, height: this.props.height }]}>
                            <Text style={estilos.textoBotaoPrimario}>{this.props.titulo}</Text>
                        </View>
                }
            </Fragment>
        );
    }
}

export default Botao;