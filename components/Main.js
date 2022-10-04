import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#000",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    allProducts: [
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
      { name: "Cadbury", status: "Vegan" },
    ],
    filteredProducts: [
      { name: "dlkf", status: "Vegan" },
      { name: "dlkf", status: "Vegan" },
      { name: "dlkf", status: "Vegan" },
      { name: "dlkf", status: "Vegan" },
      { name: "dlkf", status: "Vegan" },
      { name: "dlkf", status: "Vegan" },
      { name: "dlkf", status: "Vegan" },
    ],
  };

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  getProduct = (item) => {
    this.props.navigation.navigate("Item", { data: item });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.filteredProducts}
          renderItem={(product) => (
            <Text
              style={styles.item}
              onPress={this.getProduct.bind(this, product.item)}
            >
              {product.item.name}
            </Text>
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

export default Main;
