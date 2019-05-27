import React, { Component, Fragment } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { connect } from 'react-redux';
import { Agenda as AgendaCalendario } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars'
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ProgressDialog from '../../components/progress-dialog/ProgressDialog';
import app from '../../app/index';
import estilos, { pickerSelectStyles } from './estilos';
import FalhaConexao from '../../components/falha-conexao/FalhaConexao';
import Header from '../../components/header/Header';
import { formatarChaveData } from '../../utils/formatter';

import {
  getAgenda,
  mudarAgendaRecurso
} from '../../redux/actions/agenda/AgendaAction';
import AgendaItem from './agenda-item/AgendaItem';

LocaleConfig.locales['pt'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
};

LocaleConfig.defaultLocale = 'pt';

class Agenda extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recurso: undefined
    };
  }

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

  renderItem(recurso) {
    return (
      <AgendaItem recurso={recurso} />
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

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  render() {
    const {
      agendas,
      erroAgenda,
      loadingAgenda,
      agendaAtual,
      recursos,
      mudarAgendaRecurso
    } = this.props;

    const { recurso } = this.state;

    if (loadingAgenda) {
      return (
        <View style={estilos.containerSecundario}>
          {
            this.header()
          }
        </View>
      );
    } else if (!loadingAgenda && erroAgenda) {
      return (
        <View style={estilos.containerSecundario}>
          {
            this.header()
          }
          <FalhaConexao
            acao={() => this._getAgenda()} />
        </View>
      )
    } else {
      return (
        <View style={estilos.containerSecundario}>
          {
            this.header()
          }
          {
            agendaAtual ?
              <View style={estilos.container}>
                <AgendaCalendario
                  style={estilos.agenda}
                  items={agendaAtual.agenda}
                  loadItemsForMonth={month => false}
                  selected={formatarChaveData(new Date())}
                  renderItem={item => this.renderItem(item)}
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
                    indicatorColor: app.cores.primariaLight,
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
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
              value={recurso ? recurso : agendaAtual ? agendaAtual.idRecurso : recurso}
              placeholder={{
                label: app.strings.placeholderPicker,
                value: null,
                color: 'gray',
              }}
              items={recursos}
              onValueChange={(value) => {
                mudarAgendaRecurso(agendas, value);
                this.setState({
                  recurso: value,
                });
              }}

              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={true}
              ref={(el) => {
                this.picker = el;
              }}
              Icon={() => {
                return <Icon name="arrow-down-drop-circle" size={app.fonts.iconeMedio} color={app.cores.primariaDark} />;
              }}
            />
          </View>
        </View>
      )
    }
  }
}

const mapStateToProps = state => (
  {
    agendaAtual: state.AgendaReducer.agendaAtual,
    agendas: state.AgendaReducer.agendas,
    erroAgenda: state.AgendaReducer.erroAgenda,
    loadingAgenda: state.AgendaReducer.loadingAgenda,
    recursos: state.AgendaReducer.recursos
  }
);

export default connect(mapStateToProps, {
  getAgenda,
  mudarAgendaRecurso
})(Agenda);


