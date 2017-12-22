import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import MovieList from './src/components/movie-list';

const App = () => {
    return(
        <View>
          <MovieList />
        </View>
    );
}

AppRegistry.registerComponent('projeto_react01', () => App);
