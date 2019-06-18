import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import { RippleTouchable } from 'react-native-ripple-controls';

import { IconeAcao, TipoIcone, Props as ObjetoAcao } from '../icone-acao/IconeAcao';
import app from '../../estilos/index';
import { Header as HeaderNativeElements } from 'react-native-elements';
import estilos from './estilos';


export interface IconeAcao {
    acao(): void,
    icone: string,
    tipoIcone: TipoIcone
}

export interface Props {  
    titulo: string,
    iconesAcao: Array<ObjetoAcao>,
    iconeNavegacao?: string,
    tipoIconeNavegacao: TipoIcone,
    backgrondColor: string,
    acaoBotaoNavegacao(): void
}

export class Header extends Component<Props>{

    constructor(props: Props) {
        super(props);
    }

    render() {

        const tipoIconeNavegacao = this.props.tipoIconeNavegacao;
        const iconeNavegacao = this.props.iconeNavegacao;
        const backgroundColor = this.props.backgrondColor;
        const acaoBotaoNavegacao = this.props.acaoBotaoNavegacao
        const iconesAcao = this.props.iconesAcao

        return (

            <HeaderNativeElements
                statusBarProps={{
                    translucent: true,
                }}
                containerStyle={estilos.containerStyle}
                placement='center'
                backgroundColor={backgroundColor}


                leftComponent={
                    iconeNavegacao ?
                        <View style={estilos.containerIconeNavegacao}>
                            <RippleTouchable
                                containerStyle={estilos.containerIconeNavegacao}
                                isRippleCenter={true}
                                onPress={() => acaoBotaoNavegacao()}>
                                <IconeAcao
                                    acao={() => false}
                                    tipoIcone={tipoIconeNavegacao}
                                    tamanhoIcone={app.fonts.iconeGrande}
                                    icone={iconeNavegacao} />
                            </RippleTouchable>
                        </View>
                        :
                        <View>

                        </View>
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
                            iconesAcao ?
                                iconesAcao.map((item, index: number) =>
                                    <RippleTouchable
                                        key={index}
                                        containerStyle={estilos.containerIconeNavegacao}
                                        isRippleCenter={true}
                                        onPress={item.acao}>

                                        <IconeAcao
                                            tipoIcone={item.tipoIcone}
                                            tamanhoIcone={app.fonts.iconeGrande}
                                            icone={item.icone}
                                            acao={item.acao}
                                        />
                                    </RippleTouchable>
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