
import AsyncStorage from '@react-native-community/async-storage';

export default class Auth{
  async loginReq(loginData){
  //  console.log(loginData)
    if((loginData.username ==="testuser" || loginData.username==="test@test.com") && loginData.password==="pass12"){
      try {
        this.storeUserData({
          name:"XYZ",
          bio:"hard-working,CA aspirant, budding CA",
          job:"Student",
          // // facebookId:'test',
          // linkedinId:"ram2510",
          // insragramId:"test",
          // twitterId:"test",
          // school:"Test",
          // puc:"Mumbai",
          // college:"Test",
          // hometown:"Mumbai",
          // currentCity:"Mumbai",
          imgURI:''
        },"userData")
        this.storeUserData({proArr:[]},"checkout")
        return true
      } catch (error) {
        // console.log(error)
        return false
      }
      }else{
        return false
      }
  }
  
  storeUserData = async (data,keyName) => {
    console.log(data)
    try {
      await AsyncStorage.setItem(keyName, JSON.stringify(data))
      // console.log('b')
      return true
    } catch (e) {
      // saving error
      // console.log(e)
      throw new Error(e)
    }
  }

  getUserData=async (keyName)=>{
    try {
      const value = await AsyncStorage.getItem(keyName)
    if(value !== null) {
      // value previously stored
      // console.log(value)
      return JSON.parse(value)
    }else{
      return false
    }
    } catch (error) {
      throw new Error("l")
    }
  }
  updateUserData=async (newData,keyName)=>{
    const res = await AsyncStorage.mergeItem(keyName, JSON.stringify(newData))
  }

  removeValue = async (keyName="userData") => {
    try {
      await AsyncStorage.removeItem(keyName)
      return true
    } catch(e) {
      throw new Error(e)
    }
  }

}