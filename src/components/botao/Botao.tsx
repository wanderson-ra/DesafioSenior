import React from 'react';
import { Component, Fragment } from 'react';
import { RippleTouchable } from 'react-native-ripple-controls';
import { View, Text } from 'react-native';

import estilos from './estilos';
import app from '../../estilos/index';

export interface Props {
    habilitado: boolean,
    altura: number,
    largura: number,
    titulo: string,
    onPress(): void;
}

export class Botao extends Component<Props>{

    constructor(props: Props) {
        super(props);
    }

    render() {
        const habilitado = this.props.habilitado;
        const altura = this.props.altura;
        const largura = this.props.largura;
        const titulo = this.props.titulo;
        const onPress = this.props.onPress;

        return (
            <Fragment>
                {
                    habilitado ?
                        <RippleTouchable
                            onPress={() => onPress()}
                            rippleColor={app.cores.botaoPrimario.rippleColor}
                            containerStyle={[estilos.containerPrimarioHabilitado, { width: largura, height: altura }]}>
                            <Text style={estilos.textoBotaoPrimario}>
                                {titulo}
                            </Text>
                        </RippleTouchable>
                        :

                        <View
                            style={[estilos.containerPrimarioDesabilitado, { width: largura, height: altura }]}>
                            <Text style={estilos.textoBotaoPrimario}>{titulo}</Text>
                        </View>
                }
            </Fragment>
        )
    }
}