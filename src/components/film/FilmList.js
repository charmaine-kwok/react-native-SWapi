import { View, StyleSheet, FlatList } from "react-native";

import FilmListItem from "./FilmListItem";

export default function FilmList(props) {
  console.log(props.data);
  return (
    <View style={styles.list}>
      <FlatList
        data={props.data}
        renderItem={({ item, index }) => (
          <FilmListItem item={item} navigation={props.navigation} />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginVertical: 10,
    marginHorizontal: 15,
    minHeight: 100,
    flexDirection: "row",
  },
});
