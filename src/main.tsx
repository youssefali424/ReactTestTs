import React from 'react';
import {View, Text} from 'react-native';
import strings from './localStrings';

export interface Props {
  language: string;
  name: string;
}

interface State {
  name: string;
}
class main extends React.Component<Props, State> {
  state: State;
  props: Props;
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
    
  }
  render() {
    return (
      <View>
        <Text>{strings[this.props.name]}</Text>
      </View>
    );
  }
}

export default main;
