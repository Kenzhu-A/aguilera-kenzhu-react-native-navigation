import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  grid: {
    paddingBottom: 20,
    paddingHorizontal: 6,
  },
  headerBtn: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 44, // Ensures a good touch target size
    minHeight: 44,
  },
  leftBtn: {
    marginLeft: 8, // Adjusted for better alignment in the header
  },
  rightBtn: {
    marginRight: 8,
  },
  /* Header Badge */
  badge: {
    position: 'absolute',
    top: 4,     // Adjusted for Feather icon
    right: 4,   // Adjusted for Feather icon
    backgroundColor: '#EF4444',
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
    borderWidth: 1.5,
  },
  badgeText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: '900',
  },
});