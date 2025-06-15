import { StyleSheet, Text, View } from 'react-native';
import React, { JSX } from 'react';
import { TOP_BAR_HEIGHT } from '../../constants/layout';

const KboTopBar = (props: { leftComponent: JSX.Element; title?: string }) => {
  return (
    <View
      style={{
        height: TOP_BAR_HEIGHT,
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        // ...topBarShadow,
      }}
    >
      {props.leftComponent && props.leftComponent}
      {props.title && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: 'bold' }}
            children={props.title}
          />
        </View>
      )}
    </View>
  );
};

export default KboTopBar;

const styles = StyleSheet.create({});
