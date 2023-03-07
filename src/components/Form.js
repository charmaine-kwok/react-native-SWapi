import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useAtom } from "jotai";
import { characterNameAtom } from "../atoms/characterName";

export default function Form(props) {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
    },
  });

  const onSubmit = (data) => {
    props.onSearch.navigate("Character", { params: data, name: props.name });
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.name}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder={props.placeholder}
          />
        )}
        name="Name"
        rules={{ required: true }}
      />

      <View style={styles.button}>
        <Button
          color="white"
          title="Reset"
          onPress={() => {
            reset({
              Name: "",
            });
          }}
        />
      </View>

      <View style={styles.button}>
        <Button color="white" title="Search" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "white",
    marginBottom: 20,
    fontSize: 20,
    justifyContent: "flex-start",
    textAlign: "center",
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "black",
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    // paddingTop: Constants.statusBarHeight,
    padding: 18,
    minWidth: "80%",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
