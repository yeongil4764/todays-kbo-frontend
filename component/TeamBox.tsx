import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
export const getTeamImage = (
  teamName: string,
): ImageSourcePropType | undefined => {
  switch (teamName) {
    case '롯데 자이언츠':
      return require('../assets/lotte.png');
    case '삼성 라이온즈':
      return require('../assets/samsung.png');
    case '키움 히어로즈':
      return require('../assets/kiwoom.png');
    case '두산 베어스':
      return require('../assets/doosan.png');
    case 'LG 트윈스':
      return require('../assets/lg.png');
    case 'SSG 랜더스':
      return require('../assets/ssg.png');
    case '한화 이글스':
      return require('../assets/hanwha.png');
    case 'KT 위즈':
      return require('../assets/kt.png');
    case 'NC 다이노스':
      return require('../assets/nc.png');
    case 'KIA 타이거즈':
      return require('../assets/kia.png');
    default:
      return undefined;
  }
};

const TeamBox = (props: { teamName: string; isWin?: boolean }) => {
  const logo = getTeamImage(props.teamName);
  return (
    <View style={{ alignItems: 'center', gap: 5 }}>
      <Image
        style={{ height: 40, width: 40 }}
        source={logo}
        resizeMode="contain"
      />
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
