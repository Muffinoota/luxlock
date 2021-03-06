import React from 'react';
import { StyleSheet, Text, View, Image, Slider } from 'react-native';

class ColorCode extends View {
  constructor(props) {
    super(props);
    this.state = {
      red: 50,
      green: 50,
      blue: 50
    };
  }

  saveColor() {

  }
    render() {
      return (
        <View>
          <View
            style = {{
                backgroundColor: 'rgb(' + this.state.red + ', ' + this.state.green + ', ' + this.state.blue + ')',
                width: 300,
                height: 300
            }}
          />
          <Slider
              minimumValue = {0}
              maximumValue = {255}
              thumbTintColor = {'#f00'}
              minimumTrackTintColor = {'#000'}
              maximumTrackTintColor = {'#f00'}
              width = {300}
              height = {50}
              onPress = {() => test()}
              onValueChange = {(value) => {
                  this.setState({red: value});
              }}
          />
          <Slider
              minimumValue = {0}
              maximumValue = {255}
              thumbTintColor = {'#0f0'}
              minimumTrackTintColor = {'#000'}
              maximumTrackTintColor = {'#0f0'}
              width = {300}
              height = {50}
              onValueChange = {(value) => this.setState({green: value})}
          />
          <Slider
              minimumValue = {0}
              maximumValue = {255}
              thumbTintColor = {'#00f'}
              minimumTrackTintColor = {'#000'}
              maximumTrackTintColor = {'#00f'}
              width = {300}
              height = {50}
              onValueChange = {(value) => this.setState({blue: value})}
          />

        </View>
      )
    }
  }

function test() {
    console.log('Your test val: ', this.state.red);
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ColorCode />
        <Text>Nice</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  colorCode: {
    backgroundColor: '#ccc',
    top: 0,
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
