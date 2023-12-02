import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ChuckNorrisFact from '../src/ChuckNorrisFact';

export default function HomeScreen({ navigation }) {
  return (
    <MainLayout>
      <View style={{ flex: 1, justifyContent: 'top', alignItems: 'center'}}>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
        <ChuckNorrisFact />
      </View>
    </MainLayout>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

