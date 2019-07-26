import React, { PureComponent } from 'react'
import { View,Text,StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'#ccc',
    margin:5,
    marginTop: 20,
    width: "90%"
},
lineStyleBellow:{
  borderWidth: 0.5,
  borderColor:'#ccc',
  margin:5,
  width: "90%"
},
notifContainer:{
  padding: 10,
  width: "100%",
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
},
notifText:{
  fontSize: 18,
  fontWeight: 'bold',
}
})

export default class Notification extends PureComponent {
  render() {
    return (
      <>
      <View style={styles.notifContainer}>
        <Text style={styles.notifText}>
          {this.props.text}
        </Text>
      </View>
      <View style={styles.lineStyleBellow} />
      </>
    )
  }
}
