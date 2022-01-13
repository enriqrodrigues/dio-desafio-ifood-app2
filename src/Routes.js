//-------->Código da Aula:--------->

//import React from 'react';
import * as React from 'react'; //import atualizado
import { NavigationContainer } from '@react-navigation/native';

//Esse importe permitirá a navegação com o menu superior.
//import { createStackNavigator } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importação das telas Home e Main
import Home from './Pages/Home';
import Main from './Pages/Main';

//const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false
}

const Routes = () => {
  return (
      //Para trabalhar com rotas, temos que envolver todas as rotas dentro do NavigationContainer. O Stack.Navigator envolverá cada tela existente. E a Stack.Screen é a tela em si.
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Main" component={Main} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Routes;

//-------->Código inicial:--------->
/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Routes() {
  return (
    <View style={styles.container}>
      <Text>Teste de App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
