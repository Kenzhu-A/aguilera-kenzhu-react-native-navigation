import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import Button from '../ui/Button/Button';
import { Product } from '../../types/product';
import { formatCurrency } from '../../utils/currency';
import { useTheme } from '../../context/ThemeContext';
import { styles } from './ProductCard.styles';

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

