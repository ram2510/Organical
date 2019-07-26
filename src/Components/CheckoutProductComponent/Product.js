import React, { PureComponent } from 'react'
import { Image,Text,StyleSheet,View,TouchableWithoutFeedback } from 'react-native'

import Card from '../Card'
import CardItem from '../CardItem'
import Button from '../Button'

// import Auth from '../../Services/Auth'

const styles = StyleSheet.create({
  previewImg:{
    width: "100%",
    padding:5,
    aspectRatio:1/0.65
  },
  descContainer:{
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5
  },
  descText:{
    fontSize: 14,
    fontWeight: 'bold',
  },
  strikeText:{
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid',
    fontSize: 14,
  },
  salePrice:{
    width: "15%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    width:"100%"
  }
})

export default class Product extends PureComponent {

  // constructor(props){
  //   super(props)
  //   this.auth = new Auth()
  // }

  renderPriceText=()=>{
    let {sale,price,salePrice} = this.props.product
    if(sale){
      return (
        <View style={styles.salePrice}>
          <Text style={styles.descText}>
            INR
          </Text>
          <Text style={styles.strikeText}>
                  {` ${price} `}
          </Text>
          <Text style={styles.descText}>
            {` ${salePrice}`}
          </Text>
        </View>
      )
    }
    return (
      <Text style={styles.descText}>
        {`INR ${price}`}
      </Text>
    )
  }

  // removeFromList=()=>{

  // }

  render() {
    let {imgURI,name,id} = this.props.product
    let shopIcon = require('../../Assets/buyIcon.webp')
    return (
      <>
       <Card>
         <CardItem>
          <Image source={imgURI} style={styles.previewImg} />
         </CardItem>
         <CardItem>
           <View style={styles.descContainer}>
              {this.renderPriceText()}
              <Text style={styles.descText}>
                {`${name}`}
              </Text>
              {/* <Image source={shopIcon} style={{width: 24,height: 24}} /> */}
           </View>
         </CardItem>
         <CardItem>
           <View style={styles.button}>
            <Button buttonText="Remove from list" onPress={()=>this.props.removeFromList(id)}/>
            </View>
         </CardItem>
       </Card> 
      </>
    )
  }
}
