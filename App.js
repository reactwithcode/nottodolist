/* eslint-disable react/jsx-no-undef */
import React, {Component} from 'react';
import Todos from './screens/Todos';
import TodosCreate from './screens/TodosCreate';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import './store'
import {Provider} from 'react-redux';
import store from './store';

const Stack = createStackNavigator();

class App extends Component {
  // store = createStore()

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Not To Do List" component={Todos} />
            <Stack.Screen name="Create Todos" component={TodosCreate} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
