import React, { PureComponent } from 'react'
import { Image,View } from 'react-native'

import Auth from '../../Services/Auth'

export default class Splash extends PureComponent {
  constructor(props){
    super(props)
    setTimeout( this.authUser,3000)
  }
  authUser=async ()=>{
    let auth = new Auth()
    let userData =await auth.getUserData("userData")
    this.props.navigation.navigate(userData ? 'App' : 'Auth');
  }
  render() {
    return (
      <View style={{height: "100%",width: "100%"}}>
        <Image source={require('../../Assets/splashScreen.png')} style={{height: "100%",width: "100%"}} />
      </View>
    )
  }
}
