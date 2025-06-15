import { Image, StyleSheet, Text, View } from 'react-native';
import React, { JSX } from 'react';
export const getTeamImage = (teamName: string): JSX.Element => {
  let logo;
  switch (teamName) {
    case '롯데 자이언츠':
      logo = require('../assets/lotte.png');
      break;
    case '삼성 라이온즈':
      logo = require('../assets/samsung.png');
      break;
    case '키움 히어로즈':
      logo = require('../assets/kiwoom.png');
      break;
    case '두산 베어스':
      logo = require('../assets/doosan.png');
      break;
    case 'LG 트윈스':
      logo = require('../assets/lg.png');
      break;
    case 'SSG 랜더스':
      logo = require('../assets/ssg.png');
      break;
    case '한화 이글스':
      logo = require('../assets/hanwha.png');
      break;
    case 'KT 위즈':
      logo = require('../assets/kt.png');
      break;
    case 'NC 다이노스':
      logo = require('../assets/nc.png');
      break;
    case 'KIA 타이거즈':
      logo = require('../assets/kia.png');
      break;
    default:
      logo = undefined;
  }

  return (
    <Image
      style={{ height: 40, width: 40 }}
      source={logo}
      resizeMode="contain"
    />
  );
};

const TeamBox = (props: { teamName: string; isWin?: boolean }) => {
  const logo = getTeamImage(props.teamName);

  return (
    <View style={{ alignItems: 'center', gap: 5 }}>
      {logo}
      <Text
        style={{
          color: props.isWin ? '#2563EB' : '#DC2626',
          fontSize: 14,
          fontWeight: 'bold',
        }}
        children={props.isWin ? '승리' : '패배'}
      />
    </View>
  );
};

export default TeamBox;

const styles = StyleSheet.create({});
