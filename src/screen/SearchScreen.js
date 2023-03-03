import { Text, StyleSheet, View } from "react-native";

import Form from "../components/Form";

export default function SearchScreen({ navigation }) {
  return (
    <View className="flex-1 items-center bg-neutral-700">
      <Text className="font-bold text-2xl text-white mt-5">
        Search a Star Wars Character:
      </Text>
      <Form onSearch={navigation} />
    </View>
  );
}
