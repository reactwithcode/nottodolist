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
} from 'native-base';
import propTypes from 'prop-types';

export default class TodoItem extends Component {
  render() {
    const {
      todo: {id, todo},
    } = this.props;

    return (
      <List.Item key={id}>
        <HStack alignItems="center" space={10} mx={5}>
          <Checkbox isChecked={false} />
          <Text>{todo}</Text>
        </HStack>
      </List.Item>
    );
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
};
