import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OTPInputs from './src/OTPInputs';
import AnimatedText from './src/AnimatedText';
import ProgressAnimation from "./src/ProgressAnimation";
import DateInput from './src/MaskedText/DateInput';
import tw from 'twrnc'

export default function App() {
  return (
    <View style={styles.container}>
      <OTPInputs numberOfInputs={4} />
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

      <DateInput
        color={"text-green-600"}
        textStyle={[tw`font-bold text-green-600 text-lg text-center tabular-nums`]}
        viewStyle={[tw`flex-row py-4 px-8 rounded-2 items-center border-2 border-green-600`]} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
