
import { Agenda as AgendaCalendario } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars'
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-loading-spinner-overlay';
import _ from 'lodash';

import React, { Component, Fragment } from 'react';
import { View, StatusBar, Text } from 'react-native';


import { Header } from '../../components/header/Header';
import { TipoIcone, Props as ObjetoAcao } from '../../components/icone-acao/IconeAcao';
import app from '../../estilos/index';

import { RootState } from '../../redux/reducers/index';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { login } from '../../redux/actions/principal/PrincipalAction';
import { getAllAgenda, mudarAgendaRecurso } from '../../redux/actions/agenda/AgendaAction';

import { PrincipalReducer } from '../../redux/reducers/PrincipalReducer';
import { AgendaReducer } from '../../redux/reducers/AgendaReducer';

import { formatarChaveData } from '../../utils/Formatter';
import estilos, { pickerSelectStyles } from './estilos';
import { Tarefa } from '../../models/Tarefa';
import { AgendaItem } from './agenda-item/AgendaItem';
import { FalhaConexao } from '../../components/falha-conexao/FalhaConexao';
import { Recurso } from '../../models/Recurso';
import { Agenda as Agendas } from "../../models/Agenda";


interface State {
  recurso: any
}

interface OwnProps {
}

interface DispatchProps {
  login: (nome: string, sobrenome: string) => void,
  getAllAgenda: (idUsuario: string) => void
  mudarAgendaRecurso: (Agenda: Agendas | undefined, idRecurso: string) => void
}

interface StateProps {
  principalReducer: PrincipalReducer,
  agendaReducer: AgendaReducer
}

type Props = StateProps & OwnProps & DispatchProps;

LocaleConfig.locales['pt'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
};

LocaleConfig.defaultLocale = 'pt';

