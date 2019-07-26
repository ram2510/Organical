import React, { PureComponent } from 'react'
import { TextInput } from 'react-native'


export default class Textinput extends PureComponent {
  render() {

    return (
        <TextInput style = {this.props.style} 
               autoCapitalize="none" 
               onSubmitEditing={this.props.onSubmitEditing} 
               autoFocus={this.props.autoFocus}
               autoCorrect={false} 
               keyboardType={this.props.keyboardType} 
               returnKeyType={this.props.returnKeyType} 
               placeholder={this.props.placeholder} 
               placeholderTextColor='#C0C0C0'
               blurOnSubmit={this.props.blurOnSubmit}
               secureTextEntry={this.props.secureTextEntry}
               onChangeText={this.props.onChangeText}
               value={this.props.value}
               ref={this.props.inputRef}
               />
      )
  }
}

