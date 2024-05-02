import React from "react";
import { View, Text } from "react-native";

export default function ResultImc(props){
    return (
        <View>
            <Text>{props.massageResulImc}</Text>
              <Text>{props.ResultImc} </Text>  
            
        </View>
    );
}