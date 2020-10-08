import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem as NBListItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Right,
  Button,
  Icon,
} from 'native-base';
import {deleteFile} from '../hooks/APIhooks';
import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const ListItem = ({navigation, singleMedia, editable}) => {
  const doDelete = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const result = await deleteFile(singleMedia.file_id, userToken);
      console.log('delete a file', result);
      navigation.replace('MyFiles');
      // TODO: prompt user before deleting
      // https://reactnative.dev/docs/alert
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <NBListItem thumbnail>
      <Left>
        <TouchableOpacity
          onPress={
            () => {
              navigation.navigate('Single', {file: singleMedia});
            }}>
          <Thumbnail
            square
            source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
          />
          <Icon
            style={
              {
                position: 'absolute',
                left: 4,
                top: 4,
                color: '#fff',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 3,
              }
            }
            name={singleMedia.media_type == 'image' ? 'image' : 'videocam'}
          />
        </TouchableOpacity>
      </Left>
      <Body>
        <Text>{singleMedia.title}</Text>
        <Text note numberOfLines={1}>{singleMedia.description}</Text>
      </Body>
      <Right style={{flexDirection: 'row'}}>
        <Button transparent onPress={
          () => {
            navigation.navigate('Single', {file: singleMedia});
          }}>
          <Icon name={'eye'}></Icon>
        </Button>
        {editable && <>
          <Button success transparent onPress={
            () => {
              navigation.navigate('Modify', {file: singleMedia});
            }}>
            <Icon name={'create'}></Icon>
          </Button>
          <Button danger transparent onPress={doDelete}>
            <Icon name={'trash'}></Icon>
          </Button>
        </>
        }
      </Right>
    </NBListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
  editable: PropTypes.bool,
};

export default ListItem;
