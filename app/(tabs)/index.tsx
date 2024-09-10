import { Image, StyleSheet, Platform, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview'; // Import WebView
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
const { height: screenHeight } = Dimensions.get('window');
export default function HomeScreen() {
  return (
    <ThemedView style={styles.webViewContainer}>
    <WebView
    source={{ uri: 'https://book.olacabs.com/' }}
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
    height: screenHeight * 0.3, // Adjust height based on your needs
    marginVertical: 16,
  },
  webView: {
    flex: 1,
  },
});
