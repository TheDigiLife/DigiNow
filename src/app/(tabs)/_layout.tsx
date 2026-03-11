import { Tabs } from 'expo-router';
import { Icon } from 'react-native-paper';
import { NavigationBar } from '@/components';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={NavigationBar}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Timeline',
          tabBarIcon: ({ color }) => (
            <Icon source="timeline-clock" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="focus"
        options={{
          title: 'Focus',
          tabBarIcon: ({ color }) => (
            <Icon source="image-filter-center-focus" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color }) => (
            <Icon source="poll" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <Icon source="cog" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
