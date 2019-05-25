import React, { Component, Fragment } from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { Agenda as AgendaCalendario } from 'react-native-calendars';


import ProgressDialog from '../../components/progress-dialog/ProgressDialog';
import app from '../../app/index';
import estilos from './estilos';
import FalhaConexao from '../../components/falha-conexao/FalhaConexao';
import Header from '../../components/header/Header';

import {
  getAgenda
} from '../../redux/actions/agenda/AgendaAction';





class Agenda extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: {}
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
          barStyle="dark-content"
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

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height }]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
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
            <AgendaCalendario
              style={{ flex: 1 , width: width('100%')}}
              items={this.state.items}
              loadItemsForMonth={this.loadItems.bind(this)}
              selected={'2017-05-16'}
              renderItem={this.renderItem.bind(this)}
              renderEmptyDate={this.renderEmptyDate.bind(this)}
              rowHasChanged={this.rowHasChanged.bind(this)}
            // markingType={'period'}
            // markedDates={{
            //    '2017-05-08': {textColor: '#666'},
            //    '2017-05-09': {textColor: '#666'},
            //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
            //    '2017-05-21': {startingDay: true, color: 'blue'},
            //    '2017-05-22': {endingDay: true, color: 'gray'},
            //    '2017-05-24': {startingDay: true, color: 'gray'},
            //    '2017-05-25': {color: 'gray'},
            //    '2017-05-26': {endingDay: true, color: 'gray'}}}
            // monthFormat={'yyyy'}
            // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
            //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
            />
          </View>

        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

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


