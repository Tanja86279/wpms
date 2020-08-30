/* eslint-disable max-len */
import React, {useState, useEffect} from 'react';
// eslint-disable-next-line max-len
import {FlatList} from 'react-native';
import {ListItem} from './ListItem';

const url = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';

const loadMedia = async () => {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  return json;
};

export const List = () => {
  const [mediaArray, setMedia] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await loadMedia();
        setMedia(result);
      } catch (ex) {
        console.log(ex);
      }
    };
    fetchData();
  }, []);
  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
}
