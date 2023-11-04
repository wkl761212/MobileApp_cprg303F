import React from 'react';
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
// Add the styles that you need for your ToDoList
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

const ToDoList = ({ items }) => {
  return (
    <SafeAreaView>
          <ScrollView>
            <Pressable>
              <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Do laundry</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={[styles.task]}>
                <Text style={styles.taskText}>Go to gym</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Walk dog</Text>
              </View>
            </Pressable>
          </ScrollView>

        </SafeAreaView>
  );
};

export default ToDoList;
