import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  grid: {
    paddingBottom: 20, // Reduced since FAB is gone
    paddingHorizontal: 6,
  },
  headerBtn: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftBtn: {
    marginLeft: 4,
  },
  rightBtn: {
    marginRight: 4,
  },
  /* Header Badge */
  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#EF4444',
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
    borderWidth: 1.5,
  },
  badgeText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: '900',
  },
});