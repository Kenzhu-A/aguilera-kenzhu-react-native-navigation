import React, { useLayoutEffect, useEffect } from 'react';
import { FlatList, Pressable, View, Text, BackHandler } from 'react-native';
import ScreenContainer from '../../components/ui/ScreenContainer';
import ProductCard from '../../components/product/ProductCard';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../hooks/useCart';
import { useTheme } from '../../context/ThemeContext';
import { styles } from './HomeScreen.styles';

export default function HomeScreen({ navigation }: any) {
  const { dispatch, state } = useCart();
  const { toggleTheme, theme, colors } = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={toggleTheme} style={styles.toggleBtn}>
          <Text style={{ fontSize: 20 }}>{theme === 'light' ? '🌙' : '☀️'}</Text>
        </Pressable>
      ),
    });
  }, [theme, navigation]);

  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (navigation.isFocused()) return true; 
      return false;
    });
    return () => sub.remove();
  }, [navigation]);

  return (
    <ScreenContainer>
      <FlatList
        data={PRODUCTS}
        keyExtractor={i => i.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onAdd={() => dispatch({ type: 'addItem', payload: item })}
          />
        )}
      />

      <Pressable
        style={[styles.fab, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.fabText}>🛒</Text>
        {state.items.length > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{state.items.length}</Text>
          </View>
        )}
      </Pressable>
    </ScreenContainer>
  );
}