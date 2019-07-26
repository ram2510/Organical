import React, { PureComponent } from 'react'
import { View,Text,Image } from 'react-native'

export default class Icon extends PureComponent {
  render() {
    let {icon,badgeCount} = this.props
    return (
      <>
        <View style={{ width: 30, height: 30 }}>
        <Image source={icon} style={{height: 30,width: 30,paddingTop: 5}} resizeMode={"contain"} />
        { badgeCount > 0 && (
          <View style={{
            position: 'absolute',
            right: 0,
            top: 1,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
          </View>
        )}
      </View>
      </>
    )
  }
}
