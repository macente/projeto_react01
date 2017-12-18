import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import AppTitle from './src/components/app-title';
import MovieList from './src/components/movie-list';

const App = () => {
    return(
        <View>
          <AppTitle texto={'Próximos Lançamentos'} />
          <MovieList />
        </View>
    );
}

AppRegistry.registerComponent('projeto_react01', () => App);
