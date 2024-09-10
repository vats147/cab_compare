import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router'; // Make sure you're using the right `Tabs` component import
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Ola',
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Image
              source={
                focused
                  ? require('@/assets/images/ola-icon.png')
                  : require('@/assets/images/ola-icon.png')
              }
              style={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Uber',
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Image
              source={
                focused
                  ? require('@/assets/images/uber-logo.png')
                  : require('@/assets/images/uber-logo.png')
              }
              style={styles.icon}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
