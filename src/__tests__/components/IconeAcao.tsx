import 'react-native';
import * as React from 'react';
import { IconeAcao, TipoIcone } from '../../components/icone-acao/IconeAcao';


// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<IconeAcao
        acao={() => false}
        icone='bell'
        tamanhoIcone={20}
        tipoIcone={TipoIcone.material}
    />);
});
