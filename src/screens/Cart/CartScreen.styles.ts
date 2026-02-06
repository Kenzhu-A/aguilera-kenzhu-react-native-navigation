import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: { 
    padding: 12, 
    borderRadius: 14, 
    marginBottom: 12, 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  itemImage: { 
    width: 50, 
    height: 50, 
    borderRadius: 8 
  },
  itemName: { 
    fontWeight: '600', 
    fontSize: 15, 
    marginBottom: 2 
  },
  emptyContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  emptyText: { 
    fontSize: 18 
  },
  footer: {
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0,
    flexDirection: 'row', 
    padding: 20, 
    alignItems: 'center',
    borderTopWidth: 1, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
    // Adds a nice shadow for light mode
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  totalLabel: { 
    fontSize: 12, 
    textTransform: 'uppercase', 
    letterSpacing: 0.5 
  },
  totalPrice: { 
    fontSize: 20, 
    fontWeight: '800' 
  },
});