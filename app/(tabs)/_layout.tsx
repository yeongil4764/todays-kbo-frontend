import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#2563EB' }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: '오늘의 크보',
          headerTitleStyle: { fontSize: 18, fontWeight: 'bold' },
          title: '홈',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="team"
        options={{
          title: '팀',
          tabBarIcon: ({ color }) => (
            <Ionicons name="baseball-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          title: '순위',
          tabBarIcon: ({ color }) => (
            <Ionicons name="trophy-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: '커뮤니티',
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
