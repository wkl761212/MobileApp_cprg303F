import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [randomTask, setRandomTask] = useState('');

  useEffect(() => {
    fetch('./data/tasks.json') // Adjust the path as per your folder structure
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error(error));
  }, []);

  const handleAddTask = () => {
    if (taskText.trim().length > 0) {
      addTask(taskText.trim());
      setTaskText('');
    }
  };

  const handleGenerateRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    const randomTask = tasks[randomIndex];
    setRandomTask(randomTask);
    setTaskText(randomTask); // Set the selected task in the input field
  };

  return (
    <View>
      <TextInput
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <Button title="Generate Random Task" onPress={handleGenerateRandomTask} />
      {randomTask && <Text>{randomTask}</Text>}
      
    </View>
  );
};

export default ToDoForm;


  