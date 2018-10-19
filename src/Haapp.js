import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Controller from 'ReduxBT1/src/Controller';
import {connect} from 'react-redux';
// su dung state trong store redux de render react compoent
class Haapp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.myValue}</Text>
        <Controller />
      </View>
    );
  }
}
function mapStateToProps(state){
  return{ myValue: state.value };

}
export default connect(mapStateToProps)(Haapp)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
