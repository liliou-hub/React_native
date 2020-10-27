import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Alert, ActivityIndicator } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container} >
      <View>
        <Text style={styles.police} >Hello</Text>
        <Text style={styles.centre} >je suis </Text> 
        <Text style={styles.gras} >KONEXIO</Text>

        <Image source={require('./assets/konexio-logo_1.png')}
          style={{ width: 300, height: 100 }} />  
        <Image
          source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
          style={{ width: 300, height: 100 }} />

        <Button
          title="ALERTE"
          onPress={() => Alert.alert('Simple Button pressed')}
        // poser question pour console.log   
        />
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

        <ActivityIndicator size="large" color="#00ff00" />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    className: 'row'
  },



  police: {
    fontSize: 30,
    paddingBottom: 80,
    paddingTop: 80
  },

  centre: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    paddingBottom: 80,
  },

  gras: {
    fontWeight: 'bold',
    paddingBottom: 80,
  }



});

export default App;
