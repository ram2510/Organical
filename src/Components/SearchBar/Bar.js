import React, { PureComponent } from 'react'
import { TextInput,StyleSheet,View } from 'react-native'

const styles = StyleSheet.create({
  textInput:{
    width: "60%",
    height: 40,
    borderBottomColor: "#9ff",
    // marginTop: 100
  },
  viewStyles:{
    backgroundColor: "#0078D7",
    flexDirection:"row",
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOpacity: 30,
    shadowOffset: {
      height: 30,
    },
    shadowRadius: 10,
    elevation:9,
    padding: 10
  },
})

export default class Bar extends PureComponent {
  render() {
    return (
      <>
      <View style={styles.viewStyles}>
        <TextInput 
        autoCorrect={true}
        autoFocus={true}
        placeholder="Search"     
        onChangeText={text => this.props.searchFilterFunction(text)}
        style={styles.textInput}
        value={this.props.value}
        />
        </View>
      </>
    )
  }
}
