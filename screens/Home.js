import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeView} />
        <ImageBackground
          source={require('../assets/bg_img.jpg')}
          style={styles.bg}>
          <View style={styles.titleBar}>
            <Image
              source={require('../assets/main-icon.png')}
              style={styles.title_icon}
            />
            <Text style={styles.titleText}>Stellar</Text>
          </View>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate('SpaceCraft');
            }}>
            <Text style={styles.routeText}>Spacecrafts</Text>

            <Image
              source={require('../assets/space_crafts.png')}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate('StarMap');
            }}>
            <Text style={styles.routeText}>Star Map</Text>

            <Image
              source={require('../assets/star_map.png')}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate('DailyPic');
            }}>
            <Text style={styles.routeText}>Daily Facts</Text>

            <Image
              source={require('../assets/daily_pictures.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBar: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  titleText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: -70,
    marginLeft: 30,
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 30,
    fontFamily: 'lucida grande',
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
    paddingLeft: 30,
    color: '#271338',
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
  },
  icon: {
    position: 'absolute',
    height: 100,
    width: '30%',
    resizeMode: 'contain',
    right: -10,
    top: -15,
  },
  title_icon: {
    position: 'absolute',
    height: 125,
    width: '100%',
    resizeMode: 'contain',
    right: 75,
    top: 15,
  },
});
