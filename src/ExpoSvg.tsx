import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import tw from 'twrnc';
type Day = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
interface Props {
  steps: { earning: number; label: Day }[];
}

const width = Dimensions.get('window').width;

const GRAPH_BAR_WIDTH = 40;
const GRAPH_MARGIN = 25;

const CanvasHeight = 212;
const CanvasWidth = width;
const graphHeight = CanvasHeight - 2 * GRAPH_MARGIN;

const ExpoSvg = ({ steps }: Props) => {
  return (
    <View style={tw`items-center justify-center`}>
      <Svg height={CanvasHeight} width={CanvasWidth} viewBox="38 -48 210 210">
        {steps.map((step, index) => (
          <Rect
            key={index}
            x={index * GRAPH_BAR_WIDTH * 1.25}
            y={graphHeight}
            width={GRAPH_BAR_WIDTH}
            height={-step.earning}
            fill="#04825C"
          />
        ))}
      </Svg>
      <View
        style={{
          flexDirection: 'row',
          width: '88%',
          justifyContent: 'space-between',
        }}>
        {steps.map((step, index) => (
          <View key={index} style={{ borderTopWidth: 2, marginTop: '1.5%' }}>
            <Text
              key={index}
              style={{
                textAlign: 'center',
                flexDirection: 'row',
                width: GRAPH_BAR_WIDTH,
                //   backgroundColor: 'red',
              }}>
              {step.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};
export default ExpoSvg;
