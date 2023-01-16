import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#555555',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  participantName: {
    flex: 1,
    fontSize: 16,
    color: '#eeeeee',
    marginLeft: 16,
  },
  buttonDanger: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#fc3167',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#ffffff',
  },
})