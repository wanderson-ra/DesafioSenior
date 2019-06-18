import { StyleSheet } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';

import app from '../../estilos/index';

const estilos = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textoFalhaConexao: {
        marginVertical: height('2%'),
        textAlign: 'center',
        fontSize: app.fonts.media,
        color: app.cores.fonte.primaria,
        fontWeight: '700',
        width: width('80%'),
    },

    textoVerifcarConfiguracao: {
        marginBottom: height('2%'),
        textAlign: 'center',
        fontSize: app.fonts.pequena,
        color: app.cores.fonte.secundaria,
        width: width('63%')
    }

});

export default estilos;
