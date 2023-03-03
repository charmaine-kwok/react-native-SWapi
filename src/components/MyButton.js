import { TouchableOpacity } from "react-native";

const MyButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...props.style }}
      className="bg-black flex-row p-5 rounded-full border-white border-2 m-4"
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default MyButton;
