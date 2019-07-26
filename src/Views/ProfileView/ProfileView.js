// import React, { PureComponent } from 'react'
// // import {IconsProvider} from '../../Contexts/IconsContext'

// import Profile from '../../Services/Profile'

// import SpinnerScreen from '../../Components/SpinnerScreen/Spinner'
// import Alert from '../../Components/Alert/Alert'

// import ProfileChapter from '../../Components/ProfileViewChapter'
// import ProfileViewFacultyorStudent from '../../Components/ProfileViewFacultyorStudent'


// // import { NavigationEvents } from 'react-navigation';
// // import EmptyScreen from '../../Components/EmptyScreenComponent/EmptyScreen';


// export default class ProfileView extends PureComponent {
//   constructor(props){
//     super(props)
//     this.auth = new Auth()
//     this.profile = new Profile()
//     this.huid = this.props.navigation.getParam('huid',null)
//     this.type = this.props.navigation.getParam('type',null)
//     this.isSameProfile=this.props.navigation.getParam('isSame',false)
//     // console.log(this.type)
//     this._isMounted = true
//     // this.isSameProfile = false
//     this.profileData=null
//     this.fetchProfileDetails()
//   }
  
//   state={
//     isLoading:true,
//     type:null,
//     error:false
//   }
 

//   componentWillUnmount(){
//     this._isMounted=false
//   }

 
//   refresh=()=>{
    
//   }

//   render() {
//     // console.log(this.state)
//     if(this.state.isLoading){
//       return <SpinnerScreen message="Loading Profile" />
//     }
    
//     if(this.state.type==="chapter"){
//     return (
//      <>
//      <ProfileChapter isSameProfile={this.isSameProfile} profileData={{...this.profileData,type:this.state.type}}  />
//      </>
//     )
//   }
//   if(this.state.type==="faculty" || this.state.type==="student"){
//     return(
//     <>
//     {(this.state.error)?<Alert title="Error while loading profile" body="An unexpected error occured while trying to fetch the profile data please contact the hyfunn team directly or at hyfunn18@gmail.com" confirmBtnText="OK" handleConfirmAction={this.handleAlertState} handleCancelAction={this.handleAlertState} />:null}
//     <ProfileViewFacultyorStudent isSameProfile={this.isSameProfile} profileData={{...this.profileData,type:this.state.type}}  />
//     </>
//     )
//   }
// }
// }
import React, { PureComponent } from 'react'

import { ScrollView,Text,StyleSheet,Image,TouchableWithoutFeedback,View,Modal } from 'react-native'
// import {Spinner} from '../../Components/Spinner/Spinner'
import Alert from '../../Components/Alert'
// import moduleName from '../../Components/'
import Header from '../../Components/SecondaryHeader'
import Button from '../../Components/Button'
import ViewModal from '../../Components/imageViewModal'

import Auth from '../../Services/Auth'

import ImagePicker from 'react-native-image-crop-picker';


const styles = StyleSheet.create({
  tabIcon:{
    height: 30,
    width: 30,
    paddingTop: 5
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    aspectRatio:1/0.65,
    marginTop: 5,
    marginBottom: 10
  },
  name:{
    fontSize: 22,
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'center',
    color: "#000",
    marginTop: 10,
  },
  jobSection:{
    fontSize: 18,
    fontWeight: 'bold',
    color: "#000",
    marginTop: 10,
  },
  closeContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    width: "30%"
  },
  modalStyle:{
    backgroundColor: '#fff',
    padding: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    // flexDirection: 'row',
    width: "90%",
    marginLeft: "5%",
    marginTop:100,
    borderWidth: 1
  },
  textContainer:{
    // borderBottomWidth:  1,
    padding: 20,
    width: "95%"
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'#ccc',
    margin:5,
    marginTop: 20,
    width: "90%"
},
lineStyleBellow:{
  borderWidth: 0.5,
  borderColor:'#ccc',
  margin:5,
  width: "90%"
},
infoDiv:{
  width: "100%",
  alignItems: 'center',
  marginTop: 5,

},
bio:{
  padding: 20,
},
bioText:{
  fontSize: 16,
},
})

export default class Notification extends PureComponent {
  constructor(props){
    super(props)
    this.auth = new Auth()
    this.fetchProfileDetails()
    this.takePicture= this.showCameraRollOptions.bind(this)
    this.chooseFromGallery = this.showCameraRollOptions.bind(this,'Library')
    this.userData=null
  }
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => {
        const image = focused 
        ? require('../../Assets/ActiveProfile.webp') 
        : require('../../Assets/InactiveProfile.webp')
        return (
            <Image 
                source={image}
                style={styles.tabIcon}
            />
        )
    }
}
state={
  error:false,
  isCameraRollOptionsModalVisible:false,
  isViewModalVisible:false,
  imgURI:null,
}

