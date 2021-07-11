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
import { event } from 'react-native-reanimated';

class TodosCreate extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleSubmit() {
    alert(this.state.text);
  }

  render() {
    return (
      <NativeBaseProvider>
        <VStack space={2} mt={2}>
          <FormControl>
            <FormControl.Label>Not Todo</FormControl.Label>
            <TextArea h={40} onChangeText={(text) => this.setState({text})} />
          </FormControl>
          <Center>
              <Button w="50%" colorScheme="primary" onPress={() => this.handleSubmit()}>
                <Text color="#fff" fontSize="sm">Submit</Text>
              </Button>
          </Center>
        </VStack>
      </NativeBaseProvider>
    );
  }
}

export default TodosCreate;
