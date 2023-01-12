import { StyleSheet } from "react-native"
import { secondarySize } from "./variables"

export const conteneurs = StyleSheet.create({
    principal: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    secondaire: {
        fontSize: secondarySize
    }
})