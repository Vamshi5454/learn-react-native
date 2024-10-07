import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";
function GoalInput(props) {
  const [enteredText, setEnteredText] = useState("");
  function goalInputHandler(inp) {
    // console.log(inp);
    setEnteredText(inp);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredText);
    setEnteredText("");
    // props.onCancel();
  }
  return (
    <Modal animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttoncontainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View>
            <Button title="cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  TextInput: {
    // borderWidth: 1,
    // borderColor: "#cccccc",
    // width: "80%",
    // spacing: 8,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    padding: 8, // Add padding for better input visibility
  },
  inputContainer: {
    flex: 1, // Take full height of the screen
    justifyContent: "center", // Center vertically
    //     alignItems: "center", // Center horizontally
    padding: 16,
  },
  buttoncontainer: {
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});
