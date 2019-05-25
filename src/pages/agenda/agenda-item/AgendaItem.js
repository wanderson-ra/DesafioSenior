import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';
import moment from 'moment';
import PropTypes from 'prop-types';

import app from '../../../app/index';
import estilos from './estilos';
import Ripple from '../../../components/ripple/Ripple';

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
                            style={estilos.descricao}>{recurso.descricaoTarefa}
                        </Text>

                        <Text
                            lineBreakMode='tail'
                            numberOfLines={1}
                            style={estilos.data}>{moment(new Date(recurso.dataHoraInicio)).format('DD/MM/YYYY')}
                        </Text>
                    </View>

                    <View style={estilos.wrapperHorario}>

                        <Text
                            lineBreakMode='tail'
                            numberOfLines={1}
                            style={estilos.textoHorario}>
                            {moment(new Date(recurso.dataHoraInicio)).format('H:mm')} - {moment(new Date(recurso.dataHoraFim)).format('H:mm')}</Text>
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