import React, { Component, Fragment } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { Agenda as AgendaCalendario } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars'
import moment from 'moment';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ProgressDialog from '../../components/progress-dialog/ProgressDialog';
import app from '../../app/index';
import estilos, { pickerSelectStyles } from './estilos';
import FalhaConexao from '../../components/falha-conexao/FalhaConexao';
import Header from '../../components/header/Header';

import {
  getAgenda,
  mudarAgendaRecurso
} from '../../redux/actions/agenda/AgendaAction';
import AgendaItem from './agenda-item/AgendaItem';


LocaleConfig.locales['pt-BR'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
  dayNamesShort: ['Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.', 'Dom.']
};

LocaleConfig.defaultLocale = 'pt-BR';
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
                  style={{
                    flex: 1,
                    width: width('100%'),
                    height: height('80%')
                  }}
                  items={agendaAtual.agenda}
                  loadItemsForMonth={month => false}
                  selected={moment(new Date()).format('YYYY-MM-DD')}
                  renderItem={this.renderItem.bind(this)}
                  renderEmptyDate={this.renderEmptyDate.bind(this)}
                  rowHasChanged={this.rowHasChanged.bind(this)}
                  onCalendarToggled={calendarOpened => false}
                  onDayPress={(day) => console.log(day)}
                  onDayChange={(day) => false}
                  onRefresh={() => false}
                  refreshing={false}
                  refreshControl={null}
                  maxDate={moment(new Date()).add(3, 'months').format('YYYY-MM-DD')}
                  theme={{
                    calendarBackground: '#ffffff',
                    agendaDayTextColor: app.cores.primariaDark,
                    agendaDayNumColor: app.cores.primariaDark,
                    agendaKnobColor: app.cores.primariaDark,
                    textSectionTitleColor: '#b6c1cd',
                    selectedDayBackgroundColor: app.cores.primariaDark,
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: app.cores.primariaDark,
                    dayTextColor: app.cores.fonte.primaria,
                    textDisabledColor: '#d9e1e8',
                    dotColor: app.cores.primariaDark,
                    selectedDotColor: '#ffffff',
                    monthTextColor: app.cores.primariaLight,
                    indicatorColor: app.cores.primariaLight,
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: app.fonts.pequena,
                    textMonthFontSize: app.fonts.pequena,
                    textDayHeaderFontSize: app.fonts.pequena
                  }}
                />
              </View> :
              null
          }

          <View style={estilos.wrapperPicker}>

            <RNPickerSelect
              doneText='Selecionar'
              value={recurso ? recurso : agendaAtual ? agendaAtual.idRecurso : recurso}
              placeholder={{
                label: 'Selecione o colaborador',
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


