import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Elevated() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView scrollEnabled={true} horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardelevated]}>
          <Text style={styles.headingText2}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardelevated]}>
          <Text style={styles.headingText2}>me</Text>
        </View>
        <View style={[styles.card, styles.cardelevated]}>
          <Text style={styles.headingText2}>to</Text>
        </View>
        <View style={[styles.card, styles.cardelevated]}>
          <Text style={styles.headingText2}>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardelevated]}>
          <Text style={styles.headingText2}>fuck me </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 12,
  },
  headingText2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  container: {
    padding: 8,
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    width: 150,
    margin: 12,
    height: 200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  cardelevated: {
    backgroundColor: '#CAD5E2',
  },
});
