import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ActivityIndicator,
} from 'react-native'
import PropTypes from 'prop-types'

const UrlInput = ({ loading, onPressButton, errMessage }) => {
  const [url, onChangeUrl] = React.useState()

  return (
    <>
      <View style={styles.rowContainer}>
        <TextInput
          autoFocus
          value={url}
          keyboardType="url"
          placeholder="URL"
          editable={!loading}
          style={styles.input}
          clearButtonMode="always"
          onChangeText={onChangeUrl}
          onSubmitEditing={() => onPressButton(url)}
          autoCapitalize="none"
        />
        {!loading ? (
          <Button
            title="Go!"
            style={styles.button}
            onPress={() => onPressButton(url)}
          />
        ) : (
          <ActivityIndicator style={{ marginLeft: 10 }} />
        )}
      </View>
      {errMessage && <Text style={styles.errMsg}>{errMessage}</Text>}
    </>
  )
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 50,
    margin: 12,
    padding: 10,
    fontSize: 18,
    maxWidth: '75%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  button: { fontSize: 18 },
  errMsg: {
    color: 'red',
    marginLeft: '4%',
    textAlign: 'left',
  },
})

UrlInput.propTypes = {
  loading: PropTypes.bool,
  onPressButton: PropTypes.func.isRequired,
  errMessage: PropTypes.string,
}

export default UrlInput
