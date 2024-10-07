import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  // const [modalIsVisible, setModalIsVisible] = useState(false);
  const [Goals, setGoals] = useState([]);

  function modalHandler() {
    setModalIsVisible(true);
  }
  function endModalHandler() {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredText) {
    // console.log(enteredText);

    setGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    // console.log(Goals);
  }
  function deleteGoalHandler(id) {
    console.log("DELETE");
    setGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id != id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <Button title="Add new goal" color="#5e0acc" onPress={modalHandler} />
      {/* {modalIsVisible && ( */}
      <GoalInput onAddGoal={addGoalHandler} onCancel={endModalHandler} />
      {/* )} */}
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
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // padding: 50,
    flex: 1, // Allow the container to take full screen space
    padding: 50,
    paddingBottom: 100, // Add space at the bottom for goals to be visible
  },
});
