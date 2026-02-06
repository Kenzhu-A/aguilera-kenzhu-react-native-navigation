import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  sectionTitle: { 
    fontSize: 22, 
    fontWeight: '700', 
    marginBottom: 16 
  },
  summaryCard: { 
    borderRadius: 16, 
    padding: 16, 
    marginBottom: 24,
    // Add a subtle shadow for better depth in Light Mode
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  itemRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 12 
  },
  itemText: { 
    fontSize: 16 
  },
  divider: { 
    height: 1, 
    marginVertical: 12 
  },
  totalRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  totalLabel: { 
    fontSize: 18, 
    fontWeight: '700' 
  },
  totalAmount: { 
    fontSize: 22, 
    fontWeight: '800' 
  },
  checkoutBtn: { 
    marginTop: 10,
    // Add shadow to the primary button to make it look "main"
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  backBtn: {
    marginTop: 12,
    borderWidth: 1.5, // Slightly thicker for better visibility
    height: 52,      // Keep height consistent with the main button
  },
});