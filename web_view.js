import React, { Component } from 'react'
import { View, WebView, StyleSheet, StatusBar } from 'react-native'
const WebViewExample = () => {
   return (
      <View>
         <StatusBar 
               backgroundColor="#b3e6ff" 
               barStyle="light-content" 
               hidden = {false}    
               translucent = {true}  />
         <View style = {styles.container}>
            <WebView
            source = {{ uri: 'http://myfeed.in/' }}
            />
         </View>
      </View>
      
   )
}
export default WebViewExample;

const styles = StyleSheet.create({
   container: {
      height: '100%',
      paddingTop: 30,
      paddingBottom:0,
      backgroundColor: '#fcb11e'
   }
})