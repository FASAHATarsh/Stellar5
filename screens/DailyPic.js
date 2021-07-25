import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  StatusBar,
  SafeAreaView,
  Linking,
  ScrollView,
} from 'react-native';

import axios from 'axios';

export default class DailyPicScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: [],
    };
  }

  componentDidMount() {
    this.getAPOD();
  }

  getAPOD = () => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=COGdtQeIWk1mbziFVQgpfK3JfP4dBSAlQg8imDGw'
      )
      .then((response) => {
        this.setState({ apod: response.data });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  renderImage = (url) => {
    <Image
      source={{ uri: url }}
      style={{
        width: '100%',
        height: 300,
        borderRadius: 20,
        margin: 3,
      }}></Image>;
  };

  renderVideo = () => {
    <TouchableOpacity
      style={styles.listContainer}
      onPress={() => Linking.openURL(this.state.apod.url)}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../assets/play-video.png')}
          style={{ width: 35, height: 35 }}></Image>
      </View>
    </TouchableOpacity>;
  };

  render() {
    const url = this.state.apod.url;
    if (Object.keys(this.state.apod).length === 0) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require('../assets/stars.gif')}
            style={styles.backgroundImage}>
            <View
              style={{
                flex: 0.15,
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              <Text style={styles.routeText}>Todays Fact</Text>
            </View>
            <ScrollView style={styles.listContainer}>
              <TouchableOpacity
                onPress={() => Linking.openURL(this.state.apod.url)}>
                <Image
                  source={{ uri: url }}
                  style={{
                    width: '100%',
                    height: 300,
                    borderRadius: 30,
                  }}></Image>
              </TouchableOpacity>
              <View style={{ padding: 20 }}>
                <Text style={styles.titleText}>{this.state.apod.title}</Text>
                <Text style={styles.explanationText}>
                  {this.state.apod.explanation}
                </Text>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ec63ff',
    textShadowColor: 'violet',
    textShadowOffset: { width: -1, height: 3 },
    textShadowRadius: 20,
    fontFamily: 'lucida grande',
  },
  explanationText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  listContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    flex: 0.8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 30,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
