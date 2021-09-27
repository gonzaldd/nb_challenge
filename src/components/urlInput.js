import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const UrlInput = () => (
  <View style={styles.rowContainer}>
    <Text>Input</Text>
    <Button title="Go!" />
  </View>
)

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default UrlInput
