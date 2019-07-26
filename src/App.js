import React, { Component } from 'react'
import { Image } from 'react-native'

import LoginScreen from './Views/Login'
// import ShoppingScreen from './Views/ShoppingScreen'
import Home from './Views/HomeScreen'
import Popular from './Views/PopularScreen'
import Sale from './Views/SaleScreen'
import SplashScreen from './Views/SplashScreen'
import Header from './Components/MainHeader'
import Coupons from './Views/CouponsScreen'
import Report from './Views/ReportScreen'
import Search from './Views/SearchScreen'
import Checkout from './Views/CheckoutScreen'
// import EventScreen from './Views/EventList'
import NotificationScreen from './Views/Notifications'
// import BookmarkScreen from './Views/Bookmark'
// import MyPostScreen from './Views/ShowMyPost'
import ProfileView from './Views/ProfileView'

import DrawerMenu from './Components/DrawerMenu'
import { createStackNavigator,createBottomTabNavigator, createAppContainer,createSwitchNavigator,createDrawerNavigator,createMaterialTopTabNavigator } from "react-navigation";

 
import { useScreens } from 'react-native-screens';


useScreens();

let styles = {
  tabIcon:{
    height: 30,
    width: 30,
    paddingTop: 5
  }
}

let Shop = createMaterialTopTabNavigator({
  Home,
  Popular,
  Sale
},
{
  initialRouteName:"Home",
  swipeEnabled:true,
  animationEnabled:true,
  optimizationsEnabled:true,
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor:'#ccc',
    style:{
      backgroundColor: "#fff"
    },
    indicatorStyle:{
      backgroundColor: "#0078D7"
    }
  }
})

Shop = createStackNavigator({
  Shop:{
    screen:Shop,
    navigationOptions:{
      header:<Header title="Organical" />
    }
  }
})



const Tabs = createBottomTabNavigator(
 {
    Profile:ProfileView,
    Shop:{
      screen:Shop,
      navigationOptions:{
        tabBarLabel: 'Shop',
        tabBarIcon: ({ focused }) => {
            const image = focused 
            ? require('./Assets/ActiveShop.webp') 
            : require('./Assets/InactiveShop.webp')
            return (
                <Image 
                    source={image}
                    style={styles.tabIcon}
                />
            )
        }
    }
    },
    Notification:NotificationScreen,
  },
  {
  //   navigationOptions: ({ navigation }) => ({
  //   drawerLockMode:
  //     navigation.state.routes[navigation.state.index].routeName === 'Post'
  //       ? 'none'
  //       : 'locked-closed',
  // }),
    initialRouteName: "Shop",
    tabBarposition: 'bottom', 
    backBehavior:"history",
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor:'#ddd',
    }
  }
  
)


const AuthStack = createStackNavigator(
  {
    Login: {
      screen:LoginScreen,
      navigationOptions: {
        title: 'Login',
        header: null //this will hide the header
      }
    }
  }
)

const Drawer = createDrawerNavigator(
  {
    Tabs,
    // BookmarkScreen,
    // MyPostScreen,
    // ProfileView
    Coupons,
    Report,
    Search,
    Checkout
  },
  {
    contentComponent: props => <DrawerMenu {...props} />,
  }
);

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    SplashScreen,
    App:Drawer,
    Auth:AuthStack
  }
))

export default class App extends Component {

  render() {
    return (

        <AppContainer />
    )
  }
}
