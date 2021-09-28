import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import JSONTree from 'react-native-json-tree'

const JsonViewer = ({ data }) => {
  console.log('JSONVIEWER render')
  return (
    <>
      {data && (
        <View style={styles.treeViewContainer}>
          <View style={styles.treeView}>
            <JSONTree
              data={data}
              hideRoot={true}
              theme={JsonTheme}
              invertTheme={false}
              shouldExpandNode={() => true}
            />
          </View>
        </View>
      )}
      {data === false && (
        <Text style={styles.textInfo}>
          Ingresá la URL de una API, cuya respuesta sea del tipo JSON
        </Text>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  textInfo: {
    fontSize: 18,
    color: '#A0A0A0',
    textAlign: 'center',
    marginHorizontal: 70,
    marginVertical: 100,
  },
  treeViewContainer: {
    margin: '4%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  treeView: { maxWidth: '90%', padding: 5 },
})

const JsonTheme = {
  scheme: 'monokai',
  base00: 'white',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633',
}

JsonViewer.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

export default React.memo(JsonViewer)
