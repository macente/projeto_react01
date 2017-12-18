import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import Button from './button';

const MovieItem = ({ onPress, dados }) => {
    const { imagemStyle, containerStyle } = estilos;

    return(
        <View style={containerStyle}>
            <Text>{dados.filme}</Text>
            <Image style={imagemStyle} source={{ uri: dados.imagem }} />
            <Button onPress={onPress}>Remover</Button>
        </View>
    );
};

const estilos = {
    imagemStyle: {
        height: 300,
        width: 300

    },
    containerStyle: {
        alignItems: 'center',
        flexDirection: 'column'
    }
};

export default MovieItem;
