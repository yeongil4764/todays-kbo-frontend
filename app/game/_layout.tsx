import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function GameLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerLeft: () => {
            return <View></View>;
          },
          headerShown: false,
        }}
      />
    </Stack>
  );
}
