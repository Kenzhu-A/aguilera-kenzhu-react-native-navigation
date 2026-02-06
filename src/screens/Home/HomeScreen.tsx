import React, { useLayoutEffect, useEffect } from "react";
import { FlatList, Pressable, View, Text, BackHandler } from "react-native";

import ScreenContainer from "../../components/ui/ScreenContainer";
import ProductCard from "../../components/product/ProductCard";
import { PRODUCTS } from "../../data/products";
import { useCart } from "../../hooks/useCart";
import { useTheme } from "../../context/ThemeContext";
// Import the separated styles
import { styles } from "./HomeScreen.styles";

export default function HomeScreen({ navigation }: any) {
  const { dispatch, state } = useCart();
  const { toggleTheme, theme, colors } = useTheme();

  /* ---------- HEADER CONFIG ---------- */
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Kenzhus Shop",
      headerRight: () => (
        <Pressable onPress={toggleTheme} style={styles.toggleBtn}>
          <Text style={{ fontSize: 20 }}>
            {theme === "light" ? "🌙" : "☀️"}
          </Text>
        </Pressable>
      ),
    });
  }, [theme, navigation]);

  /* ---------- ANDROID BACK HANDLER ---------- */
  useEffect(() => {
    const sub = BackHandler.addEventListener(
      "hardwareBackPress",

      () => true,
    );

    return () => sub.remove();
  }, []);

  return (
    <ScreenContainer>
      {/* 2 COLUMN PRODUCT GRID */}
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onAdd={() => dispatch({ type: "addItem", payload: item })}
          />
        )}
      />

      {/* FLOATING CART BUTTON */}
      <Pressable
        style={[styles.fab, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate("Cart")}
      >
        <Text style={styles.fabText}>🛒</Text>

        {state.items.length > 0 && (
          <View style={[styles.badge, { borderColor: colors.card }]}>
            <Text style={styles.badgeText}>{state.items.length}</Text>
          </View>
        )}
      </Pressable>
    </ScreenContainer>
  );
}
