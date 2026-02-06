import React, { useLayoutEffect, useEffect } from "react";
import { FlatList, Pressable, View, Text, BackHandler } from "react-native";

import ScreenContainer from "../../components/ui/ScreenContainer";
import ProductCard from "../../components/product/ProductCard";
import { PRODUCTS } from "../../data/products";
import { useCart } from "../../hooks/useCart";
import { useTheme } from "../../context/ThemeContext";
import { styles } from "./HomeScreen.styles";

export default function HomeScreen({ navigation }: any) {
  const { dispatch, state } = useCart();
  const { toggleTheme, theme, colors } = useTheme();

  const cartCount = state.items.length;

  /* ---------- HEADER CONFIG ---------- */
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Ken's Shop",
      // Light/Dark Toggle on the Left
      headerLeft: () => (
        <Pressable onPress={toggleTheme} style={[styles.headerBtn, styles.leftBtn]}>
          <Text style={{ fontSize: 20 }}>
            {theme === "light" ? "🌙" : "☀️"}
          </Text>
        </Pressable>
      ),
      // Cart Button on the Right
      headerRight: () => (
        <Pressable 
          onPress={() => navigation.navigate("Cart")} 
          style={[styles.headerBtn, styles.rightBtn]}
        >
          <Text style={{ fontSize: 22 }}>🛒</Text>
          {cartCount > 0 && (
            <View style={[styles.badge, { borderColor: colors.background, backgroundColor: colors.primary }]}>
              <Text style={styles.badgeText}>{cartCount}</Text>
            </View>
          )}
        </Pressable>
      ),
    });
  }, [theme, cartCount, colors, navigation]);

  /* ---------- ANDROID BACK HANDLER ---------- */
  useEffect(() => {
    const sub = BackHandler.addEventListener("hardwareBackPress", () => true);
    return () => sub.remove();
  }, []);

  return (
    <ScreenContainer>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
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
    </ScreenContainer>
  );
}