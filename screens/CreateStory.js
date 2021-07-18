import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView
} from "react-native";

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'

import { RFValue } from "react-native-responsive-fontsize";

import DropDownPicker from "react-native-dropdown-picker"
let customFonts = {'BubblegumSans':require('../assets/fonts/BubblegumSans-Regular.ttf')}
export default class CreateStory extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={fontsLoaded:false,
      previewImage:"image_1",
       dropdownHeight: 40}
  }

  async _loadFontsAsync()
  {
    await Font.loadAsync(customFonts)
    this.setState({
      fontsLoaded:true
    })
  }



  componentDidMount()
  {
    this._loadFontsAsync()
  }
  render()
  {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } 
    else {
      let preview_images=
      {
        "image_1":require("../assets/story_image_1.png"),
        "image_2":require("../assets/story_image_2.png"),
        "image_3":require("../assets/story_image_3.png"),
        "image_4":require("../assets/story_image_4.png"),
        "image_5":require("../assets/story_image_5.png"),
      }
      return (
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
        <View style={styles.appIcon}>
        <Image source={require("../assets/logo.png")} style={{ width: 60,
        height: 60, resizeMode: 'contain', marginLeft: 10 }}></Image>
        </View>
        <View style={styles.appTitleTextContainer}>
        <Text style={styles.appTitleText}>
        New Story
        </Text>
        </View>
        </View>
        <ScrollView style={styles.fieldsContainer}>
        <View style={styles.imageContainer}>
        <View style={styles.previewContainer}>
        <Image source={preview_images[this.state.previewImage]}
        style={{ resizeMode: "contain", width: Dimensions.get('window').width - 40, height:
        250, borderRadius: 10, marginBottom: 10 }}></Image>
        </View>
        
        <View style={styles.previewImage}>
        <DropDownPicker
        items={[
        { label: 'Image 1', value: 'image_1' },
        { label: 'Image 2', value: 'image_2' },
        { label: 'Image 3', value: 'image_3' },
        { label: 'Image 4', value: 'image_4' },
        { label: 'Image 5', value: 'image_5' }
        ]}
        defaultValue={this.state.previewImage}
        containerStyle={{ height: 40, borderRadius: 20, marginBottom:
        10 }}
 onOpen={() => {
                    this.setState({ dropdownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 40 });
                  }}
        style={{ backgroundColor: 'transparent' }}
        itemStyle={{
        justifyContent: 'flex-start'
        }}
        dropDownStyle={{ backgroundColor: '#2f345d' }}
        labelStyle={{ color: "white", fontFamily: "Bubblegum-Sans" }}
        arrowStyle={{ color: "white", fontFamily: "Bubblegum-Sans" }}
        onChangeItem={item => this.setState({
        previewImage: item.value
        })}
        />
        </View>
        </View>
        </ScrollView>
        </View>
        )}

  }
;
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#15193c"
  },
  droidSafeArea: {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
  flex: 0.07,
  flexDirection: "row"
  },
  appIcon: {
  flex: 0.3,
  justifyContent: "center",
  alignItems: "center"
  },
  appTitleTextContainer: {
  flex: 0.7,
  justifyContent: "center"
},
appTitleText: {
color: "white",
fontSize: RFValue(28),
fontFamily: "Bubblegum-Sans"
},
fieldsContainer: {
flex: 0.85
},
 previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
});