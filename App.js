/* eslint-disable react/jsx-no-undef */
import React, {Component} from 'react';

import Todos from './screens/Todos';
import TodosCreate from './screens/TodosCreate';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Not To Do List" component={Todos} />
          <Stack.Screen name="Create Todos" component={TodosCreate} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
