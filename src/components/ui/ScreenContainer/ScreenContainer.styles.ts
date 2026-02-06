import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  barrier: {
    height: 1, // This is your clean "line"
    width: '100%',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16, // Move your screen padding here
  }
});