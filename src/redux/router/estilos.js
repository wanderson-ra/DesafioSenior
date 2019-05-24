import { StyleSheet } from 'react-native';

import app from '../../app/index';

const estilos = StyleSheet.create({

    barraNavegacao: {
        backgroundColor: app.cores.primaria,
        borderBottomWidth: 0,
        elevation: 0,
        borderBottomColor: 'transparent',
    },

    botaoBarraNavegacao: {
        tintColor: app.cores.navegacao.botaoVoltar
    },

    tituloBarranavegacao: {
        color: app.cores.navegacao.titulo
    }
});

export default estilos;