class Agenda extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      recurso: undefined
    }
  }

  componentDidMount() {
    this._getAgenda();
  }

  header = () => {
    const iconesAcao: ObjetoAcao[] = [
      {
        icone: 'refresh',
        tamanhoIcone: app.fonts.iconeGrande,
        tipoIcone: TipoIcone.material,
        acao: () => this._getAgenda()
      },
    ]
    return (

      <Fragment>
        <StatusBar
          backgroundColor={app.cores.primariaDark}
          barStyle="light-content"
        />

        <Header
          backgrondColor={app.cores.primaria}
          acaoBotaoNavegacao={() => false}
          titulo={app.strings.nomeApp}
          tipoIconeNavegacao={TipoIcone.material}
          iconesAcao={iconesAcao}
        />

        <Spinner
          visible={this.props.agendaReducer.loadingGetAgenda}
          textContent={'Carregando...'}
          textStyle={{ color: app.cores.primaria }}
        />
      </Fragment>
    )
  }

  _getAgenda = () => {
    this.props.getAllAgenda('101');
  }

  _getItemsAgenda = (agendaAtual: Recurso): any => {
    let tarefas: any = {}
    _.forEach(agendaAtual.tarefasData, tarefa => {
      let data = tarefa.dia.Data.split('T')[0]
      let dia = formatarChaveData(new Date(data));
      tarefas[dia] = tarefa.tarefas;
    });
    return tarefas;
  }

  _getRecursos = (recursos: Recurso[]): any[] => {
    let mapRecursos: any[] = [];

    _.forEach(recursos, item => {
      mapRecursos.push({
        label: item.nomeRecurso,
        value: item.codRecurso
      });
    });
    return mapRecursos;
  }

  renderItem(tarefa: Tarefa) {
    return (
      <AgendaItem tarefa={tarefa} />
    );
  }

  renderEmptyDate() {
    return (
      <View style={estilos.item}>
        <Text>{app.strings.dataSemEventos}
        </Text>
      </View>
    );
  }

  renderEmptyData() {
    return (
      <View style={estilos.renderEmptyData}>
        <Text style={estilos.textoEmptyData}>{app.strings.semLancamentosPeriodo}</Text>
      </View>
    )
  }

  rowHasChanged(r1: any, r2: any) {
    return r1.name !== r2.name;
  }

  render() {

    if (this.props.agendaReducer.loadingGetAgenda) {
      return (
        <View style={estilos.containerSecundario}>
          {
            this.header()
          }
        </View>
      );
    } else if (!this.props.agendaReducer.loadingGetAgenda && this.props.agendaReducer.erroGetAgenda) {
      return (
        <View style={estilos.containerSecundario}>
          {
            this.header()
          }
          <FalhaConexao
            onPress={() => this._getAgenda()} />
        </View>
      )
    } else {
      return (
        <View style={estilos.containerSecundario}>
          {
            this.header()
          }
          {
            this.props.agendaReducer.agendaAtual ?
              <View style={estilos.container}>
                <AgendaCalendario
                  style={estilos.agenda}
                  items={this._getItemsAgenda(this.props.agendaReducer.agendaAtual)}
                  loadItemsForMonth={month => false}
                  selected={formatarChaveData(new Date('2017-06-09'))}
                  renderItem={item => this.renderItem((item as Tarefa))}
                  renderEmptyDate={() => this.renderEmptyDate()}
                  renderEmptyData={() => this.renderEmptyData()}
                  rowHasChanged={(r1, r2) => this.rowHasChanged(r1, r2)}
                  onCalendarToggled={calendarOpened => false}
                  onDayPress={(day) => false}
                  onDayChange={(day) => false}
                  theme={{
                    calendarBackground: app.cores.calendario.calendarBackground,
                    agendaDayTextColor: app.cores.primariaDark,
                    agendaDayNumColor: app.cores.primariaDark,
                    agendaKnobColor: app.cores.primariaDark,
                    textSectionTitleColor: app.cores.calendario.textSectionTitleColor,
                    selectedDayBackgroundColor: app.cores.primariaDark,
                    selectedDayTextColor: app.cores.calendario.selectedDayTextColor,
                    todayTextColor: app.cores.primariaDark,
                    dayTextColor: app.cores.fonte.primaria,
                    textDisabledColor: app.cores.calendario.textDisabledColor,
                    dotColor: app.cores.primariaDark,
                    selectedDotColor: app.cores.calendario.selectedDotColor,
                    monthTextColor: app.cores.primariaLight,
                    textMonthFontWeight: 'bold',
                    textDayFontSize: app.fonts.micro,
                    textMonthFontSize: app.fonts.micro,
                    textDayHeaderFontSize: app.fonts.media,                    
                  }}
                />
              </View> :
              null
          }

          <View style={estilos.wrapperPicker}>

            <RNPickerSelect
              doneText={app.strings.doneTextPicker}
              value={this.state.recurso ? this.state.recurso : this.props.agendaReducer.agendaAtual ? this.props.agendaReducer.agendaAtual.codEmpresa : this.state.recurso}
              placeholder={{
                label: app.strings.placeholderPicker,
                value: null,
                color: 'gray',
              }}
              items={this._getRecursos(this.props.agendaReducer.agenda ? this.props.agendaReducer.agenda.retorno.mapaAlocacao.recursos : [])}
              onValueChange={(value) => {
                this.props.mudarAgendaRecurso(this.props.agendaReducer.agenda, value);
                this.setState({
                  recurso: value,
                });
              }}

              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={true}
              Icon={() => {
                return <Icon
                  name="arrow-down-drop-circle"
                  size={app.fonts.iconeMedio}
                  color={app.cores.primariaDark} />;
              }}
            />
          </View>
        </View>
      )
    }
  }
}


const mapStateToProps = (states: RootState, ownProps: OwnProps): StateProps => {
  return {
    principalReducer: states.principal.principalReducer,
    agendaReducer: states.agenda.agendaReducer
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
  return {
    login: async (nome, sobrenome) => {
      await dispatch(login(nome, sobrenome));
    },

    getAllAgenda: async (idUsuario) => {
      await dispatch(getAllAgenda(idUsuario));
    },
    
    mudarAgendaRecurso: async (agenda, idrecurso) => {
      await dispatch(mudarAgendaRecurso(agenda, idrecurso));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Agenda)
