import { StyleSheet } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';

import app from '../../../app/index';

const estilos = StyleSheet.create({

    container: {
        backgroundColor: app.cores.fundoTela,
        flex: 1,
        borderRadius: height('0.5%'),
        padding: height('1%'),
        marginRight: height('1%'),
        marginTop: height('2%'),
        marginBottom: height('2%'),
        height: height('10%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    subItem: {
        flex: 1,
        justifyContent: 'space-evenly',
        height: height('8%')
    },

    data: {
        width: width('20%'),
        fontSize: app.fonts.pequena,
        color: app.cores.fonte.primaria,
        marginRight: width('5%')
    },

    descricao: {
        width: width('30%'),
        fontSize: app.fonts.pequena,
        color: app.cores.fonte.primaria
    },

    wrapperHorario: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    textoHorario: {
        width: width('40%'),
        fontSize: app.fonts.micro,
        color: app.cores.fonte.primaria
    },

    wrapperInciaisDescricao: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: height('3.5%'),
        width: height('6%'),
        height: height('6%')
    },

    textoInciaisDescricao: {
        color: app.cores.fonte.terciaria,
        fontWeight: '600',
        fontSize: app.fonts.media
    }
});

export default estilos;
