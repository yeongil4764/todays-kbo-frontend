import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SummaryBox = (props: {
  summary: any;
  awayColor: string;
  homeColor: string;
}) => {
  const summaryList = Object.entries(props.summary).map(([key, value]) => ({
    label: labels[key], // 한글 라벨
    away: value.away,
    home: value.home,
  }));
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 10,
      }}
    >
      {summaryList.map((item, index) => {
        return (
          <SummaryRow
            key={index}
            awayPoint={item.away}
            homePoint={item.home}
            summaryText={item.label}
            awayColor={props.awayColor}
            homeColor={props.homeColor}
          />
        );
      })}
    </View>
  );
};

export default SummaryBox;

const labels = {
  hits: '안타',
  homeRuns: '홈런',
  strikeOuts: '삼진',
  steals: '도루',
  doublePlays: '병살',
  errors: '실책',
};

const styles = StyleSheet.create({
  summaryRowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  summaryTeamPointContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  summaryLabel: {
    color: '#9CA3AF',
  },
});

const SummaryRow = (props: {
  summaryText: string;
  awayPoint: number;
  homePoint: number;
  awayColor: string;
  homeColor: string;
}) => {
  const maxPoint = Math.max(props.awayPoint, props.homePoint);
  const isAccent =
    props.awayPoint > props.homePoint
      ? 'away'
      : props.awayPoint === props.homePoint
        ? 'draw'
        : 'home';

  return (
    <View style={styles.summaryRowContainer}>
      <View style={styles.summaryTeamPointContainer}>
        <Text
          style={{
            width: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            color: isAccent === 'away' ? '#000' : '#9CA3AF',
          }}
          children={props.awayPoint}
        />
        <View
          style={{
            flex: props.awayPoint / maxPoint,
            height: 3,
            backgroundColor: props.awayColor,
          }}
        />
      </View>
      <Text style={styles.summaryLabel} children={props.summaryText} />
      <View style={styles.summaryTeamPointContainer}>
        <View
          style={{
            flex: props.homePoint / maxPoint,
            height: 3,
            backgroundColor: props.homeColor,
          }}
        />
        <Text
          style={{
            width: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            color: isAccent === 'home' ? '#000' : '#9CA3AF',
          }}
          children={props.homePoint}
        />
      </View>
    </View>
  );
};
