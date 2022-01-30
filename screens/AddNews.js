import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import Yup from "yup"
import { launchCamera,launchImageLibrary } from 'react-native-image-picker';

const AddNews = () => {




  let schema = {
    author: Yup.string()
      .min(3, 'Author name must be more than 3 characters')
      .required(),
    body: Yup.string()
      .min(50, 'The news must be more than 50 characters')
      .required(),
    title: Yup.string().min(3, 'News title must be more than 3 characters'),
    image:Yup.array()
    
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="" barStyle='light-content' />
      
      <ScrollView>
        <Formik
          initialValues={{
            author:"",
            title: "",
            body: "",
            images:[]
        
          }}
      
validationSchema={schema}
          
          onSubmit={() => {
            
          }}
        >
          
          {({ handleChange, handleSubmit }) => (<>
          
          <Text>Title</Text>
        <TextInput
        onChangeText={handleChange}
            value={values.title}
        /></>)}
        </Formik>
        

        
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNews;

const styles = StyleSheet.create({});
