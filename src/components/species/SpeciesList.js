import { View, StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";

import SpeciesListItem from "./SpeciesListItem";

export default function SpeciesList(props) {
  console.log("in species list");
  console.log(props.data);

  return (
    <View style={styles.list}>
      <FlashList
        estimatedItemSize={50}
        data={props.data}
        renderItem={({ item, index }) => (
          <SpeciesListItem item={item} navigation={props.navigation} />
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
