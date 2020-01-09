import React from 'react';
import {View, Text, Picker, FlatList, ro} from 'react-native';
import strings from './localStrings';
import Main from './main';
import {AsyncStorage} from 'react-native';
import {connect } from 'react-redux';
import getData from './network';
import {NETWORKSTATE,setLoading} from './networkReducer';
import { bindActionCreators } from 'redux';

export interface Props {
  network:NETWORKSTATE;
  setLoading:Function;
}

interface State {
  name: string;
  language: string;
}
interface todo {
  userId: Number;
  id: Number;
  title: String;
  completed: boolean;
}
class First extends React.Component<Props, State> {
  state: State;
  list: Array<todo>;
  constructor(props) {
    super(props);
    this.state = {
      name: 'how',
      language: 'en',
    };
    this.list = [];
    this.props.setLoading(true);
  }
  componentDidMount() {
    const data = getData('');
    data.subscribe({
      next: result => {
        console.log(result);
        this.list = result;
      },
      complete: () => {
        this.props.setLoading(false);
        this.setState({});
        console.log('done');
      },
      error: e => console.log(e),
    });
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
        <FlatList
          data={this.list}
          renderItem={item => (
            <View style={{flexDirection: 'row'}}>
              <Text style={{flex: 1}}>{item.item.id}</Text>
              <Text style={{flex: 1}}>{item.item.userId}</Text>
              <Text style={{flex: 4}}>{item.item.title}</Text>
              <Text style={{flex: 2}}>
                {item.item.completed ? 'completed' : 'not yet'}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id+''}
        />
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
const mapStateToProps = state => {
  console.log('first.tsx');
  console.log(state);
  const {network} = state;
  return {network};
};
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setLoading,
  }, dispatch)
);
export default connect(mapStateToProps,mapDispatchToProps)(First);
