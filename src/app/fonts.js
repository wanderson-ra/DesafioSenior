import { heightPercentageToDP as height } from 'react-native-responsive-screen';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

const fonts = {
    miniMicro: Platform.select({
        android: height('1.3%'),
        ios:  height('1.3%')
    }),

    micro: Platform.select({
        android: height('1.6%'),
        ios: isIphoneX() ? height('1.3%') : height('1.6%')
    }),

    pequena: Platform.select({
        android: height('2.1%'),
        ios: isIphoneX() ? height('1.6%') : height('2.1%')
    }),

    media: Platform.select({
        android: height('2.3%'),
        ios: isIphoneX() ? height('1.8%') : height('2.3%')
    }),

    grande: Platform.select({
        android: height('2.8%'),
        ios: isIphoneX() ? height('2.3%') : height('2.8%')
    }),

    extraGrande: Platform.select({
        android: height('3.5%'),
        ios: isIphoneX() ? height('3%') : height('3.5%')
    }),

    iconePequeno: Platform.select({
        android: height('2.4%'),
        ios: isIphoneX() ? height('1.9%') : height('2.4%')
    }),

    iconeMedio: Platform.select({
        android: height('2.8%'),
        ios: isIphoneX() ? height('2.3%') : height('2.8%')
    }),

    iconeGrande: Platform.select({
        android: height('3.4%'),
        ios: isIphoneX() ? height('2.9%') : height('3.4%')
    })
}

export default fonts;