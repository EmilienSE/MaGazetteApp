import { createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistCombineReducers } from 'redux-persist'

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage
}

export default createStore(persistCombineReducers(rootPersistConfig, {/** reducers ici */}))