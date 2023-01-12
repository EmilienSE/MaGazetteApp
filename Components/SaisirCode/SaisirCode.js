import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

class SaisirCode extends React.Component {
    constructor(props){
        super(props);
        this.code = '';
        this.onCodeChanged = this.onCodeChanged.bind(this);
    }

    componentDidMount(){}

    onCodeChanged(text) {
        this.code = text;
    }

    render() {
        return (
            <View>
                <Text>Saisir un code évènement</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur dipiscing elit. DOnex nisl felis, imerdiet id purus id.</Text>
                <TextInput 
                    onChangeText={(text) => this.onCodeChanged(text)}
                    placeholder="Identifiant"
                    blurOnSubmit={false}></TextInput>
                <TouchableOpacity onPress={() => this.goToCodePage()}>
                    <Text>Mot de passe oublié ?</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
  
const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}
  
export default connect(mapStateToProps)(SaisirCode)