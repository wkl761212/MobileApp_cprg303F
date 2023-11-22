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

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  return (
    <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Add a new task..."
              onChangeText={(text) => setTaskText(text)}
              value={taskText}
            />
             <Button title="Add Task" onPress={() => {
                    if(taskText.trim().length > 0) {
                      addTask(taskText.trim());
                      setTaskText('');
                    }
                  }} />
          </View>

  );
};

export default ToDoForm;
