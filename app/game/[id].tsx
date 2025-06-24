import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import KboTopBar from '@components/KboTopBar';
import { AntDesign } from '@expo/vector-icons';
import { useCallback } from 'react';
import { GAME_DETAIL_DATA, TEAM_INFO } from '@constants/sampleData';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { getTeamImage } from '@features/home/components/TeamBox';
import InningBox from '@features/game/components/InningBox';
import LabelBox from '@components/LabelBox';
import SummaryBox from '@features/game/components/SummaryBox';

const GameDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const detailData = GAME_DETAIL_DATA[id];

  const awayTeamColor = TEAM_INFO[detailData.teams.away.name];
  const awayTeamName = detailData.teams.away.name;
  const homeTeamColor = TEAM_INFO[detailData.teams.home.name];
  const homeTeamName = detailData.teams.home.name;

  const isResult =
    detailData.teams.away.score > detailData.teams.home.score
      ? 'away'
      : detailData.teams.away.score === detailData.teams.home.score
        ? 'draw'
        : 'home';

  const title =
    format(detailData.date, 'yy.MM.dd(EEE)', { locale: ko }) +
    ' ' +
    detailData.time;

  const onPressGoBack = useCallback(() => {
    router.dismiss();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KboTopBar
        leftComponent={
          <Pressable onPress={onPressGoBack}>
            <AntDesign name="left" size={18} color={'#0D141C'} />
          </Pressable>
        }
        title={title}
      />
      <View style={{ flex: 1, paddingHorizontal: 16, gap: 20 }}>
        <View style={{ paddingVertical: 10 }}>
          <View style={{ flexDirection: 'row', height: 60 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: awayTeamColor,
              }}
            >
              {getTeamImage(awayTeamName)}

              <Text
                style={{
                  fontWeight: 'bold',
                  color: isResult === 'away' ? '#fff' : awayTeamColor,
                }}
                children={'승리'}
              />
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: homeTeamColor,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  color: isResult === 'home' ? '#fff' : homeTeamColor,
                }}
                children={'승리'}
              />
              {getTeamImage(homeTeamName)}
            </View>
          </View>
        </View>
        <InningBox away={detailData.teams.away} home={detailData.teams.home} />
        <PitcherBox
          isResult={isResult}
          away={awayTeamName.split(' ')[0]}
          home={homeTeamName.split(' ')[0]}
          info={detailData.result}
        />
        <LabelBox
          flex={0}
          label="결승타"
          box={<MVPBox mvpInfo={detailData.mvp} />}
        />
        <View style={{ flex: 1 }}>
          <LabelBox
            flex={1}
            label="기록"
            box={
              <SummaryBox
                summary={detailData.summary}
                awayColor={awayTeamColor}
                homeColor={homeTeamColor}
              />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GameDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const PitcherRow = (props: { color: string; text: string; player: string }) => {
  return (
    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
      <View style={{ backgroundColor: props.color, padding: 2 }}>
        <Text style={{ color: '#fff' }} children={props.text} />
      </View>
      <Text style={{ fontWeight: 'bold' }} children={props.player} />
    </View>
  );
};

const MVPBox = (props: { mvpInfo: any }) => {
  return (
    <View style={{ paddingVertical: 10 }}>
      <Text
        style={{ fontWeight: 'bold', fontSize: 17 }}
        children={`${props.mvpInfo.name} (${props.mvpInfo.team})`}
      />
      <Text
        style={{ fontSize: 15, color: '#9CA3AF' }}
        children={`${props.mvpInfo.description}`}
      />
    </View>
  );
};

const PitcherBox = (props: {
  isResult: string;
  away;
  home;
  info: { win; lose; save };
}) => {
  const { away, home, info, isResult } = props;
  console.log('props => ', props);

  return (
    <View
      style={{
        height: 100,
        borderTopColor: '#000',
        borderTopWidth: 1,
        borderBottomColor: '#E5E8EB',
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{
          paddingVertical: 5,
          flexDirection: 'row',
          borderBottomColor: '#E5E8EB',
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            borderRightColor: '#E5E8EB',
            borderRightWidth: 1,
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 18 }} children={away} />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }} children={home} />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{ flex: 1, gap: 8, paddingHorizontal: 16, paddingVertical: 8 }}
        >
          {isResult === 'away' && (
            <PitcherRow color="#DC2626" player={info.win} text={'승'} />
          )}
          {isResult === 'away' && (
            <PitcherRow color="#2563EB" player={info.save} text={'세'} />
          )}
          {isResult === 'home' && (
            <PitcherRow color="#000" player={info.lose} text={'패'} />
          )}
        </View>
        <View
          style={{ flex: 1, gap: 8, paddingHorizontal: 16, paddingVertical: 8 }}
        >
          {isResult === 'home' && (
            <PitcherRow color="#DC2626" player={info.win} text={'승'} />
          )}
          {isResult === 'home' && (
            <PitcherRow color="#2563EB" player={info.save} text={'세'} />
          )}
          {isResult === 'away' && (
            <PitcherRow color="#000" player={info.lose} text={'패'} />
          )}
        </View>
      </View>
    </View>
  );
};
