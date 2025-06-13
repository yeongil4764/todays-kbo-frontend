import { AntDesign } from '@expo/vector-icons';
import { useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { addDays, format, subDays } from 'date-fns';
import { ko } from 'date-fns/locale';
import TeamBox from '../../component/TeamBox';
import { GAME_DATA } from '../../constants/sampleData';
import { useRouter } from 'expo-router';

const ICON_SIZE = 18;

export default function Tab() {
  const router = useRouter();
  const [date, setDate] = useState(new Date());

  const onPressReview = useCallback((gameID: string) => {
    router.push(`/game/${gameID}`);
  }, []);

  const onPressPrevDay = useCallback(() => {
    setDate(subDays(date, 1));
  }, [date]);

  const onPressNextDay = useCallback(() => {
    setDate(addDays(date, 1));
  }, [date]);

  const renderItem = useCallback(({ item, index }) => {
    const isHomeTeamWin = item.homeScore > item.awayScore;
    return (
      <View
        style={{
          height: 120,
          gap: 16,
          paddingHorizontal: 32,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TeamBox teamName={item.homeTeam} isWin={isHomeTeamWin} />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: isHomeTeamWin ? '#2563EB' : '#000',
          }}
          children={item.homeScore}
        />
        <View style={{ gap: 5, width: 80, alignItems: 'center' }}>
          <Text
            style={{ fontSize: 22, fontWeight: 'bold' }}
            children={item.gameEnded ? '종료' : '진행중'}
          />
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => onPressReview(item.id)}
          >
            <Text children={'리뷰'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text children={'하이라이트'} />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: !isHomeTeamWin ? '#2563EB' : '#000',
          }}
          children={item.awayScore}
        />
        <TeamBox teamName={item.awayTeam} isWin={!isHomeTeamWin} />
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ borderRadius: '5%', backgroundColor: '#fff' }}>
        <View style={styles.headerContainer}>
          <View style={styles.headerDateContainer}>
            <Pressable onPress={onPressPrevDay}>
              <AntDesign name="left" size={ICON_SIZE} color={'#0D141C'} />
            </Pressable>
            <Text
              style={styles.dateText}
              children={format(date, 'yy.MM.dd(EEE)', { locale: ko })}
            />
            <AntDesign
              name="calendar"
              size={ICON_SIZE}
              color={'#0D141C'}
              style={{ marginRight: 10 }}
            />
            <Pressable onPress={onPressNextDay}>
              <AntDesign name="right" size={ICON_SIZE} color={'#0D141C'} />
            </Pressable>
          </View>

          <AntDesign name="reload1" size={ICON_SIZE} color={'#0D141C'} />
        </View>
        <FlatList
          style={{ flexGrow: 0 }}
          showsVerticalScrollIndicator={false}
          data={GAME_DATA}
          renderItem={renderItem}
          ItemSeparatorComponent={() => (
            <View style={{ flex: 1, height: 2, backgroundColor: '#EFF2F7' }} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#EFF2F7',
  },
  actionButton: {
    width: '100%',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#EFF2F7',
    borderWidth: 1,
    borderRadius: 13,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    alignItems: 'center',
  },
  headerDateContainer: {
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F141A',
    marginHorizontal: 10,
  },
});
