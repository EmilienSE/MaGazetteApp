import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { BoutonPrincipal } from '../Modules/Boutons/BoutonPrincipal';
import { BoutonSecondaire } from '../Modules/Boutons/BoutonSecondaire';

import { titres } from '../../Styles/titres';
import { conteneurs } from '../../Styles/conteneurs';

class Accueil extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){}

    goToCodePage = () => {
        this.props.navigation.navigate('SaisirCode');
    }

    render() {
        return (
            <SafeAreaView style={conteneurs.principal}>
                <Text style={titres.principal}>Bienvenue dans MaGazette</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur dipiscing elit. DOnex nisl felis, imerdiet id purus id.</Text>
                <Image></Image>
                <TouchableOpacity onPress={this.goToCodePage}>
                    <BoutonSecondaire text={"J'ai un code évènement"}></BoutonSecondaire>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToConnexion}>
                    <BoutonPrincipal text={"Je me connecte"}></BoutonPrincipal>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
  
const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}
  
export default connect(mapStateToProps)(Accueil)