import 'react-native';
import * as React from 'react';
import { Header } from '../../components/header/Header';
import {Props as ObjetoAcao, TipoIcone } from '../../components/icone-acao/IconeAcao';
import * as renderer from 'react-test-renderer';    


it('renders correctly', () => {
    const icones: ObjetoAcao[] = [
        {icone: 'bell', tamanhoIcone: 40, tipoIcone:TipoIcone.material, acao:()=> false}
    ]

    renderer.create(<Header
        acaoBotaoNavegacao={() => false}
        iconesAcao = {icones}
        backgrondColor= '#ffffff'
        iconeNavegacao='arrow-left'
        tipoIconeNavegacao={TipoIcone.material}
        titulo='Teste' />);
});
