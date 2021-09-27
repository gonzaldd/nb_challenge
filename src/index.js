import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
} from 'react-native'
import UrlInput from './components/urlInput'
import JsonViewer from './components/jsonViewer'

const Main = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.fullWidth}>
        <SafeAreaView>
          <StatusBar animated={true} barStyle="dark-content" />
        </SafeAreaView>
        <Text style={styles.title}>Challenge</Text>
        <UrlInput />
        <JsonViewer />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F7',
  },
  title: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    height: 50,
    textAlign: 'center',
  },
  fullWidth: { width: '100%' },
})

export default Main
