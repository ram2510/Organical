import React, { PureComponent } from 'react'
import { Text,View,StyleSheet,Image,TouchableWithoutFeedback } from 'react-native'
import { withNavigation } from 'react-navigation'

const styles=StyleSheet.create({
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
 headerStyles:{
    fontSize: 20,
    color: "#fff" ,
    fontWeight: "bold"
 }
})

class Header extends PureComponent {
  
  render() {
    return (
      <View style={styles.viewStyles}>
        <TouchableWithoutFeedback onPress={()=>this.props.navigation.openDrawer()}>
          <Image style={{width:30}} resizeMode={"contain"} source={require('../../Assets/menuIcon.webp')} />
        </TouchableWithoutFeedback>
        <Text style={styles.headerStyles}> {this.props.title} </Text>
        {/* <Image style={{width:30}} resizeMode={"contain"} source={require('../../Assets/shopBag.webp')} /> */}
        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Search')}>
          <Image style={{width:30}} resizeMode={"contain"} source={require('../../Assets/searchIcon.webp')} />
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
export default withNavigation(Header)
