import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const ItemDetail = ({data}) => {
  const { name, symbol, rank, price_usd, percent_change_1h } = data;
  const { titleStyles, imageStyles, imageViewStyles, titleTextStyles, iconStyles } = styles
  return (
    <Card>
      <CardSection>
        <View style={titleStyles}>
          <View>
            <Text>Rank : {rank} ({name}) </Text>
            <Image style={{width: 50, height: 50}} source={require('../img/bitcoin.png')}/>
            <Text style={{fontSize: 20}}>{symbol}</Text>
          </View>
        </View>

        <View style={{flex: 1}}>
          <Text>${price_usd}</Text>
          <Text>{percent_change_1h}%</Text>
        </View>

        <TouchableOpacity style={{flex: 1}}>
          <Image style={{width: 30, height: 30}} source={require('../img/bell.png')}/>
        </TouchableOpacity>

      </CardSection>
    </Card>
  )
}

const styles = {
  titleStyles: {
    flexDirection: 'row',
    flex: 2,
  },
  imageStyles: {
    height: 50,
    width: 50
  },
  imageViewStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  titleTextStyles: {
    fontSize: 20
  },
  iconStyles: {
    height: 50,
    width:50,
    flex: 1,
    width: null
  }
}

export default ItemDetail
