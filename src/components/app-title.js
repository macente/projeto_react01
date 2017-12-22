import React from 'react';
import { Text, View } from 'react-native';

const AppTitle = (props) => {
    const { estiloText, estiloView } = estilos;
    return(
      <View style={estiloView}>
        <Text style={estiloText}>{props.texto}</Text>
      </View>
    );
}

const estilos = {
    estiloView: {
        backgroundColor: '#3C4E5C',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 10,
        position: 'position'

    },
    estiloText: {
        fontSize: 20,
        color:'#FFFFFF'
    }
};

export default AppTitle;
