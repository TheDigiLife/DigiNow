import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { EdgeInsets } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, typography } from '@/theme';

export interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header(props: HeaderProps) {
  const { title, subtitle } = props;
  const insets = useSafeAreaInsets();

  const styles = createStyles({ insets });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Ionicons name="menu" size={24} color={colors.textPrimary} />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Ionicons name="add" size={24} color={colors.textPrimary} />
      </TouchableOpacity>
    </View>
  );
}

interface StyleOptions {
  insets: EdgeInsets;
}

function createStyles(options: StyleOptions) {
  const { insets } = options;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 4,
      gap: 4,
      backgroundColor: colors.backgroundSecondary,
      height: 64 + insets.top,
      paddingTop: insets.top,
    },
    titleContainer: {
      flex: 1,
    },
    title: {
      ...typography.h2,
      marginBottom: 4,
    },
    subtitle: {
      ...typography.label,
      textTransform: 'none',
    },
    button: {
      width: 48,
      height: 48,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
