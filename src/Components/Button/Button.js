import React, { PureComponent } from 'react'
import { Text,StyleSheet,TouchableOpacity } from 'react-native'


const styles = StyleSheet.create({
  buttonStyle:{
    alignSelf: 'stretch',
    backgroundColor: '#0078D7',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle:{
    alignSelf: 'center',
    color : '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,

}
})

export default class Button extends PureComponent {


  render() {
    const { buttonStyle,textStyle } = styles
    return (
      <TouchableOpacity style={buttonStyle} onPress={this.props.onPress}>
        <Text style={textStyle}>
          {this.props.buttonText}
        </Text>
      </TouchableOpacity>
    )
  }
}
