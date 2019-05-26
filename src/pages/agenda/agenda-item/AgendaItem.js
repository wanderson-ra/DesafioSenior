import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import estilos from './estilos';
import Ripple from '../../../components/ripple/Ripple';
import { formatarData } from '../../../utils/formatter';

export default class AgendaItem extends Component {

    static propTypes = {
        recurso: PropTypes.object.isRequired,
    };

    render() {

        const { recurso } = this.props;
        const inciaisTarefa = recurso.descricaoTarefa.split(' ');

        return (
            <Ripple
                style={estilos.container}>

                <View style={estilos.subItem}>
                    <View style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>
                        <Text
                            lineBreakMode='tail'
                            numberOfLines={1}
                            style={estilos.textoHorario}>
                            {formatarData(recurso.dataHoraInicioFormatada, 'DD/MM/YYYY H:mm', 'H:mm')} - {formatarData(recurso.dataHoraFimFormatada, 'DD/MM/YYYY H:mm', 'H:mm')}</Text>

                        <Text
                            lineBreakMode='tail'
                            numberOfLines={1}
                            style={estilos.data}>{formatarData(recurso.dataHoraInicioFormatada, 'DD/MM/YYYY H:mm', 'DD/MM/YYYY')}
                        </Text>
                    </View>

                    <View style={estilos.wrapperHorario}>
                        <Text
                            lineBreakMode='tail'
                            numberOfLines={2}
                            style={estilos.descricao}>{recurso.descricaoTarefa}
                        </Text>

                    </View>

                </View>

                <View style={[estilos.wrapperInciaisDescricao,
                { backgroundColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')' }
                ]}>

                    <Text
                        style={estilos.textoInciaisDescricao}>{inciaisTarefa[0][0]}{inciaisTarefa[1] ? inciaisTarefa[1][0] : ''}</Text>
                </View>
            </Ripple>
        );
    }
}