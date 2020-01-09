import {retrieveLanguage} from './localStrings';
import First from './fullTest';
import React from 'react';
import {SafeAreaView, ActivityIndicator, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';

interface State {
  loading: boolean;
}
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {loading: true};
    // this.retrieveLanguage();
  }
  async retrieveLanguage () {
    await retrieveLanguage();
    this.setState({loading: false});
  }
  render() {
    return (
      <>
        <SafeAreaView>
        <Spinner
            //visibility of Overlay Loading Spinner
            visible={this.props.loading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
          />
          <First />
        </SafeAreaView>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("app.tsx");
  const { network } = state
  return { network }
};
export default connect(mapStateToProps)(App);