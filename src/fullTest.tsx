import React from 'react';
import {View, Text, Picker} from 'react-native';
import strings from './localStrings';
import Main from './main';
import {AsyncStorage} from 'react-native';

export interface Props {
}

interface State {
  name: string;
  language: string;
}
class First extends React.Component<Props, State> {
  state: State;
  constructor(props) {
    super(props);
    this.state = {
      name: 'how',
      language: 'en',
    };
  }
  render() {
    return (
      <View>
        <Main name={this.state.name} language={this.state.language} />
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => {
            strings.setLanguage(itemValue);
            this.storeLanguage(itemValue);
            this.setState({language: itemValue});
          }}>
          <Picker.Item label="ar" value="ar" />
          <Picker.Item label="en" value="en" />
        </Picker>
        <Picker
          selectedValue={this.state.name}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({name: itemValue});
          }}>
          <Picker.Item label="how" value="how" />
          <Picker.Item label="boiledEgg" value="boiledEgg" />
          <Picker.Item label="softBoiledEgg" value="softBoiledEgg" />
          <Picker.Item label="choice" value="choice" />
        </Picker>
      </View>
    );
  }
  storeLanguage = async (val: string) => {
    try { 
      await AsyncStorage.setItem('@Language', val);
    } catch (error) {
      // Error saving data
    }
  };
}

export default First;
