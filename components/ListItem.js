import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import PropTypes from 'prop-types';

export const ListItem = (args) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: "row",
        marginBottom: 4,
        backgroundColor: "lightgray",
      }}
    >
      <Image
        style={{ flex: 1, margin: 8 }}
        source={{ uri: args.singleMedia.thumbnails.w160 }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          margin: 15,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{args.singleMedia.title}</Text>
        <Text>{args.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};
