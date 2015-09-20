var React = require('react-native');

// Movie styles
module.exports = React.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  year: {
    textAlign: 'center'
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  }
});