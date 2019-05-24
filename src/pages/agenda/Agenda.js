import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';

import ProgressDialog from '../../components/progress-dialog/ProgressDialog';
import app from '../../app/index';
import estilos from './estilos';


export default class App extends Component {
  render() {
    return (
      <View style={estilos.container}>

        <StatusBar
          backgroundColor={app.cores.primariaDark}
          barStyle="light-content"
        />

        <ProgressDialog
          visible={false}
        /> 
      </View>
    );
  }
}

