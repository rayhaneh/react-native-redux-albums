// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const AlbumList = (props) => {
  const { textStyle, viewStyle } = styles;
  const { title } = props;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Album List!</Text>
    </View>
  );
};

const styles = {

};

// Make the component available to other parts of the app
export default AlbumList;
