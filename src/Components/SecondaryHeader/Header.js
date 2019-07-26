import React, { PureComponent } from 'react'
import { View,StyleSheet,Text,Image,TouchableWithoutFeedback } from 'react-native'

import {withNavigation} from 'react-navigation'

const styles=StyleSheet.create({
  viewStyles:{
    backgroundColor: "#0078D7",
    flexDirection:"row",
    height: 60,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    shadowOpacity: 30,
    shadowOffset: {
      height: 30,
    },
    shadowRadius: 10,
    elevation:9,
    padding: 10
  },
 headerContainerStyles:{
   alignSelf: 'center',
  //  alignContent: 'center',
  //  justifyContent: 'center',
  marginLeft: "12.4%"
 },
 headerStyles:{
  fontSize: 20,
  color: "#fff" ,
  fontWeight: "bold",
 },
 backContainerStyle:{
  //  alignSelf: 'flex-start',
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
 }
})

class Header extends PureComponent {
  
  shouldRenderBackButton=()=>{
    if(this.props.shouldShowBackBtn){
      return(
        <TouchableWithoutFeedback onPress={this.handleBackClick}>
        <View style={styles.backContainerStyle}>
          <Image style={{width: 30}} resizeMode={"contain"} source={require('../../Assets/back.webp')} />
          <Text style={{fontSize: 20,color: "#fff"}}> Back </Text>
        </View>
        </TouchableWithoutFeedback >
      )
    }
  }

  handleBackClick=()=>{
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        {this.shouldRenderBackButton()}
        <View style={styles.headerContainerStyles}>
          <Text style={styles.headerStyles}> {this.props.title} </Text>
        </View>
      </View>
    )
  }
}

export default withNavigation(Header)