import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Elevated from './components/Elevated';
import FlatCards from './components/FlatCards';

function App() {
  return (
    <SafeAreaView>
      <ScrollView >
        <FlatCards />
        <Elevated />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
