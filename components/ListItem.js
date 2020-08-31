/* eslint-disable max-len */
import React from "react";
import { PropTypes } from "prop-types";

import { Text, View, Image, TouchableOpacity } from "react-native";

const mediaBaseUrl = "http://media.mw.metropolia.fi/wbma/uploads/";

export const ListItem = (props) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: "row",
        margin: 4,
        backgroundColor: "#c9dfff",
        border: "1px solid #4c1fd1",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
      }}
    >
      <Image
        style={{
          margin: 8,
          width: 100,
          height: 100,
          flexDirection: "column",
          resizeMode: "contain",
          flexWrap: "wrap",
          borderRadius: 100,
          overflow: "hidden",
          resizeMode: "cover",
        }}
        source={{ uri: `${mediaBaseUrl}${props.singleMedia.thumbnails.w160}` }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          flexWrap: "wrap",
          margin: 15,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: '"Times New Roman", Times, serif',
            color: "#4c1fd1",
            marginBottom: 10,
          }}
        >
          {props.singleMedia.title}
        </Text>
        <Text
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontStyle: "italic",
          }}
        >
          {props.singleMedia.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};
