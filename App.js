import { Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import ytdl from "react-native-ytdl"

export default function App() {
  const [uri, setUri] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function teste() {
      const youtubeURL = 'https://www.youtube.com/watch?v=9Co2T3hZ4qI';
      const urls = await ytdl(youtubeURL);
      setUri(urls[0].url)
      console.log(urls);
      setLoading(false)
    }
    teste()
  }, [])

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Carregando</Text>
      ) : (
        <Video
          source={{ uri }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          useNativeControls
          style={{ width: 300, height: 300 }}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
