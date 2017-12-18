import React, { Component } from 'react';
import { Text, View, Image, ScrollView  } from 'react-native';
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
            itemList => <MovieItem key={itemList.id} onPress={()=>this.removeMovie(itemList)} dados={itemList} />
         );
    }

    removeMovie(itemList){
        let l = this.state.lista.slice(0);
        let i = l.indexOf(itemList);
        l.splice(i, 1);
        this.setState({lista:l});
        console.log("REMOVENDO");
    }

    render() {
        return (<ScrollView>
                    {this.renderListMovie()}
                </ScrollView>
        );
    }
    
}

export default MovieList;
