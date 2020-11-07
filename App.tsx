import React from 'react';
import { Provider, } from 'react-redux';
import { createStore, applyMiddleware, } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools, } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga, } from './src/stores';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen } from './src/screens/auth/Auth';
import { HomeScreen } from './src/screens/home/Home';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger,)),  
);

sagaMiddleware.run(rootSaga);

const firebaseConfig = {
  apiKey: "AIzaSyCPb5d46YfLqY4mdaQJHRKMum_oMU-6T40",
  authDomain: "dailycommit-cd5a0.firebaseapp.com",
  databaseURL: "https://dailycommit-cd5a0.firebaseio.com",
  projectId: "dailycommit-cd5a0",
  storageBucket: "dailycommit-cd5a0.appspot.com",
  messagingSenderId: "330023374467",
  appId: "1:330023374467:web:1a8d6e29fb5099bfaf55b6",
  measurementId: "G-MF6HZ4RCQ4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth" headerMode="none">
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


