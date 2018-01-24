import React, {Component} from 'react'
import { ScrollView,Text } from 'react-native'
import axios from 'axios'

class RateList extends Component {
  constructor () {
    super()
    this.state = {
      rates: []
    }
  }

  componentWillMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=25')
    .then(response => this.setState({rates: response.data}))
  }

  render() {
    return (
      <ScrollView>
        {this.state.rates.map(data => {
          return (
            <Text>{data.name}</Text>
          )
        })}
      </ScrollView>
    )
  }
}

export default RateList
