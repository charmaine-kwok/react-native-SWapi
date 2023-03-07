import { Text, View, Image } from "react-native";

import Form from "../components/Form";

export default function SearchScreen({ navigation, route }) {
  const title = route.params.title;
  // console.log(title);
  const placeholder = route.params.placeholder;
  // console.log(placeholder);

  return (
    <View className="flex-1 items-center bg-neutral-700">
      <View>
        <Text className="font-bold text-2xl text-white mt-5 text-center">
          Search a Star Wars {title}:
        </Text>
        <Form onSearch={navigation} name={title} placeholder={placeholder} />
        <View className="flex-row items-end justify-center">
          <Image
            height={250}
            width={300}
            source={{
              uri: "https://i.kym-cdn.com/photos/images/original/000/748/010/532.jpg",
            }}
          />
        </View>
      </View>
    </View>
  );
}
