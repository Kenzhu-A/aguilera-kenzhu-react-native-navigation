import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import ScreenContainer from '../../components/ui/ScreenContainer';
import QuantityStepper from '../../components/ui/QuantityStepper';
import Button from '../../components/ui/Button';
import { useCart } from '../../hooks/useCart';
import { formatCurrency } from '../../utils/currency';
import { useTheme } from '../../context/ThemeContext';
// Import the separated styles
import { styles } from './CartScreen.styles';

export default function CartScreen({ navigation }: any) {
  const { state, dispatch } = useCart();
  const { colors } = useTheme();

  const total = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (state.items.length === 0) {
    return (
      <ScreenContainer>
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
            Your cart is empty
          </Text>
          <Button 
            title="Go Shopping" 
            onPress={() => navigation.navigate('Home')} 
            style={{ width: '60%', marginTop: 20 }} 
          />
        </View>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <FlatList
        data={state.items}
        keyExtractor={i => i.id}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={[styles.row, { backgroundColor: colors.card }]}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={[styles.itemName, { color: colors.text }]}>
                {item.name}
              </Text>
              <Text style={{ color: colors.primary, fontWeight: '700' }}>
                {formatCurrency(item.price)}
              </Text>
            </View>

            <QuantityStepper
              value={item.quantity}
              onIncrease={() => dispatch({ type: 'increaseQty', payload: item.id })}
              onDecrease={() => dispatch({ type: 'decreaseQty', payload: item.id })}
            />
          </View>
        )}
      />

      <View 
        style={[
          styles.footer, 
          { 
            backgroundColor: colors.card, 
            borderTopColor: colors.border 
          }
        ]}
      >
        <View>
           <Text style={[styles.totalLabel, { color: colors.textSecondary }]}>
             Total Amount
           </Text>
           <Text style={[styles.totalPrice, { color: colors.text }]}>
             {formatCurrency(total)}
           </Text>
        </View>
        <Button
          title="Checkout"
          onPress={() => navigation.navigate('Checkout')}
          style={{ flex: 1, marginLeft: 20 }}
        />
      </View>
    </ScreenContainer>
  );
}