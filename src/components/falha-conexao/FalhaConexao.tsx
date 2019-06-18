import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';


import { View, Text } from 'react-native';

import { Botao } from '../../components/botao/Botao';
import estilos from './estilos';
import app from '../../estilos/index';

export interface Props {
    onPress(): void;
}

export class FalhaConexao extends Component<Props>{

    constructor(props: Props) {
        super(props);
    }

    render() {
        const onPress = this.props.onPress;
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
                    onPress={() => onPress()}
                    altura={height('5%')}
                    largura={width('90%')} />
            </View>

        );

    }
}
