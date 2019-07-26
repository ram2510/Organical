import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'

import Auth from '../../Services/Auth'
import ProductComponent from '../../Components/CheckoutProductComponent'
import Header from '../../Components/SecondaryHeader'


export default class Checkout extends PureComponent {
  // static navigationOptions = {
  //   headerTitle: <Header title="Organical" />
  // }
  constructor(props){
    super(props)
    this.auth = new Auth();
    this.checkOutArr = {proArr:[]}
    this.fetchCheckoutProducts()
  }
  state={
    proData : null
  }

  fetchCheckoutProducts=async ()=>{
    this.checkOutArr = await this.auth.getUserData("checkout")
    console.log(this.checkOutArr)
    this.setState({
      proData:this.checkOutArr
    })
  }
  removeFromList=async (id)=>{
    let data = this.checkOutArr.proArr.filter(p=>{
      return p.id!==id
    })
    // console.log(data)
    this.checkOutArr.proArr = data
    console.log(this.checkOutArr)
    await this.auth.updateUserData(this.checkOutArr,'checkout')
    this.setState({
      proData:data
    })
  }

  renderProducts=()=>{
    return this.checkOutArr.proArr.map(p=><ProductComponent key={p.id} product={p} removeFromList={this.removeFromList} />)
  }

  render() {

    if(this.state.proData)
    return (
      <>
      {/* <Header title="Organical" /> */}
      <Header title="Checkout" shouldShowBackBtn={true} />
      <ScrollView>
       {this.renderProducts()}
      </ScrollView>
      </>
    )
    return (
      <>
        <Header title="Checkout" shouldShowBackBtn={true} />
        <ScrollView>
        </ScrollView>
      </>
    )
  }
 
}
