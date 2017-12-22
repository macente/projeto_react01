import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import Button from './button';

const MovieItem = ({ onPressTrailler,  dados }) => {
    const { imagemStyle, containerStyle, estiloText } = estilos;

    return(
        <View style={containerStyle}>
            <Text style={estiloText}>{dados.filme}</Text>
            <Image style={imagemStyle} source={{ uri: dados.imagem }} />
            <Button onPress={onPressTrailler}>Trailler</Button>
        </View>
    );
};

const estilos = {
    imagemStyle: {
        height: 300,
        width: 200

    },
    containerStyle: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    estiloText: {
        fontSize: 20,
        fontWeight:'bold',
        color:'#000000'
    }
};

export default MovieItem;
