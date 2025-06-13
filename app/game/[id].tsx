import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function GameDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>경기 상세 페이지입니다: {id}</Text>
    </View>
  );
}
