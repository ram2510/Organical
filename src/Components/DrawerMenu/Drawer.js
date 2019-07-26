import React, { PureComponent } from 'react'
import { View,TouchableWithoutFeedback,StyleSheet,Text,Image } from 'react-native'
import Auth from '../../Services/Auth'
// import Swipe from '../Swipe'

import Alert from '../Alert'

export default class Drawer extends PureComponent {

  constructor(props){
    super(props)
    this.auth = new Auth()
    // this.determineType()
  }
  state={
    isLogoutAlertVisible:false
  }
  // async componentDidMount(){
  //   // console.log('l')
  //   await 
  // }

  jumpToSection = section => {
    this.props.navigation.navigate(section)
    this.props.navigation.closeDrawer()
  };


  handleLogoutAlertState=()=>{
    this.setState(prevState=>{
      return {
        isLogoutAlertVisible:!prevState.isLogoutAlertVisible
      }
    })
  }
  confirmLogout=()=>{
    if(this.state.isLogoutAlertVisible){
      return <Alert title="Are you sure ?" body="Are you sure you want to logout ?" confirmBtnText="Yes" handleConfirmAction={this.logOutUser} handleCancelAction={this.handleLogoutAlertState} cancelBtnText="Cancel"  />
    }
  }

  logOutUser=async (keyName="userData")=>{
    try {
      let deleteData =await this.auth.removeValue()
      // console.log(deleteData)
      if(deleteData){
        this.props.navigation.navigate("Login")
      }else{
        this.props.navigation.navigate("Login")
      }
    } catch (error) {
      console.log(error)
    }
  }
  

  render() {
    return (
      <>
      {this.confirmLogout()}
      <View style={{ flex: 1, paddingTop: 40 }}>
        <TouchableWithoutFeedback onPress={()=>this.jumpToSection('Report')}>
          <View style={styles.buttons}>
          {/* <Image style={styles.iconStyle} resizeMode={"contain"} source={require('../../Assets/blackBookmark.webp')} /> */}
            <Text style={styles.textStyle}>
              Report
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>this.jumpToSection('Coupons')}>
        <View style={styles.buttons}>
          {/* <Image style={styles.iconStyle} resizeMode={"contain"} source={require('../../Assets/key.webp')} /> */}
            <Text style={styles.textStyle}>
              Coupons
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>this.jumpToSection('Checkout')}>
        <View style={styles.buttons}>
          {/* <Image style={styles.iconStyle} resizeMode={"contain"} source={require('../../Assets/key.webp')} /> */}
            <Text style={styles.textStyle}>
              Checkout
            </Text>
          </View>
        </TouchableWithoutFeedback>
        {/* <TouchableWithoutFeedback onPress={()=>{this.handleLogoutAlertState()}}>
          <View style={styles.buttons}>
           <Image style={styles.iconStyle} resizeMode={"contain"} source={require('../../Assets/logout.webp')} /> 
            <Text style={styles.textStyle}>
              About Us
            </Text>
          </View>
        </TouchableWithoutFeedback> */}
        <TouchableWithoutFeedback onPress={()=>{this.handleLogoutAlertState()}}>
          <View style={styles.lastbutton}>
          {/* <Image style={styles.iconStyle} resizeMode={"contain"} source={require('../../Assets/logout.webp')} /> */}
            <Text style={styles.textStyle}>
              Logout
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      </>
    )
  }
}
const styles = StyleSheet.create({
  buttons:{
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 10
  },
  lastbutton:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  textStyle:{
    fontSize: 18,
    color: "#000",
    marginLeft: 20
  }
})