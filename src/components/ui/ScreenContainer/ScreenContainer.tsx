import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { styles } from './ScreenContainer.styles';

export default function ScreenContainer({ children }: { children: React.ReactNode }) {
  const { colors } = useTheme();

  return (
    <SafeAreaView 
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={['left', 'right', 'bottom']} 
    >
      {/* This View acts as the "shorter" barrier line */}
      <View style={[styles.barrier, { backgroundColor: colors.border }]} />
      
      <View style={styles.content}>
        {children}
      </View>
    </SafeAreaView>
  );
}