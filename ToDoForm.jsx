import React, { useState } from 'react';
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

// Add the styles that you need for your form
const styles = StyleSheet.create({
  task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
});

const ToDoForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  return (
    <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Add a new task..."
            />
            <Button title="Add" />
          </View>
  );
};

export default ToDoForm;
