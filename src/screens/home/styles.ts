import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#3b3b3b',
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#eeeeee',
    marginTop: 24,
  },
  eventDate: {
    fontSize: 16,
    color: '#888888',
  },
  eventInput: {
    flex: 1,
    height: 56,
    marginRight: 12,
    backgroundColor: '#555555',
    borderRadius: 6,
    padding: 16,
    fontSize: 16,
    color: '#eeeeee',
  },
  buttonSuccess: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#31fc67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#ffffff',
  },
  formParticipant: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 24,
  },
  listEmptyText: {
    fontSize: 16,
    color: '#eeeeee',
    textAlign: 'center',
  },
});