import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import persistStore from "redux-persist/es/persistStore";

import Store from './Store/configureStore';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Identification from './Components/Identification/Identification';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['magazette://']
};

export default class App extends React.Component {
  render(){
    let persistor = persistStore(Store);
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer linking={linking}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Identification" component={Identification} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}