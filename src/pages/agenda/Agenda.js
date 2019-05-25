import React, { Component, Fragment } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';
import { connect } from 'react-redux';

import ProgressDialog from '../../components/progress-dialog/ProgressDialog';
import app from '../../app/index';
import estilos from './estilos';
import FalhaConexao from '../../components/falha-conexao/FalhaConexao';
import Header from '../../components/header/Header';

import {
  getAgenda
} from '../../redux/actions/agenda/AgendaAction';





class Agenda extends Component {

  componentDidMount() {
    this._getAgenda();
  }

  header = () => {
    const iconesAcao = [
      {
        tipoIcone: 'material',
        icone: 'refresh',
        acao: () => this._getAgenda(),
        contadorNotificacao: 0
      },
    ]

    return (
      <Fragment>
        <StatusBar
          backgroundColor={app.cores.primariaDark}
          barStyle="light-content"
        />

        <Header          
          titulo={app.strings.nomeApp}
          tipoIconeNavegacao='material'
          iconesAcao={iconesAcao}
        />

        <ProgressDialog
          visible={this.props.loadingAgenda}
        />
      </Fragment>
    )
  }

  _getAgenda = () => {
    this.props.getAgenda('101');
  }

  render() {

    const {
      agenda,
      erroAgenda,
      loadingAgenda
    } = this.props;

    if (loadingAgenda) {
      return (
        <View style={{ flex: 1 }}>
          {
            this.header()
          }
        </View>
      );
    }

    else if (!loadingAgenda && erroAgenda) {
      return (
        <View style={{ flex: 1 }}>
          {
            this.header()
          }
          <FalhaConexao
            acao={() => this._getAgenda()} />
        </View>
      )
    } else {

      return (
        <View style={{
          flex: 1
        }}>
          {
            this.header()
          }

          <View style={estilos.container}>
            <Text>Agenda</Text>
          </View>

        </View>
      )
    }
  }
}

const mapStateToProps = state => (
  {
    agenda: state.AgendaReducer.agenda,
    erroAgenda: state.AgendaReducer.erroAgenda,
    loadingAgenda: state.AgendaReducer.loadingAgenda,
  }
);

export default connect(mapStateToProps, {
  getAgenda
})(Agenda);
