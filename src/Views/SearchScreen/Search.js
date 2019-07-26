import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'


import Products from '../../Data/Products'
import ProductComponent from '../../Components/ProductComponent'
import Bar from '../../Components/SearchBar'


export default class HomSearch extends PureComponent {
  // static navigationOptions = {
  //   headerTitle: <Header title="Organical" />
  // }

  constructor(props){
    super(props)
    this.prodArr = Products
  }

  state={
    productArr : Products,
    text:''
  }

  SearchArr=(text)=>{
    this.setState({
      text
    })
    const newData = this.prodArr.filter(p=>{
      const itemData = p.name.toLowerCase()
      text = text.toLowerCase()
      return itemData.indexOf(text) >-1
    })
    this.setState({ productArr: newData },()=>console.log(this.state)) 
  }

  renderProducts=()=>{
    return this.state.productArr.map(p=><ProductComponent key={p.id} product={p} />)
  }

  render() {
    return (
      <>
      {/* <Header title="Organical" /> */}
      <Bar searchFilterFunction={this.SearchArr} value={this.state.text} />
      <ScrollView>
       {this.renderProducts()}
      </ScrollView>
      </>
    )
  }
}
