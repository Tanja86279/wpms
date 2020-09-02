import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";

const mediaUrl = "http://media.mw.metropolia.fi/wbma/uploads/";

const ListItem = ({ navigation, singleMedia }) => {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        navigation.navigate("Single", { file: singleMedia });
      }}
    >
      <View style={styles.imagebox}>
        <Image
          style={styles.image}
          source={{ uri: mediaUrl + singleMedia.thumbnails.w160 }}
        />
      </View>
      <View style={styles.textbox}>
        <Text style={styles.listTitle}>{singleMedia.title}</Text>
        <Text>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
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
  },
  imagebox: {
    flex: 1,
    maxWidth:100,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden",
    resizeMode: "cover",
  },
  textbox: {
    flex: 2,
    padding: 10,
  },
  listTitle: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: '"Times New Roman", Times, serif',
    color: "#4c1fd1",
    marginBottom: 10,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
