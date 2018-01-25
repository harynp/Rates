import React from 'react'
import { View, Text} from 'react-native'


const CardSection = (props) => {
  const { viewStyle } = styles
  return (
    <View style={viewStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  viewStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}
export default CardSection
