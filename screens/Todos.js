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
} from 'native-base';

import TodoItem from '../components/TodoItem';

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      todos: [],
    };
  }

  //   UNSAFE_componentWillMount() {
  //     alert('componentWillMount');
  //   }

  //   componentDidMount() {
  //     alert('componentDidMount');
  //     this.handleIncTodo();
  //   }

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
