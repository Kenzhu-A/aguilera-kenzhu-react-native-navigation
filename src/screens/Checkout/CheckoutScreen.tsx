import React from 'react';
import { Alert, Text, View, ScrollView } from 'react-native';
import ScreenContainer from '../../components/ui/ScreenContainer';
import Button from '../../components/ui/Button';
import { useCart } from '../../hooks/useCart';
import { formatCurrency } from '../../utils/currency';
import { useTheme } from '../../context/ThemeContext';
import { styles } from './CheckoutScreen.styles';

export default function CheckoutScreen({ navigation }: any) {
  const { state, dispatch } = useCart();
  const { colors } = useTheme();

  const total = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleCheckout = () => {
    Alert.alert('Success', 'Order placed successfully!', [
      {
        text: 'OK',
        onPress: () => {
          dispatch({ type: 'clearCart' });
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
        },
      },
    ]);
  };

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Order Summary
        </Text>
        
        <View style={[styles.summaryCard, { backgroundColor: colors.card }]}>
          {state.items.map((item) => (
            <View key={item.id} style={styles.itemRow}>
              <Text style={[styles.itemText, { color: colors.textSecondary }]}>
                {item.quantity}x {item.name}
              </Text>
              <Text style={[styles.itemText, { color: colors.text, fontWeight: '600' }]}>
                {formatCurrency(item.price * item.quantity)}
              </Text>
            </View>
          ))}
          
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          
          <View style={styles.totalRow}>
            <Text style={[styles.totalLabel, { color: colors.text }]}>
              Total to Pay
            </Text>
            <Text style={[styles.totalAmount, { color: colors.primary }]}>
              {formatCurrency(total)}
            </Text>
          </View>
        </View>

        <Button 
          title="Confirm & Pay" 
          onPress={handleCheckout} 
          style={styles.checkoutBtn} 
        />
        
        <Button 
          title="Go Back" 
          onPress={() => navigation.goBack()} 
          style={{ 
            backgroundColor: 'transparent', 
            marginTop: 10,
            borderWidth: 1,
            borderColor: colors.border
          }} 
        />
      </ScrollView>
    </ScreenContainer>
  );
}