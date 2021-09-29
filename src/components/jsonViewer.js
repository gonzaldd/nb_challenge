import React, { useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const JsonViewer = ({ data }) => {
  const showJson = useCallback((jsonData) => {
    let str = ''

    function recursiveJson(json, deep = 0) {
      let tabs = new Array(deep).fill('\t').join('')

      Object.keys(json).map((key) => {
        if (typeof json[key] === 'object') {
          const isArr = Array.isArray(json[key])
          str = str.concat(`${tabs}${key}${isArr ? '[]' : '{}'}: \n`)
          recursiveJson(json[key], deep + 1)
        } else {
          str = str.concat(`${tabs}${key}: ${json[key]}\n`)
        }
      })
    }
    recursiveJson(jsonData)
    return str
  })

  return (
    <>
      {data && (
        <View style={styles.treeViewContainer}>
          <View style={styles.treeView}>
            <Text>{showJson(data)}</Text>
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

JsonViewer.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

export default React.memo(JsonViewer)
