import React from 'react';
import AllBooks from './src/screens/AllBooks/AllBooks'
import ReadingQueue from './src/screens/ReadingQueue/ReadingQueue'
import Favourites from './src/screens/Favourites/Favourites'
import BookDetails from './src/screens/BookDetails/BookDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HeaderColor} from './src/utils/colors'
import {BookContextProvider} from './src/context/book-context'
import routes from './src/utils/routes'


const Stack = createStackNavigator();

function FavouritesStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: HeaderColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name={routes.favourites} component={Favourites} />
    </Stack.Navigator>
  );
}
function ReadingQueueStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: HeaderColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name={routes.readingQueue} component={ReadingQueue} />
    </Stack.Navigator>
  );
}
function AllBooksStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: HeaderColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name={routes.all} component={AllBooks} />
      <Stack.Screen name ={routes.bookDetails} component={BookDetails}/>
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <BookContextProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen  name="All books" component={AllBooksStack} />
        <Tab.Screen name="Favourites" component={FavouritesStack} />
        <Tab.Screen name="Reading queue" component={ReadingQueueStack} />
      </Tab.Navigator>
    </NavigationContainer>
    </BookContextProvider>
  );
}


