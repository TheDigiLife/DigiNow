import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.center}>
      <Text>This is a test message!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
