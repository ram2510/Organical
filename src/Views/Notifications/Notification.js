import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'

import Header from '../../Components/SecondaryHeader'
import Icon from '../../Components/IconWithBadge'
import NotificationCompo from '../../Components/NotificationComponent'

// const styles = StyleSheet.create({
//   tabIcon:{
//     height: 30,
//     width: 30,
//     paddingTop: 5
//   }
// })

export default class Notification extends PureComponent {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ focused }) => {
        const image = focused 
        ? require('../../Assets/ActiveNotif.webp') 
        : require('../../Assets/InactiveNotif.webp')
        return (
            <Icon 
                icon={image}
                badgeCount="3"
            />
        )
    }
}
  render() {
    return (
      <>
      <Header title="Notifications" shouldShowBackBtn={true}/>
      <ScrollView>
       <NotificationCompo text="Your order is on the way" />
       <NotificationCompo text="Your order has arrived" />
       <NotificationCompo text="Your order has been shipped" />
      </ScrollView>
      </>
    )
  }
}
