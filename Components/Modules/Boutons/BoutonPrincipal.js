import React from 'react';
import { Text, View } from "react-native";
import { boutons } from '../../../Styles/boutons';

export class BoutonPrincipal extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={[boutons.commun, boutons.principal]}>
                <Text style={[boutons.communTexte, boutons.principalTexte]}>{ this.props.text }</Text>
            </View>
        )
    }
}