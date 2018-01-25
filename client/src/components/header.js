import React from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
  const { textStyle, viewStyle, textStyle2 } = styles
  return (
    <View>
      <View style={viewStyle}>
        <Text style={textStyle}>Blockfolio</Text>
      </View>
    </View>
  )
}


const styles = {
  viewStyle: {
    backgroundColor: 'rgb(0, 1, 1)',
    height: 60,
    paddingTop: 15,
    shadowColor:  '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 30,
    color: 'rgb(249, 249, 249)',
    fontFamily: 'Serif',
    marginBottom: 5
  },
  textStyle2: {
    fontSize: 20,
    color: 'rgb(249, 249, 249)',
    fontFamily: 'Cochin',
    textAlign: 'right',
    alignSelf: 'stretch'
  }
};

export default Header;
