import React, { PureComponent } from 'react'
import {Text,KeyboardAvoidingView,StyleSheet,Platform } from 'react-native'


import Input from '../../Components/TextInput'
import Button from '../../Components/Button'
// import LoginModal from '../LoginModal'
import Spinner from "../../Components/SpinnerScreen"
import Alert from '../../Components/Alert'

import Auth from '../../Services/Auth'

const styles = StyleSheet.create({
    loginContainer:{
      alignItems: 'center',
      flexGrow: 1,
    },
    input:{
      height: 40,
      padding: 10,
      color: '#000',
      width: "90%",
      borderBottomWidth: 1,
      borderBottomColor: '#C0C0C0',
      marginTop: "10%"
  },titleText:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    marginTop: "40%"
  },
  inputContainers:{
    width: "100%",
    alignItems: 'center',
  },
  forgetPass:{
    margin:"10%"
  },
  orText:{
    margin:"5%"
  }
})


export default class Login extends PureComponent {
  constructor(props){
    super(props)
    this.auth = new Auth()
    this._isMounted = true
  }
  static navigationOptions={
    header:null
  }

  state={
    username:'',
    password:'',
    // isLoginModalVisible:false,
    isInfoModalVisible:false,
    isEmptyInput:false,
    // type:'',
    // OS:Platform.OS,
    error:false
  }
  
  changeInfoModalState=()=>{
    this.setState(prevState=>{
      return {
        isInfoModalVisible:!prevState.isInfoModalVisible,
      }
    })
  }

  changeEmptyModalState=()=>{
    // console.log(this.state.is)
    this.setState(prevState=>{
      return {isEmptyInput:!prevState.isEmptyInput}
    })
  }
  changeErrorModalState=()=>{
    this.setState({
      error:false,
    })
  }

  componentWillUnmount(){
    this._isMounted = false
  }

  logIn=()=>{
    if(this.state.username && this.state.password){
   this.setState({
     loading:true,
   },async ()=>{
    // console.log("l")
    try {
      let response = this._isMounted && await this.auth.loginReq(this.state)
      // console.log(response)
      if(response){
        // console.log(response)
        // let res = this._isMounted && await this.auth.storeUserData(response,"userData")
        // console.log(res)
          // let res = await auth.getUserData()
          // console.log(res)
          this.setState({
            loading:false,
          },()=>{
            this.props.navigation.navigate('Shop')
            // console.log("done")
          })
      }else{
        this.setState({
          loading:false,
          isInfoModalVisible:true
        })
      }
  
    } catch (error) {
      // console.log(error)
      // console.log('l')
      this.setState({
        error:true
      })
    }

   })
  }else{
      this.setState({
        isEmptyInput:true
      })
    }
  }
  
  render() {

    let { loginContainer,input,titleText,inputContainers,forgetPass,orText} = styles
    if(!this.state.loading){
    return (
      <>
        <KeyboardAvoidingView style={loginContainer} >
            <Text style={titleText}>Organical</Text>
            <KeyboardAvoidingView style={inputContainers} >
            <Input 
            onSubmitEditing={() => this.passwordInput.focus()}
            autoFocus={true} 
            keyboardType="email-address"
            returnKeyType="next" 
            placeholder='Email or Mobile Num.' 
            blurOnSubmit={false}
            onChangeText={text=>this.setState({username:text})}
            style={input}
            value={this.state.username}
            />
            <Input 
            onSubmitEditing={this.logIn} 
            keyboardType="default"
            returnKeyType="go" 
            placeholder='Password' 
            onChangeText={text=>this.setState({password:text})}
            style={input}
            secureTextEntry={true}
            value={this.state.pass}
            inputRef={ref=> this.passwordInput = ref}   
             />
             </KeyboardAvoidingView>
             <Text style={forgetPass}>Forget Password?</Text>
             {/* <LoginModal handleTypeClick={this.logIn} isModalVisible={this.state.isLoginModalVisible} changeModalState={this.changeLoginModalState} /> */}
             <Button buttonText="Login" onPress={this.logIn} />
             <Text style={orText}>OR</Text>
             <Button buttonText="Register" onPress={this.logIn} />
             {(this.state.isInfoModalVisible)?<Alert title="Invalid Credentials" 
             body="Please enter correct credentials" 
             confirmBtnText="OK" 
             handleConfirmAction={this.changeInfoModalState} 
             handleCancelAction={this.changeInfoModalState}
               />:null}
              {(this.state.error)?<Alert title="Error While connecting to server" 
             body="We are exprencing isuues connecting to the server please contact the hyfunn team directly or at hyfunn18@hmail.com" 
             confirmBtnText="OK" 
             handleConfirmAction={this.changeErrorModalState} 
             handleCancelAction={this.changeErrorModalState}
               />:null}
              {(this.state.isEmptyInput)?<Alert title="Invalid Credentials" 
             body="Please enter the credintials before trying to log in"  
             confirmBtnText="OK" 
             handleConfirmAction={this.changeEmptyModalState}
             handleCancelAction={this.changeEmptyModalState} 
               />:null}
         </KeyboardAvoidingView>
         </>
    )
  }else{
  return(
    <>
      <Spinner message="Logging In" />
    </>
  )
}
  }
}
