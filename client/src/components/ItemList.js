import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet, View, Image,TouchableOpacity } from 'react-native'
import axios from 'axios'
import ItemDetail from './ItemDetail'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'
class ItemList extends Component {
  constructor () {
    super()
    this.state = {
      item: []
    }
  }

  componentWillMount () {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=25')
    .then(response => this.setState({item: response.data}))
  }

  renderItems() {
    return this.state.item.map((data,i) =>
      <ItemDetail key={data.id} data={data}></ItemDetail>
    );
  }

  render() {
    const titleHead = ['Total Portfolio Value', '24hrChange']
    const titleData = [
      ['$.0', '+.00%'],
    ];
    const tableHead = ['Coin', 'Holdings', 'Price', 'Alert']

    return (
      <ScrollView>

      <Table>
          <Row data={titleHead} style={{height: 30, backgroundColor: 'white', borderWidth: 0}} textStyle={styles.text}/>
          <Rows data={titleData} style={styles.row} textStyle={styles.text}/>
      </Table>

      <Table>
          <Row data={tableHead} style={styles.head} textStyle={styles.text2}/>
      </Table>
            {this.renderItems()}
        <CardSection>
          <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Image style={{width: 50, height: 50}} source={require('../img/plus.png')}/>
            <Text style={{fontSize: 20, color: 'black'}}>Add Coin</Text>
          </TouchableOpacity>
        </CardSection>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: 'black' },
  text: { marginLeft: 5, color: 'black', fontSize: 10 },
  text2: { marginLeft: 5, color: 'white', fontSize: 20 },
  row: { height: 30,  borderWidth: 0 }
})


export default ItemList
