import React, { useState } from "react";
import { View, TextInput, Text, Button} from "react-native";

export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("preencha o peso e altura");
    const [imc, setIMC] = useState(null)
    const [textButton, setTextButton] = useState("IMC")


    return( 
        <View>
           <Text>Altura</Text>
           <TextInput
           placeholder="Ex. 1.69"
           keyboardType="numeric"
           />
           <Text>Peso</Text>
           <TextInput
           placeholder="Ex. 48.9"
           keyboardType="numeric"/>

        <Button
        onePress={() => validationImc ()}
        title={textButton}
        />  

        </View>
    );
}