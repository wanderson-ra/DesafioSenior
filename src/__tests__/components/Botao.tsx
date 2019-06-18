import 'react-native';
import * as React from 'react';
import { Botao } from '../../components/botao/Botao';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';

// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<Botao
        onPress={() => false}
        habilitado={true}
        altura={height('10%')}
        largura={width('80%')}
        titulo='Teste' />);
});
