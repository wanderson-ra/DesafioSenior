import 'react-native';
import * as React from 'react';
import { FalhaConexao } from '../../components/falha-conexao/FalhaConexao';

// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(<FalhaConexao
        onPress={() => false} />);
});
