import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [Goals, setGoals] = useState([]);

  function addGoalHandler(enteredText) {
    console.log(enteredText);
    setGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }
  function deleteGoalHandler(id) {
    console.log("DELETE");
    setGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id != id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={Goals}
        renderItem={(item) => {
          return (
            <GoalItem
              text={item.item.text}
              id={item.item.id}
              onDeleteItem={deleteGoalHandler}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
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
});
