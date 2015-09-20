/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var styles = require('./styles/styles.js');


/**
 * For quota reasons we replaced the Rotten Tomatoes' API with a sample data of
 * their very own API that lives in React Native's Github repo.
 */
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

// React Components
var {
  AppRegistry,
  Image,
  ListView,
  Text,
  View
} = React;

var ReactNativeMovies = React.createClass({

  // Set the initial app state
  getInitialState: function(){
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };
  },

  // Fetch data once the component
  // is mount to the dom (Or whatever the
  // native equivalent is)
  componentDidMount: function(){
    this.fetchData();
  },
  fetchData: function(){
    // Use ES6 fetch API
    fetch(REQUEST_URL)

      // ES6 arrow function instead of
      // traditional JS anonymous callback
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true
        });
      })
      .done();
  },
  render: function() {

    // Check if a movie has been set
    if(!this.state.loaded){
      return this.renderLoadingView();
    }

    // Render a list view
    return (
      <ListView 
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}/>
    );
  },

  // Show this view while a movie
  // is loading
  renderLoadingView: function(){
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  },
  renderMovie: function(movie){
    return (
      <View style={styles.container}>
        <Image 
            source={{uri: movie.posters.thumbnail}} 
            style={styles.thumbnail}/>

        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>    
      </View>
    );
  }
});

AppRegistry.registerComponent('ReactNativeMovies', () => ReactNativeMovies);