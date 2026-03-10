import { StyleSheet, Text, View } from 'react-native';
import { Header } from '@/components';

export default function Index() {
  return (
    <View style={styles.center}>
      <Header title="Timeline" subtitle="Manage your events" />
      <Text>This is a test message!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
});
