import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import Botao from '../../components/botao/Botao';
import estilos from './estilos';
import app from '../../app/index';


export default class FalhaConexao extends Component {

    static propTypes = {
        acao: PropTypes.func.isRequired,
    };

    render() {

        const { acao } = this.props;
        return (
            <View style={estilos.container}>

                <Icon
                    name='alert-outline'
                    size={height('15%')}
                    color={app.cores.icone}
                />

                <Text style={estilos.textoFalhaConexao}>{app.strings.textoFalhaConexao}</Text>

                <Text style={estilos.textoVerifcarConfiguracao}>{app.strings.textoVerificarConfiguracao}</Text>

                <Botao
                    habilitado={true}
                    titulo={app.strings.botaoTentarNovamente}
                    acao={() => acao()}
                    width={width('90%')} />

            </View>

        );

    }
}
