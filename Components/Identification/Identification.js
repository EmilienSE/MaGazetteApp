import React from 'react';
import { View, ImageBackground, Image, Text, TextInput, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';
import CheckBox from 'react-native-check-box';
import { connect } from 'react-redux';

import { styles } from './styles';
import { connectUserAPI, isUserConnected, logoutUser } from '../../API/connectionAPI';
import { connectAPI } from './../../API/connectionAPI';

class Identification extends React.Component {
    constructor(props){
        super(props)
        this.identifiant = ''
        this.motDePasse = ''
        this.state = {
            isChecked: false,
            modalVisible: false,
            alert: ''
        }
        this.onIdentifiantChanged = this.onIdentifiantChanged.bind(this)
        this.onMotDePasseChanged = this.onMotDePasseChanged.bind(this)
        this.connectUser = this.connectUser.bind(this)
    }

    componentDidMount(){
        if(this.props.user === true){
            this.props.navigation.navigate('MainNavigation', { screen: 'Information' })
        } else {
            this.props.dispatch({ type: "SET_USER", value: null });
        }
    }

    //Fonction de redirection vers le navigateur de l'appareil pour la page de mot de passe oublié
    goToForgotPasswordPage = () => {
        Linking.openURL(forgotPasswordURL);
    }

    //Fonction d'écoute de changement du champs identifiant
    onIdentifiantChanged(text) {
        this.identifiant = text
        this.setState({
            alert: ''
        })
    }

    //Fonction d'écoute de changement du champs mot de passe
    onMotDePasseChanged(text) {
        this.motDePasse = text
        this.setState({
            alert: ''
        })
    }

    //Fonction de connexion de l'utilisateur
    connectUser(){
        if(this.identifiant === ''){
            this.setState({
                alert: 'Identifiant non renseigné'
            })
        } else if (this.motDePasse === ''){
            this.setState({
                alert: 'Mot de passe non renseigné'
            })
        } else {
            this.setState({
                loading: true,
                alert: ''
            })
            connectUserAPI(this.identifiant, this.motDePasse).then(data => {
                this.setState({
                    loading: false
                })

                if(data.success === true){
                    this.props.dispatch({ type: "SET_USER", value: data.result });
                    this.props.navigation.navigate('MainNavigation', { screen: 'Information' })
                } else {
                    this.setState({
                        alert: data.result
                    })
                }

            })
        }
    }

    render() {
        return (<></>)
    }
}
  
const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}
  
  export default connect(mapStateToProps)(Identification)