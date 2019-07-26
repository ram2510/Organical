import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'


import Products from '../../Data/Products'
import ProductComponent from '../../Components/ProductComponent'

import Auth from '../../Services/Auth'

export default class Home extends PureComponent {
  // static navigationOptions = {
  //   headerTitle: <Header title="Organical" />
  // }
  constructor(props){
    super(props)
    this.auth = new Auth()
    this.checkOutArr = {proArr:[]}
    this.populateCheckOutArr()
  }

  populateCheckOutArr=async ()=>{
    this.checkOutArr =await this.auth.getUserData('checkout')
  }

  addProductToCheckout=(id)=>{
    let data = Products.filter(p=>{
      return p.id === id
    })
    this.checkOutArr.proArr.push(data[0])
    console.log(this.checkOutArr)
    this.auth.updateUserData(this.checkOutArr,'checkout')
  }

  renderProducts=()=>{
    return Products.map(p=><ProductComponent key={p.id} product={p} addProductToCheckout={this.addProductToCheckout} />)
  }

  render() {
    return (
      <>
      {/* <Header title="Organical" /> */}
      <ScrollView>
       {this.renderProducts()}
      </ScrollView>
      </>
    )
  }
}
