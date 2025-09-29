
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Arthur De Andrade</Text>
        <Text style={styles.title}>3° Bimestre</Text>
        <Text style={styles.subtitle}>Recuperação</Text>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  box: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 12,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',   
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,           
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },

});
