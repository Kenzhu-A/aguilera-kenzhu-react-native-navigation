import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

interface Props {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantityStepper({ value, onIncrease, onDecrease }: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Pressable 
        onPress={onDecrease} 
        style={[styles.btn, { borderColor: colors.border }]}
      >
        <Text style={{ color: colors.text, fontWeight: 'bold' }}>-</Text>
      </Pressable>

      <Text style={[styles.qty, { color: colors.text }]}>{value}</Text>

      <Pressable 
        onPress={onIncrease} 
        style={[styles.btn, { borderColor: colors.border }]}
      >
        <Text style={{ color: colors.text, fontWeight: 'bold' }}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  btn: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    minWidth: 32,
    alignItems: 'center',
  },
  qty: { marginHorizontal: 10, fontWeight: '600' },
});