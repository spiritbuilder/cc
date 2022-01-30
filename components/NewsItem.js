import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SliderBox} from 'react-native-image-slider-box';
import baseUrl from '../utils/helpers';
import {useNavigation} from '@react-navigation/native';
// import FastImage from 'react-native-fast-image';
import OptimizedImage from './OptimizedImage';

function createImageArray(arr) {
  let imageArr = [];
  for (let i = 0; i < arr.length; i++) {
    imageArr.push(arr[i].image);
  }
  console.log(imageArr);
  return imageArr;
}

export default function NewsItem({data}) {
  const [images, setImages] = useState();
  const [width, setWidth] = useState();
  const prepData = {...data, images: images};
  let {navigate} = useNavigation();
  const fetchImages = async () => {
    try {
      let response = await axios.get(baseUrl + `news/${data.id}/images`);
      prepData.images = response.data;
      setImages(createImageArray(response.data));
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <TouchableWithoutFeedback onPress={() => navigate('News', prepData)}>
      <View
        style={styles.container}
        onLayout={e => {
          setWidth(e.nativeEvent.layout.width);
        }}>
        <SliderBox
          autoplay
          circleLoop
          ImageComponent={data => {
            const {source: {uri} = {}} = data || {};
            return (
              <Image
                source={uri}
                defaultImage={require('../assets/news.jpg')}
                style={[styles.slider, style]}
                resizeMode={resizeMode}
              />
            );
          }}
          loaderComponent={<View></View>}
          inactiveDotColor="#90A4AE"
          dotColor="rgba(26, 137, 23, 1)"
          parentWidth={width ? width - 10 : null}
          images={images ? images : [require('../assets/news.jpg')]}
          onCurrentImagePressed={index => navigate('News', prepData)}
        />
        <Text style={styles.newstitle}>{data.title}</Text>
        <Text>{data.body.slice(0, 70) + '...'}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: '#eee',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    marginVertical: 5,
  },
  newstitle: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
