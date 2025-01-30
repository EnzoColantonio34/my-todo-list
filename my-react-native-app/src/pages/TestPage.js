import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const TestPage = () => {
  const handlePress = () => {
    alert('Bouton pressé!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page de Test</Text>
      <Button title="Appuyez ici" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default TestPage;