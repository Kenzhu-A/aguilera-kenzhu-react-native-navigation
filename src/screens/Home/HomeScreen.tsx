import React, { useLayoutEffect, useEffect } from "react";
import { FlatList, Pressable, View, Text, BackHandler } from "react-native";

import ScreenContainer from "../../components/ui/ScreenContainer";
import ProductCard from "../../components/product/ProductCard";
import { PRODUCTS } from "../../data/products";
import { useCart } from "../../hooks/useCart";
import { useTheme } from "../../context/ThemeContext";
import { styles } from "./HomeScreen.styles";
import { Feather } from "@expo/vector-icons";

export default function HomeScreen({ navigation }: any) {
  const { dispatch, state } = useCart();
  const { toggleTheme, theme, colors } = useTheme();

  const cartCount = state.items.length;

  /* ---------- HEADER CONFIG ---------- */
useLayoutEffect(() => {
  navigation.setOptions({
    title: "Ken's Shop",
    // Light/Dark Toggle on the Left using Feather Icons
    headerLeft: () => (
      <Pressable 
        onPress={toggleTheme} 
        style={({ pressed }) => [
          styles.headerBtn, 
          styles.leftBtn, 
          { opacity: pressed ? 0.5 : 1 } // Simulates TouchableOpacity feel
        ]}
      >
        <Feather 
          name={theme === "light" ? "moon" : "sun"} 
          size={24} 
          color={colors.text} 
        />
      </Pressable>
    ),
    // Cart Button on the Right using Feather Icons
    headerRight: () => (
      <Pressable 
        onPress={() => navigation.navigate("Cart")} 
        style={({ pressed }) => [
          styles.headerBtn, 
          styles.rightBtn,
          { opacity: pressed ? 0.5 : 1 }
        ]}
      >
        <Feather name="shopping-cart" size={24} color={colors.text} />
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