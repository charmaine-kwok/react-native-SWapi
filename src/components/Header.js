import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      {/* <View className="items-center justify-center h-24 pt-36 w-full bg-black"> */}
      <Text style={styles.headerTitle}>{props.title}</Text>
      {/* <Text className="items-center justify-center h-24 text-lg text-black">{props.title}</Text> */}
      {/* <Text className="text-lg text-black">{props.title}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  headerTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "600",
  },
});

export default Header;
