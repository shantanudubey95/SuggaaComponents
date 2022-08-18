import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OTPInputs from './src/OTPInputs';
import AnimatedText from './src/AnimatedText';
import ProgressAnimation from "./src/ProgressAnimation";

export default function App() {
  return (
    <View style={styles.container}>
      <OTPInputs numberOfInputs={4}/>
      <AnimatedText />
      <ProgressAnimation
      activeColor="#04825C"
      trackColor="#04825C40"
      progress={100}
      steps={[
        { status: "done", label: "Personal Details" },
        { status: "untouched", label: "Bank Details" },
        { status: "active", label: "Vehicle Details" }
      ]}

    />
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
  },
});
