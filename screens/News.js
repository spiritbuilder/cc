import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import SliderBox from 'react-native-image-slider-box';
import FastImage from 'react-native-fast-image';

const News = ({route}) => {
  const [width, setWidth] = useState();
  console.log(route.params, 'these are the params');
  let images = route.params.images;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(26, 137, 23, 1)"
      />
      <View
        style={styles.container}
        onLayout={e => {
          setWidth(e.nativeEvent.layout.width);
        }}>
        <ScrollView style={styles.container}>
          <SliderBox
            autoplay
            circleLoop
            ImageComponent={FastImage}
            loaderComponent={<View></View>}
            inactiveDotColor="#90A4AE"
            dotColor="rgba(26, 137, 23, 1)"
            parentWidth={width ? width - 10 : null}
             images={images ? images : [require('../assets/news.jpg')]}
            // onCurrentImagePressed={index => navigate('News', prepData)}
          />
          <View>
            <Text></Text>
            <Text></Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {flex: 1, display: 'flex'},
  scroll: {
    backgroundColor: '#eee',
    width: '100%',
    height: '50%',
  },
  btn: {
    position: 'absolute',
    bottom: 30,
    right: 10,
  },
  iconbutton: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: 'rgba(26, 137, 23, 1)',
    zIndex: 12,
    display: 'flex',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntext: {
    color: '#fff',
  },
  c: {
    alignSelf: 'center',
    fontSize: 18,
  },
  activity: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
});
