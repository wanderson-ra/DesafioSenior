import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Platform } from 'react-native';

import IconeAcao from '../icone-acao/IconeAcao';
import Ripple from '../../components/ripple/Ripple';
import app from '../../app/index';
import { Header as H } from 'react-native-elements'

import estilos from './estilos';

export default class Header extends Component {

    static propTypes = {
        acaoBotaoNavegacao: PropTypes.func,
        titulo: PropTypes.string.isRequired,
        iconesAcao: PropTypes.array
    };


    static defaultProps = {
        backgroundColor: app.cores.primaria,
        tipoIconeNavegacao: null,
        iconeNavegacao: null,
    }

    render() {

        const { tipoIconeNavegacao, iconeNavegacao } = this.props;

        return (

            <H
                statusBarProps={{
                    translucent: true,
                }}
                containerStyle={estilos.containerStyle}
                placement='center'
                backgroundColor={this.props.backgroundColor}


                leftComponent={
                    iconeNavegacao ?
                        <View style={estilos.containerIconeNavegacao} >
                            <Ripple
                                rippleCentered={true}
                                rippleContainerBorderRadius={app.fonts.iconeGrande * 2}
                                onPress={() => this.props.acaoBotaoNavegacao()} >
                                <IconeAcao
                                    typeIcon={this.props.tipoIconeNavegacao}
                                    size={app.fonts.iconeGrande}
                                    icone={this.props.iconeNavegacao} />
                            </Ripple>
                        </View>
                        :
                        null
                }

                centerComponent={
                    {
                        text: this.props.titulo, style: {
                            color: app.cores.fonte.terciaria,
                            fontSize: app.fonts.grande,
                            fontWeight: '400',
                        }
                    }}

                rightComponent={
                    <View
                        style={estilos.containerIconesAcao} >
                        {
                            this.props.iconesAcao ?
                                this.props.iconesAcao.map((item, index) =>
                                    <Ripple
                                        key={index}
                                        rippleCentered={true}
                                        rippleContainerBorderRadius={app.fonts.iconeGrande}
                                        onPress={item.acao} >


                                        <IconeAcao
                                            typeIcon={item.tipoIcone}
                                            size={app.fonts.iconeGrande}
                                            icone={item.icone}
                                            acao={item.acao}
                                        />
                                    </Ripple>
                                )
                                :
                                null
                        }
                    </View >
                }
            />

        )
    }
}



