import { StyleSheet } from 'react-native';

export const aboutScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black'
  },
  authorInfo: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  authorText: {
    fontSize: 18,
    textAlign: 'center',
    color:'black'
  },
  backButton: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
