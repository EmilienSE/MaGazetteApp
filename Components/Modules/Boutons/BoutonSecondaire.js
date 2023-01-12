import React from 'react';
import { Linking, Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { boutons } from '../../../Styles/boutons';

export class BoutonSecondaire extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={[boutons.commun, boutons.secondaire]}>
                <Text style={[boutons.communTexte, boutons.secondaireTexte]}>{ this.props.text }</Text>
            </View>
        )
    }
}