import React, { PureComponent } from 'react'
import { TextInput,StyleSheet } from 'react-native'

import Header from '../../Components/SecondaryHeader'
import Button from '../../Components/Button'
import Alert from '../../Components/Alert'

const styles = StyleSheet.create({
  textInp:{
    marginTop: 100,
    marginBottom: 60,
    borderWidth: 1,
    width: "90%",
    marginLeft: "5%",
  }
})

export default class Coupons extends PureComponent {

  state={
    text:'',
    redeem:false,
    error:false
  }

  acceptCoupon=()=>{
    if(this.state.text==="7765"){
     return this.changeRedemModalState()
    }
    return this.changeErrorAlert()
  }
  changeRedemModalState=()=>{
    this.setState(prevState=>{
      return {
        redeem:!prevState.redeem
      }
    })
  }
  changeErrorAlert=()=>{
    this.setState(prevState=>{
      return {
        error:!prevState.error
      }
    })
  }

  render() {
    return (
      <>
        {(this.state.error?<Alert confirmBtnText="Ok" title="Invalid coupon Number" body="Please enter a valid coupon number" handleConfirmAction={this.changeErrorAlert} handleCancelAction={this.changeErrorAlert} />:null)}
        {(this.state.redeem?<Alert confirmBtnText="Ok" title="Congratultions!" body="You just recived a coupon of INR 200 Enjoy Shopping!" handleConfirmAction={this.changeRedemModalState} handleCancelAction={this.changeRedemModalState} />:null)}
        <Header title="Coupons" shouldShowBackBtn={true} />
        <TextInput 
          // autoCapitalize={true}
          autoCorrect={true}
          autoFocus={true}
          keyboardType="numeric"
          placeholder="Enter Coupon number"
          onSubmitEditing={this.acceptCoupon}
          value={this.state.text}
          onChangeText={text=>this.setState({text})}
          style={styles.textInp}
        />
        <Button buttonText="Redeem Coupon" onPress={this.acceptCoupon} />
      </>
    )
  }
}
