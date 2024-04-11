import React from "react";
import { View, TextInput, Text} from "react-native";

export default function Form(){
    return( 
        <View>
           <Text>Altura</Text>
           <TextInput
           placeholder="Ex. 1.75"
           keyboardType="numeric"
           />
           <Text>Peso</Text>
           <TextInput
           placeholder="Ex. 71.5"
           keyboardType="numeric"
           />
        </View>
    );
}