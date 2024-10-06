import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
function GoalInput(props) {
  const [enteredText, setEnteredText] = useState("");
  function goalInputHandler(inp) {
    // console.log(inp);
    setEnteredText(inp);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredText);
    setEnteredText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    spacing: 8,
  },
});
