import React, { PureComponent } from 'react'
import { View,Modal,Image } from 'react-native'

export default class ImageViewModal extends PureComponent {
  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.props.isModalVisible}
          onRequestClose={this.props.changeModalState}
          presentationStyle="fullScreen"
          >
            <Image style={{height: "100%",width: "100%"}} resizeMode={"contain"} source={{uri:this.props.imgURI}} />
          </Modal>
      </View>
    )
  }
}
