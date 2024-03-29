import { StyleSheet } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';

import app from '../../estilos/index';

const estilos = StyleSheet.create({

    containerSecundario: {
        flex: 1,
        backgroundColor: app.cores.fundoTela
    },

    item: {
        backgroundColor: app.cores.fundoTela,
        flex: 1,
        borderRadius: height('0.5%'),
        padding: height('1%'),
        marginRight: height('1%'),
        marginTop: height('2%'),
        marginBottom: height('2%'),
        height: height('13%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: app.cores.fundoTela,
    },
    agenda: {
        flex: 1,
        width: width('100%'),
        height: height('80%')
    },
    wrapperPicker: {
        height: height('10%'),
        justifyContent: 'flex-start',
        paddingHorizontal: height('2%'),
        paddingVertical: height('1%'),
        borderTopColor: app.cores.primaria,
        borderTopWidth: height('0.1%'),
    },

    renderEmptyData: {
        backgroundColor: app.cores.fundoTela,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    textoEmptyData: {
        fontSize: app.fonts.media,
        color: app.cores.fonte.primaria,
        fontWeight: '600'
    }
});


export default estilos;

export const pickerSelectStyles = StyleSheet.create({

    iconContainer: {
        top: 14,
        right: 12,
    },
    inputIOS: {
        width: width('90%'),
        fontSize: app.fonts.media,
        paddingHorizontal: width('2%'),
        paddingVertical: height('2%'),
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        color: 'black',
        fontWeight: '600',
        paddingRight: width('5%'),
    },
    inputAndroid: {
        width: width('90%'),
        fontSize: app.fonts.media,
        paddingHorizontal: width('2%'),
        paddingVertical: height('2%'),
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        color: 'black',
        fontWeight: '600',
        paddingRight: width('5%'),
    },
});
