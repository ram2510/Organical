import React, { PureComponent } from 'react'
import { Alert,AlertIOS,Platform } from 'react-native'

export default class Modal extends PureComponent {


  showAlertWith1Button = ()=>{
    if(Platform.OS==="ios"){
      AlertIOS.alert(
        `${this.props.title}`,
        `${this.props.body}`,
        [
          {text: `${this.props.confirmBtnText}`, onPress: () =>this.props.handleConfirmAction()},
        ],
        { onDismiss: () => this.props.handleCancelAction() },
      )
    }else{
    Alert.alert(
      `${this.props.title}`,
      `${this.props.body}`,
      [
        {text: `${this.props.confirmBtnText}`, onPress: () =>this.props.handleConfirmAction()},
      ],
      { onDismiss: () => this.props.handleCancelAction() },
    )
    }
  }

  showAlert = ()=>{
    if(Platform.OS==="ios"){
      AlertIOS.alert(
        `${this.props.title}`,
        `${this.props.body}`,
        [
          {
            text: `${this.props.cancelBtnText}`,
            onPress: () => this.props.handleCancelAction(),
            style: 'cancel',
          },
          {text: `${this.props.confirmBtnText}`, onPress: () =>this.props.handleConfirmAction()},
        ],
        { onDismiss: () => this.props.handleCancelAction() },
      )
    }else{
    Alert.alert(
      `${this.props.title}`,
      `${this.props.body}`,
      [
        {
          text: `${this.props.cancelBtnText}`,
          onPress: () => this.props.handleCancelAction(),
          style: 'cancel',
        },
        {text: `${this.props.confirmBtnText}`, onPress: () =>this.props.handleConfirmAction()},
      ],
      { onDismiss: () => this.props.handleCancelAction() },
    )
    }
  }

  render() {
    if(this.props.cancelBtnText){
    return(
      <>
        {this.showAlert()}
      </>
    )
  }else{
    return(
    <>
    {this.showAlertWith1Button()}
    </>
    )
  }
}
}
