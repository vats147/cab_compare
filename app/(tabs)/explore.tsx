import { Image, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview'; // Import WebView
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.webViewContainer}>
    <WebView
    source={{ uri: 'https://m.uber.com/go/home' }}
    style={styles.webView}
  />
  </ThemedView>

    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  webViewContainer: {
    paddingTop:20,
    height: 780, // Adjust height based on your needs
    marginVertical: 16,
  },
  webView: {
    flex: 1,
  },
});
