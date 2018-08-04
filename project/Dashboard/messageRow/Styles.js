import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
      backgroundColor: '#C4E538',
    borderRadius: 5
  },
  bubbleView: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 8,
    padding:8
  },
  userText: {
    color: '#ff6b6b',
    fontSize: 10,
    fontWeight: 'bold'
  },
  messageText: {
    flex: 1,
    color: '#222f3e',
    fontSize: 18
  }
})
