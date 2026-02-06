import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import Button from '../ui/Button';
import { Product } from '../../types/product';
import { formatCurrency } from '../../utils/currency';
import { useTheme } from '../../context/ThemeContext';

interface Props {
  product: Product;
  onAdd: () => void;
}

export default function ProductCard({ product, onAdd }: Props) {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Image source={{ uri: product.image }} style={styles.img} />

      <Text numberOfLines={2} style={[styles.name, { color: colors.text }]}>
        {product.name}
      </Text>

      <Text style={[styles.price, { color: colors.primary }]}>
        {formatCurrency(product.price)}
      </Text>

      <Button title="Add" onPress={onAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 12,
    margin: 6,
    // Add these for better dark mode card visibility
    borderWidth: 1,
    borderColor: 'transparent', // Will stay transparent in light
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  img: {
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },

  name: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },

  price: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
});
