import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { View, Text, Button } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <MainLayout>
      <View style={{ flex: 1, justifyContent: 'top', alignItems: 'center' }}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Text>My Awesome Project</Text>
        <Text>Greg Wu</Text>
        <Text>Date: {new Date().toLocaleDateString()}</Text>
      </View>
    </MainLayout>
  );
}


