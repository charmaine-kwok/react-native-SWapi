import { View, StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";

import CharacterListItem from "./CharacterListItem";

export default function CharacterList(props) {
  console.log(props.data);

  return (
    <View style={styles.list}>
      <FlashList
        estimatedItemSize={50}
        data={props.data}
        renderItem={({ item, index }) => (
          <CharacterListItem item={item} navigation={props.navigation} />
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
