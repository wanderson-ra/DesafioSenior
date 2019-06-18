import React, { Component } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View } from 'react-native';


import app from '../../estilos/index';
import estilos from './estilos';

export enum TipoIcone {
    material,
    ionicons
}

export interface Props {
    tipoIcone: TipoIcone,
    tamanhoIcone: number,
    estiloIcone?: object,
    icone: string,
    acao(): void
}

export class IconeAcao extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {

        const tipoIcone = this.props.tipoIcone;
        const estiloIcone = this.props.estiloIcone;
        const tamanhoIcone = this.props.tamanhoIcone;
        const icone = this.props.icone

        return (
            <View
                style={[estilos.icone, estiloIcone]}>
                {
                    tipoIcone === TipoIcone.material ?
                        <MaterialCommunityIcons
                            name={icone}
                            size={tamanhoIcone}
                            color={app.cores.navegacao.iconeAcao} />
                        :
                        <Ionicons
                            name={icone}
                            size={tamanhoIcone}
                            color={app.cores.navegacao.iconeAcao} />
                }
            </View>
        );
    }
}

