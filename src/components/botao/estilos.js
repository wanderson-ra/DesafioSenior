import { StyleSheet } from 'react-native';

import app from '../../app/index';

const estilos = StyleSheet.create({

    containerPrimarioHabilitado: {
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',               
        backgroundColor: app.cores.botaoPrimario.fundo
    },

    containerPrimarioDesabilitado: {      
        opacity:0.4,  
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,       
        backgroundColor: app.cores.botaoPrimario.fundo
    },

    textoBotaoPrimario: {
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: app.fonts.pequena,
        color: app.cores.botaoPrimario.fonte,
    },
});

export default estilos;