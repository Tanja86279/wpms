import React from "react";
import { FlatList, Image, View, Text } from "react-native";
import ListItem from "./ListItem";
import PropTypes from "prop-types";
import { useLoadMedia } from "../hooks/APIhooks";

const url = "http://media.mw.metropolia.fi/wbma/";

const List = ({ navigation }) => {
  const mediaArray = useLoadMedia();

  return (
    <View>
      <Text
        style={{
          position: "absolute",
          top: 80,
          left: 0,
          zIndex: 1,
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
        renderItem={({ item }) => (
          <ListItem singleMedia={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

List.propTypes = {
  navigation: PropTypes.object,
};

export default List;
