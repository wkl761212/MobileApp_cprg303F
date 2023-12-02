/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChuckNorrisFact from './ChuckNorrisFact';

const Stack = createStackNavigator();

export default function App() {
  
  
  const [tasks, setTasks] = useState([
    'Go to gym',
    'Walk dog'
  ])
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="About" component={AboutScreen} />
        
      </Stack.Navigator>
      
      <SafeAreaView style={styles.safeArea}> 
         
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          
          <ToDoList tasks={tasks} />
          <ToDoForm addTask={addTask} />
          
        </ScrollView>
        
      </SafeAreaView>
    </NavigationContainer>
         
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  safeArea: {
    flex: 1,
    paddingTop: 0, // Adjust as needed
  }
});



