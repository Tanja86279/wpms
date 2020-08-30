/* eslint-disable max-len */
import React from 'react';
import {PropTypes} from 'prop-types';

import {Text, View, Image, TouchableOpacity} from 'react-native';

const mediaBaseUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

export const ListItem = (props) => {
  return (
    <TouchableOpacity style={{flex: 1, flexDirection: 'row', marginBottom: 4, backgroundColor: 'lightgray'}}>
      <Image
        style={{margin: 8, width: 160, flexDirection: 'column', resizeMode: 'contain'}}
        source={{uri: `${mediaBaseUrl}${props.singleMedia.thumbnails.w160}`}}
      />
      <View style={{flex: 1, flexDirection: 'column', flexWrap: 'wrap', margin: 15}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>{props.singleMedia.title}</Text>
        <Text >{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};
