import React, {Component} from 'react';

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
  MinusIcon,
} from 'native-base';

import TodoItem from '../components/TodoItem';
import axios from 'axios';
import TryRedux from '../components/TryRedux';

import {API_URL} from '../constants';

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      todos: [],
    };
  }

  componentDidMount() {
    const self = this; // so that this can be called in callbacl
    axios.get(`${API_URL}todos/`).then(result => {
      self.setState({
        todos: result.data,
      });
    });
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <>
        <NativeBaseProvider>
          {/* <Box>
            <Stack space={1} alignItems="center" backgroundColor="#BBC0C4">
              <HStack space={1} alignItems="center" my={3}>
                <Heading color="#fff">
                  Not To Do List ({this.state.count})
                </Heading>
              </HStack>
            </Stack>
          </Box> */}

          <Box>
            <List space={2}>
              <FlatList
                data={this.state.todos}
                keyExtractor={item => item.id}
                renderItem={({item}) => <TodoItem todo={item} />}
              />
              {/* {this.todos.map(todo => (
                <TodoItem todo={todo} />
              ))} */}
            </List>
          </Box>

          <Fab
            bg="#BBC0C4"
            fill="#fff"
            position="absolute"
            bottom={10}
            right={19}
            icon={<AddIcon name="plus" type="AntDesign" color="#fff" />}
            onPress={() => navigate('Create Todos')}
            // label={<Text fontSize="sm">Click</Text>}
          />
        </NativeBaseProvider>
      </>
    );
  }
}

export default Todos;
