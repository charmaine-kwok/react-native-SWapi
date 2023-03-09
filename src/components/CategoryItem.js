import { View, Image, Text, TouchableOpacity } from "react-native";
export default function CategoryList(props) {
  return (
    <TouchableOpacity onPress={props.link}>
      <View className="relative items-center justify-end rounded-md h-44">
        <Image className="w-full h-full " source={props.item.pic} />
        <View className=" absolute bottom-3.5 flex-row">
          <View
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4) " }}
            className="bg-black  flex-row flex-1 justify-center"
          >
            <Text className="font-semibold text-[16px] text-white">
              {props.item.name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
