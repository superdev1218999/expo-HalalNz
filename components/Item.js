import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    width: "80%",
    margin: "auto",
    textAlign: "center",
    fontFamily: "arial",
  },
  name: {
    fontSize: 30,
  },
  status: {
    color: "grey",
    fontSize: 22,
  },
});

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, status } = this.props.route.params.data;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
    );
  }
}

export default Item;
