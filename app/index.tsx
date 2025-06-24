import { View, StyleSheet, Dimensions, Text, Pressable } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import HomePage from '@features/home/components/HomePage';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useMemo, useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import TeamPage from '@features/home/components/TeamPage';
import RankingPage from '@features/home/components/RankingPage';
import CommunityPage from '@features/home/components/CommunityPage';
import { TOP_BAR_HEIGHT } from '@constants/layout';
import KboTopBar from '@components/KboTopBar';

const { width, height } = Dimensions.get('window');

const bottomBarShadow = {
  shadowOffset: { width: 0, height: -5 }, // 그림자가 위로!
  shadowOpacity: 0.08,
  shadowRadius: 4,
  shadowColor: '#000',
  elevation: 8,
};

const pages = [
  {
    iconName: 'home-outline',
    iconText: '홈',
  },
  {
    iconName: 'baseball-outline',
    iconText: '팀',
  },
  {
    iconName: 'trophy-outline',
    iconText: '순위',
  },
  {
    iconName: 'people-outline',
    iconText: '커뮤니티',
  },
];

export default function Index() {
  const insets = useSafeAreaInsets();
  const bottomBar = 100 - insets.bottom;

  const [selectedIndex, setSelectedIndex] = useState(0);

  const carouselRef = useRef<ICarouselInstance>(null);

  const carouselHeight = useMemo(
    () => height - TOP_BAR_HEIGHT - bottomBar - insets.top - insets.bottom,
    [insets],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: '#EFF2F7' }}>
        <KboTopBar
          leftComponent={
            <Text
              style={{ fontSize: 18, fontWeight: 'bold' }}
              children={'오늘의 야구'}
            />
          }
        />
        <Carousel
          ref={carouselRef}
          loop={false}
          autoPlay={false}
          pagingEnabled
          width={width}
          height={carouselHeight}
          data={pages}
          scrollAnimationDuration={300}
          onConfigurePanGesture={gesture => {
            if (selectedIndex === 0) {
              gesture.failOffsetX([-1000, 0]);
            } else if (selectedIndex === pages.length - 1) {
              gesture.failOffsetX([0, 1000]);
            }
          }}
          onSnapToItem={index => setSelectedIndex(index)}
          renderItem={({ index }) => {
            switch (index) {
              case 0:
                return <HomePage height={carouselHeight} />;
              case 1:
                return <TeamPage />;
              case 2:
                return <RankingPage />;
              case 3:
                return <CommunityPage />;
              default:
                return <></>;
            }
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            height: bottomBar,
            backgroundColor: '#fff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            ...bottomBarShadow,
          }}
        >
          {pages.map((item, index) => (
            <Pressable
              key={index}
              style={{ alignItems: 'center' }}
              onPress={() => {
                setSelectedIndex(index);
                carouselRef.current?.scrollTo({ index });
              }}
            >
              <Ionicons
                name={item.iconName as any}
                size={28}
                color={index !== selectedIndex ? '#000' : '#ff6085'}
              />
              <Text
                style={{ color: index !== selectedIndex ? '#000' : '#ff6085' }}
                children={item.iconText}
              />
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
