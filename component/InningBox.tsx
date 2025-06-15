import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const getInningInfo = ({ away, home }: { away; home }) => {
  const inning = away.innings.length;
  const gameInningInfo = Array.from({ length: inning + 1 }).map((_, i) => ({
    inning: i === 0 ? '' : i,
    homeScore: i === 0 ? home.name.split(' ')[0] : home.innings[i - 1],
    awayScore: i === 0 ? away.name.split(' ')[0] : away.innings[i - 1],
  }));

  gameInningInfo.push({
    inning: 'R',
    awayScore: away.score,
    homeScore: home.score,
  });

  gameInningInfo.push({
    inning: 'H',
    awayScore: away.hits,
    homeScore: home.hits,
  });

  gameInningInfo.push({
    inning: 'E',
    awayScore: away.errors,
    homeScore: home.errors,
  });

  gameInningInfo.push({
    inning: 'B',
    awayScore: away.baseOnBalls,
    homeScore: home.baseOnBalls,
  });

  return gameInningInfo;
};

const InningBox = (props: { away; home }) => {
  const inningInfo = getInningInfo({ away: props.away, home: props.home });
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 6,
        borderTopColor: '#E5E8EB',
        borderBottomColor: '#E5E8EB',
        borderTopWidth: 1,
        borderBottomWidth: 1,
      }}
    >
      {inningInfo.map((item, index) => (
        <View
          key={index}
          style={{
            paddingTop: 5,
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#FF2400',
            }}
            children={item.inning}
          />
          <View style={{ paddingVertical: 5, gap: 3, alignItems: 'center' }}>
            <Text
              style={{
                fontSize: index === 0 ? 16 : 14,
                ...(index === 0 ? { fontWeight: 'bold' } : {}),
                color: '#0D141C',
              }}
              children={item.awayScore}
            />
            <Text
              style={{
                fontSize: index === 0 ? 16 : 14,
                height: 21,
                ...(index === 0 ? { fontWeight: 'bold' } : {}),
                color: '#0D141C',
              }}
              children={item.homeScore}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default InningBox;

const styles = StyleSheet.create({});
