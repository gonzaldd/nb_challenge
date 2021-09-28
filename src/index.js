import React, { useState } from 'react'
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
  const [loading, setLoading] = useState(false)
  const [errMessage, setErrorMessage] = useState()

  return (
    <View style={styles.container}>
      <ScrollView style={styles.fullWidth}>
        <SafeAreaView>
          <StatusBar animated={true} barStyle="dark-content" />
        </SafeAreaView>
        <Text style={styles.title}>Challenge</Text>
        <UrlInput
          loading={loading}
          errMessage={errMessage}
          onPressButton={() => false}
        />
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
