import axios from 'axios'

export const get_rates_all = (data) => {
  return {
    type: 'GET_RATES',
    payload: {
      data
    }
  }
}

export const fetch_rates_api = (dispatch) => {
  return (dispatch) => {
    const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=25'
    axios.get(url)
    .then(response => {
      dispatch(get_rates_all(response.data))
    })
    .catch(err => {
      console.log(err)
    })
  }
}
