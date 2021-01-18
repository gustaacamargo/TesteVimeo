import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [uri, setUri] = useState('')

  useEffect(() => {
    const VIDEO_ID = '76979871';
    fetch(`https://player.vimeo.com/video/${VIDEO_ID}/config`)
      .then(res => res.json())
      .then(res => {
        setUri(res.request.files.hls.cdns[res.request.files.hls.default_cdn].url)
        console.log({
          thumbnailUrl: res.video.thumbs['640'],
          videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          video: res.video,
        });
      });
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ height: 250, width: '100%' }}>
        <WebView
          source={{ uri: uri }}
        />
      </View>

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
