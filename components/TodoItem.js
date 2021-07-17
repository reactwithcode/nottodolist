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
  View,
  Button,
  Icon,
  Pressable,
  MinusIcon,
} from 'native-base';
import {StyleSheet} from 'react-native';
import propTypes from 'prop-types';
import axios from 'axios';

import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';

import {API_URL} from '../constants';

export default class TodoItem extends Component {
  state = {
    isDone: false,
  };

  componentDidMount() {
    // get data from database
    const {
      todo: {isDone},
    } = this.props;

    this.setState({isDone: Boolean(isDone)});
  }

  handleDone() {
    const {
      todo: {id},
    } = this.props;

    this.setState({
      isDone: !this.state.isDone,
    });

    axios.patch(`${API_URL}todos/${id}`, {
      isDone: this.state.isDone ? 0 : 1,
    });
  }

  handleDelete(id) {
    axios.delete(`${API_URL}todos/${id}`);
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'white',
        flex: 1,
      },
      backTextWhite: {
        color: '#FFF',
      },
      rowFront: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: '#cecece',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
      },
      rowBack: {
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 50,
      },
      backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
      },
      backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
      },
      backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
      },
      trash: {
        height: 25,
        width: 25,
      },
      item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
      },
      image: {
        flex: 1,
        alignContent: 'flex-start',
        height: 40,
        width: 50,
      },
      text: {
        flex: 4,
        paddingLeft: 10,
      },
    });

    const {
      todo: {id, name},
    } = this.props;

    return (
      <>
        {/* <List.Item key={id}>
          <HStack alignItems="center" space={10} mx={5}>
            <Checkbox
              isChecked={this.state.isDone}
              onPress={() => this.handleDone()}
            />
            <Text>{name}</Text>
          </HStack>
        </List.Item> */}

        <NativeBaseProvider>
          <SwipeRow
            key={id}
            rightOpenValue={-150}
            // leftActivationValue={200}
          >
            <HStack style={styles.rowBack}>
              {/* <Text>Left Hidden</Text> */}
              <Button
                backgroundColor="transparent"
                onPress={() => this.handleDelete(id)}>
                <MinusIcon name="minus" type="AntDesign" color="#fff" />
              </Button>
            </HStack>
            <HStack style={styles.rowFront}>
              <Box style={{flexDirection: 'row'}}>
                <Checkbox
                  isChecked={this.state.isDone}
                  onPress={() => this.handleDone()}
                  style={{padding: 10}}
                />
              </Box>
              <Box style={{padding: 10}}>
                <Text>{name}</Text>
              </Box>
            </HStack>
          </SwipeRow>
        </NativeBaseProvider>
      </>
    );
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
};
