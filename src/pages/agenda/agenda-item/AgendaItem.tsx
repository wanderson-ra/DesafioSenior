import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RippleTouchable } from 'react-native-ripple-controls';

import estilos from './estilos';
import { formatarData } from '../../../utils/Formatter';
import app from '../../../estilos/index';
import { Tarefa } from '../../../models/Tarefa';


export interface Props {
    tarefa: Tarefa
}

export class AgendaItem extends Component<Props>{

    constructor(props: Props) {
        super(props);
    }

    render() {
        const tarefa: Tarefa = this.props.tarefa;
        const inciaisTarefa: string[] = tarefa.descricaoTarefa.split(' ');

        return (
            <RippleTouchable
                onPress={() => false}
                rippleColor={app.cores.botaoPrimario.rippleColor}
                containerStyle={estilos.container}>
                <View style={estilos.subItem}>
                    <View style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>
                        <Text
                            lineBreakMode='tail'
                            numberOfLines={1}
                            style={estilos.textoHorario}>
                            {formatarData(tarefa.dataHoraInicioFormatada, 'DD/MM/YYYY H:mm', 'H:mm')} - {formatarData(tarefa.dataHoraFimFormatada, 'DD/MM/YYYY H:mm', 'H:mm')}</Text>

                        <Text
                            lineBreakMode='tail'
                            numberOfLines={1}
                            style={estilos.data}>{formatarData(tarefa.dataHoraInicioFormatada, 'DD/MM/YYYY H:mm', 'DD/MM/YYYY')}
                        </Text>
                    </View>

                    <View style={estilos.wrapperHorario}>
                        <Text
                            lineBreakMode='tail'
                            numberOfLines={2}
                            style={estilos.descricao}>{tarefa.descricaoTarefa}
                        </Text>

                    </View>

                </View>

                <View style={[estilos.wrapperInciaisDescricao,
                { backgroundColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')' }
                ]}>
                    <Text
                        style={estilos.textoInciaisDescricao}>{inciaisTarefa[0][0]}{inciaisTarefa[1] ? inciaisTarefa[1][0] : ''}</Text>
                </View>
            </RippleTouchable>
        )
    }
}