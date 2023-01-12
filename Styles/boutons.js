import { StyleSheet } from "react-native"
import { couleurPrincipale, couleurSecondaire } from './variables';

export const boutons = StyleSheet.create({
    commun: {
        width: '100%',
        borderRadius: 10,
        padding: 15,
        marginTop: 10,
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    principal: {
        backgroundColor: couleurPrincipale
    },
    secondaire: {
        backgroundColor: couleurSecondaire
    },
    communTexte: {
        fontWeight: "bold"
    },
    principalTexte: {
        textAlign: "center",
    },
    secondaireTexte: {
        textAlign:"center",
    }
})