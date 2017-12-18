import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import AppTitle from './src/components/app-title';

const App = () => {
    return(
        <View>
          <AppTitle texto={'Próximos Lançamentos'} />
        </View>
    );
}

AppRegistry.registerComponent('projeto_react01', () => App);
