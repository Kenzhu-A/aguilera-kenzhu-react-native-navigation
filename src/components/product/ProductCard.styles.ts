import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 12,
    margin: 6,
    borderWidth: 1,
    borderColor: 'transparent', 
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