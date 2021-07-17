/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Container,
  Box,
  NativeBaseProvider,
  Stack,
  HStack,
  Center,
  Text,
  Heading,
  List,
  Checkbox,
  FlatList,
  Fab,
  Icon,
  AddIcon,
  VStack,
  FormControl,
  Input,
  TextArea,
  Button,
} from 'native-base';
import {event} from 'react-native-reanimated';
import axios from 'axios';

import {API_URL} from '../constants';

class TodosCreate extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleSubmit() {
    const text = this.state.text;
    const {goBack} = this.props.navigation;

    if (text) {
      axios
        .post(`${API_URL}todos/`, {
          name: text,
        })
        .then(result => {
          // React Navigation doesn't trigger lifecycle method again in component's objection.
          // solution => make global state management
          goBack();
        });
    }
  }

  render() {
    return (
      <NativeBaseProvider>
        <VStack space={2} mt={2}>
          <FormControl>
            <FormControl.Label>Not Todo</FormControl.Label>
            <TextArea h={40} onChangeText={text => this.setState({text})} />
          </FormControl>
          <Center>
            <Button
              style={{marginTop: 50}}
              w="50%"
              colorScheme="primary"
              onPress={() => this.handleSubmit()}>
              <Text color="#fff" fontSize="sm">
                Submit
              </Text>
            </Button>
          </Center>
        </VStack>
      </NativeBaseProvider>
    );
  }
}

export default TodosCreate;
