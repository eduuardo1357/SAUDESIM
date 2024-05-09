import React, { useState } from "react";
import { View, TextInput, Text, Button} from "react-native";
import ResultImc from "./ResultImc";

export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("IMC")

    function imcCalculeitor(){
        return setImc ((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if (weight != null && height != null) {
          imcCalculeitor()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu IMC é = ");
            setTextButton("Calcular novamente");
            return
                
        
        } 
        setImc(null)
        setTextButton("Calcular")
        setMessageIMC("Preencha o Peso e Altura")
    }


    return( 
        <View>
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
     <ResultImc messageResultImc={messageIMC}
     ResultImc={imc}/>
       
        </View>
    );
}