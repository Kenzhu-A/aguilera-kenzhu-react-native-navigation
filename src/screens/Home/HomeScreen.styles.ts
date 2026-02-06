import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  grid: {
    paddingBottom: 100, // Space for the FAB
    paddingHorizontal: 6,
  },
  toggleBtn: {
    padding: 8,
    marginRight: 4,
  },
  /* FAB (Floating Action Button) */
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  fabText: {
    fontSize: 28,
  },
  /* Notification Badge */
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#EF4444',
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: 'white', // Makes the badge pop against the primary color
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '900',
  },
});