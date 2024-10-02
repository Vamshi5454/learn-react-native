import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(event) {
    setEnteredText(event);
  }
  function addGoalHandler() {
    console.log(enteredText);
    setCourseGoals([...courseGoals, enteredText]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your course goal"
          onChange={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View>
        <Text> List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    spacing: 8,
  },
});
