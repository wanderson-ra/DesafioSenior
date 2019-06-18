import { StyleSheet, Platform } from 'react-native';
import { heightPercentageToDP as height } from 'react-native-responsive-screen';
import { isIphoneX } from 'react-native-iphone-x-helper';

import app from '../../estilos/index';


const estilos = StyleSheet.create({

    containerStyle: {
        height: Platform.select({
            android: height('13%'),
            ios: isIphoneX() ? height('12%') : height('10%'),
        }),

        borderWidth: 0,
        borderBottomColor: 'transparent'
    },

    containerIconeNavegacao: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: app.fonts.iconeGrande
    },

    containerIconesAcao: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

export default estilos;
