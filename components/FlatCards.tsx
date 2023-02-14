import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardone]}>
          <Text style={styles.headingText2}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardtwo]}>
          <Text style={styles.headingText2}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardthree]}>
          <Text style={styles.headingText2}>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    textAlign:'center',
    color:'#FFFFFF',
    marginTop:12
  },
  headingText2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: '#000000',
  },
  container: {
    flex:1,
    flexDirection:'row',
    margin:12
  },
  card: {

  },
  cardone: {
    width: 100,
    height: 100,
    backgroundColor: '#EF5354',
    borderRadius: 6,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
  },
  cardtwo: {
    width: 100,
    height: 100,
    backgroundColor: '#00FFFF',
    borderRadius: 6,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
  },
  cardthree: {
    width: 100,
    height: 100,
    backgroundColor: '#7FFFD4',
    borderRadius: 6,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
  },
});
