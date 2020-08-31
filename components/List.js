/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
// eslint-disable-next-line max-len
import { FlatList, Image, View, Text } from "react-native";
import { ListItem } from "./ListItem";

const url = "http://media.mw.metropolia.fi/wbma/media/";

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
        const endResult = await Promise.all(
          result.map(async (item) => {
            const response = await fetch(url + item.file_id);
            const json = await response.json();
            return json;
          })
        );
        setMedia(endResult);
      } catch (ex) {
        console.log(ex);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={{ backgroundColor: "lightgray" }}>
      <Text
        style={{
          position: "absolute",
          top: 80,
          left: 0,
          zIndex: 1,
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 20,
          padding: 20,
          backgroundColor: "rgba(135,210,243,0.3)",
          color: "#4c1fd1",
          textTransform: "uppercase",
          fontWeight: "normal",
          textDecorationLine: "underline",
        }}
      >
        Louskutin rannalla
      </Text>
      <Image
        style={{ marginBottom: 10, height: 200 }}
        source={{ uri: "https://i.imgur.com/myi3r6L.jpg" }}
      />
      <FlatList
        data={mediaArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ListItem singleMedia={item} />}
      />
    </View>
  );
};
