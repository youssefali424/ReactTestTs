import {retrieveLanguage} from './localStrings';
import First from './fullTest';
import React from 'react';
import {SafeAreaView, ActivityIndicator, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

interface State {
  loading: boolean;
}
export default class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {loading: true};
    this.retrieveLanguage();
  }
  async retrieveLanguage () {
    await retrieveLanguage();
    this.setState({loading: false});
  }
  render() {
    if (this.state.loading) {
      return (
        <>
          <Spinner
            //visibility of Overlay Loading Spinner
            visible={this.state.loading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
          />
        </>
      );
    }
    return (
      <>
        <SafeAreaView>
          <First />
        </SafeAreaView>
      </>
    );
  }
}
