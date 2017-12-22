import React, { Component } from 'react';
import { Text, View, Image, ScrollView, Linking, WebView  } from 'react-native';
import AppTitle from './app-title';
import MovieItem from './movie-item';

class MovieList extends Component {

    state = { lista: [{id:0,filme:'Carregando...'}] };

    urlDaApi = 'https://raw.githubusercontent.com/macente/projeto_react01/master/lista.json';

    componentWillMount() {
        this.carregaLista();
    }

    carregaLista() {
        fetch(this.urlDaApi)
            .then(resposta => {
                resposta.json().then(data => {
                    console.log(data);
                    this.setState({ lista: data });
                })

                    .catch(erro => {
                        console.log(erro);
                        this.setState(
                            { lista: [{ id: 0, filme: 'Deu erro' }] }
                        );
                    })
            })
            ;
    }

    renderListMovie() {
         return this.state.lista.map(
            itemList => <MovieItem key={itemList.id} onPressTrailler={()=>this.traillerMovie(itemList)} dados={itemList} />
         );
    }

    traillerMovie(itemList){
        Linking.canOpenURL(itemList.trailler).then(supported => {
        if (!supported) {
            console.log('Can\'t handle url: ' + itemList.trailler);
        } else {
            return Linking.openURL(itemList.trailler);
        }
        }).catch(err => console.error('An error occurred', err));
    }

    render() {
        return (<ScrollView>
                    <AppTitle texto={'Próximos Lançamentos'} />    
                    {this.renderListMovie()}
                </ScrollView>
        );
    }
    
}

export default MovieList;
