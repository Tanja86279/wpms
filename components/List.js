/* eslint-disable max-len */
import React, {useState, useEffect} from 'react';
// eslint-disable-next-line max-len
import {FlatList} from 'react-native';
import {ListItem} from './ListItem';

const url = 'http://media.mw.metropolia.fi/wbma/media/';

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
        const endResult = await Promise.all(result.map(async (item) => {
          const response = await fetch(url + item.file_id);
          const json = await response.json();
          return json;
        }));
        setMedia(endResult);
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
};
