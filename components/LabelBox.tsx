import { StyleSheet, Text, View } from 'react-native';
import React, { JSX } from 'react';

const LabelBox = (props: { flex: number; label: string; box: JSX.Element }) => {
  return (
    <View style={{ flex: props.flex }}>
      <View
        style={{
          paddingVertical: 5,
          borderBottomWidth: 1,
          borderBottomColor: '#000',
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{props.label}</Text>
      </View>
      {props.box && props.box}
    </View>
  );
};

export default LabelBox;

const styles = StyleSheet.create({});
