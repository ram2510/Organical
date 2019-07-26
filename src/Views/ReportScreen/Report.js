import React, { PureComponent } from 'react'
import { TextInput,StyleSheet,View } from 'react-native'

import Header from '../../Components/SecondaryHeader'
import Button from '../../Components/Button'
import Alert from '../../Components/Alert'

const styles = StyleSheet.create({
  textInp:{
    marginTop: 50,
    // marginBottom: 60,
    borderWidth: 1,
    width: "90%",
    marginLeft: "5%",
  },
  btn:{
    marginTop:50,
    width:"100%"
  }
})

export default class Report extends PureComponent {

  state={
    error:false,
    redeem:false,
    name:'',
    email:'',
    phone:'',
    message:""
  }

  acceptCoupon=()=>{
    if(this.state.name && this.state.email && this.state.phone && this.state.message){
     return this.changeRedemModalState()
    }
    return this.changeErrorAlert()
  }

  changeErrorAlert=()=>{
    this.setState(prevState=>{
      return {
        error:!prevState.error
      }
    })
  }
  changeRedemModalState=()=>{
    this.setState(prevState=>{
      return {
        redeem:!prevState.redeem,
        name:'',
        email:'',
        phone:'',
        message:""
      }
    })
  }
  render() {
    return (
      <>
        {(this.state.error?<Alert confirmBtnText="Ok" title="Invalid Request" body="Please enter valid details" handleConfirmAction={this.changeErrorAlert} handleCancelAction={this.changeErrorAlert} />:null)}
        {(this.state.redeem?<Alert confirmBtnText="Ok" title="Thank You!" body="Thank You for reporting our team will get in touch with you ass soon as possible" handleConfirmAction={this.changeRedemModalState} handleCancelAction={this.changeRedemModalState} />:null)}
        <Header title="Report" shouldShowBackBtn={true} />
        <TextInput 
          // autoCapitalize={true}
          autoCorrect={true}
          autoFocus={true}
          keyboardType="default"
          returnKeyType="next" 
          placeholder='Enter Name' 
          onSubmitEditing={()=>this.emailInp.focus()}
          value={this.state.text}
          onChangeText={text=>this.setState({name:text})}
          style={styles.textInp}
        />
        <TextInput 
          // autoCapitalize={true}
          autoCorrect={true}
          autoFocus={true}
          keyboardType="email-address"
          returnKeyType="next" 
          placeholder='Enter email' 
          onSubmitEditing={()=>this.phoneInp.focus()}
          value={this.state.text}
          onChangeText={text=>this.setState({email:text})}
          style={styles.textInp}
          ref={ref=> this.emailInp = ref}   
        />
         <TextInput 
          // autoCapitalize={true}
          autoCorrect={true}
          autoFocus={true}
          keyboardType="numeric"
          returnKeyType="next" 
          placeholder='Enter phone no' 
          onSubmitEditing={()=>this.messageInp.focus()}
          value={this.state.text}
          onChangeText={text=>this.setState({phone:text})}
          style={styles.textInp}
          ref={ref=> this.phoneInp = ref}   
        />
         <TextInput 
          // autoCapitalize={true}
          autoCorrect={true}
          autoFocus={true}
          keyboardType="default"
          returnKeyType="go" 
          placeholder='Enter Message' 
          onSubmitEditing={this.acceptCoupon}
          value={this.state.text}
          onChangeText={text=>this.setState({message:text})}
          style={styles.textInp}
          ref={ref=> this.messageInp = ref}   
        />
        <View style={styles.btn}>
         <Button buttonText="Report" onPress={this.acceptCoupon} />
        </View>
      </>
    )
  }
}