handleAlertState=()=>{
  this.setState(prevState=>{
    return {error:!prevState.error}
  })
}
changeProfilePicViewState=()=>{
  this.setState(prevState=>{
    return {isViewModalVisible:!prevState.isViewModalVisible}
  })
}

changeProfilePicViewState=()=>{
  this.setState(prevState=>{
    return {isViewModalVisible:!prevState.isViewModalVisible}
  })
}

fetchProfileDetails=async ()=>{
  try {
  let userData = await this.auth.getUserData('userData')
  // let profileData = this._isMounted && await this.profile.getProfile({...userData[0],isSameProfile:this.isSameProfile})
  console.log(userData)
  this.userData = userData
  this.setState({
    imgURI:userData.imgURI
  })
  // console.log(profileData[0]
  } catch (error) {
    this.setState({
      error:true,
    })
  }
  
}


renderCameraRollOptionsModal=()=>{
  if(this.state.isCameraRollOptionsModalVisible){
    return (
    <View style={styles.modalContainer}>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.isCameraRollOptionsModalVisible}
          onRequestClose={this.handleCameraRollOptions}>
          <View style={styles.modalStyle} >
          <TouchableWithoutFeedback onPress={this.handleCameraRollOptions}>
            <View style={styles.closeContainer}>
                <Text style={styles.textStyle}>X</Text>
            </View>
          </TouchableWithoutFeedback>   
            <View style={styles.textContainer}>
              <TouchableWithoutFeedback onPress={this.takePicture}>
                  <Text style={styles.textStyle}>Take Picture</Text>
              </TouchableWithoutFeedback>
              </View>
              <View style={styles.textContainer}>
              <TouchableWithoutFeedback onPress={this.chooseFromGallery}>
                  <Text style={styles.textStyle}>Choose From gallery</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          </Modal>
      </View>
      )
  }
}

showCameraRollOptions=(keyName)=>{
  if(keyName==="Library"){
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality:0.7,
      includeBase64:true
    }).then(image => {
      this.userData['imgURI'] = `data:${image.mime};base64,${image.data}`
      this.auth.updateUserData(this.userData,'userData')
      this.setState({
        imgURI:this.userData.imgURI
      })
    })
  }else{
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality:0.7,
      includeBase64:true

    }).then(image => {
      // console.log(image)
      //"data:${image.mime};base64,";
      this.userData['imgURI'] = `data:${image.mime};base64,${image.data}`
      this.userData["name"] = "Vignesh Nayak"
      this.userData["job"] = "Student"
      this.userData["bio"] = "hardworking CA aspirant buddy CA"
      this.auth.updateUserData(this.userData,'userData')
      this.setState({
        imgURI:this.userData.imgURI
      })
    });
  }
}

handleCameraRollOptions=()=>{
this.setState(prevState=>{
  return {isCameraRollOptionsModalVisible:!prevState.isCameraRollOptionsModalVisible}
})
}

  render() {
    if(this.userData){
      var {name,job,bio} = this.userData 
    }
    return (
      <>
      {this.renderCameraRollOptionsModal()}       
      <Header title="Profile" shouldShowBackBtn={true}/>
      {(this.state.error)?<Alert title="Error while loading profile" body="An unexpected error occured while trying to fetch the profile data" confirmBtnText="OK" handleConfirmAction={this.handleAlertState} handleCancelAction={this.handleAlertState} />:null}
      <ScrollView>
        <ViewModal isModalVisible={this.state.isViewModalVisible} changeModalState={this.changeProfilePicViewState} imgURI={this.state.imgURI}  />
        <TouchableWithoutFeedback onPress={this.changeProfilePicViewState}>
          <Image source={{uri:this.state.imgURI}} style={styles.imageContainer} />
        </TouchableWithoutFeedback>
        <Button buttonText="Change profile picture" onPress={this.handleCameraRollOptions} />
        <View style={styles.infoDiv}>
        <Text style={styles.name}>{name}</Text>
         <Text style={styles.jobSection}>"{job}"</Text>
         <View style = {styles.lineStyle} />
         <View style={styles.bio}>
            <Text style={styles.bioText}>{bio}</Text>
         </View>
         <View style={styles.lineStyleBellow} />
         <View style={styles.bio}>
          <Text style={styles.bioText}>
            Contribution : 20 kg Manure
          </Text>
         </View>
         <View style={styles.lineStyleBellow} />
         <View style={styles.bio}>
          <Text style={styles.bioText}>
            Balance : INR 200
          </Text>
        </View>
        <View style={styles.lineStyleBellow} />
        </View>
      </ScrollView>
      </>
    )
  }
}
