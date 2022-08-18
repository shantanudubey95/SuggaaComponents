import { View, Text, LayoutChangeEvent, PixelRatio, } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react';
import tw from 'twrnc';
import { Feather } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

type StepStatus = "active" | "done" | "untouched";

interface Props {
  activeColor: string
  trackColor: string
  progress: number
  steps: { label: string; status: StepStatus }[] | { status: StepStatus }[]
}
type StepStatusColor = {
  [key in StepStatus]: string;
}

const stepStatusColor: StepStatusColor = {
  "active": "#04825C",
  "done": "#04825C",
  "untouched": "#FFFFFF"
}

// const TRACK_HEIGHT = 4;

export default function ProgressAnimation({ activeColor, trackColor, progress: _progress, steps }: Props) {
  const [trackLayout, setTrackLayout] = useState({ x: 0, y: 14, width: 0 })
  const progress = useSharedValue(0);
  const progressAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(progress.value * (trackLayout.width - 28) / 100, { duration: 500 })
    }
  }, [trackLayout.width])

  useEffect(() => {
    progress.value = _progress
  }, [_progress])
  // console.log("trackLayout", trackLayout.width)

  const onStepCircleLayout = useCallback((index: number, tag: "circle" | "circleBox" | "mainView") => (event: LayoutChangeEvent) => {
    const { layout } = event.nativeEvent;
    if (tag === "mainView") {
      setTrackLayout(value => ({ ...value, x: value.x + layout.x }))
    }
    if (index === 0) {
      setTrackLayout(value => ({ ...value, x: value.x + layout.x }))
    }
    if (index === steps.length - 1 && tag === "circleBox") {
      setTrackLayout(value => ({ ...value, width: value.width + layout.x }))
    }
  }, [])
  return (
    <View style={tw`w-full mt-10 justify-center px-4`}>

      <View style={[tw`absolute justify-center`, { width: trackLayout.width - 28, left: trackLayout.x + 27, top: trackLayout.y }]}>
        <View style={[tw`h-1 bg-[${trackColor}] absolute`, { width: trackLayout.width - 28 }]} />
        <Animated.View style={[tw`h-1 bg-[${activeColor}] absolute rounded`, progressAnimatedStyle]} />
      </View>
      <View style={tw`flex-row justify-between`} onLayout={onStepCircleLayout(-1, "mainView")}>
        {
          steps.map((step, index) => (
            <View key={`ProgressSteps-${index}`} style={tw`items-center`} onLayout={onStepCircleLayout(index, "circleBox")}>
              <View style={tw`h-7 w-7 border-${step.status === "untouched" ? "2" : "0"} rounded-full  bg-[${stepStatusColor[step.status]}] border-[${activeColor}] justify-center items-center `} onLayout={onStepCircleLayout(index, "circle")}>
                {
                  step.status === "done" ? <Feather name="check" size={20} color="white" /> : null
                }
                {
                  step.status === "active" ? <Text style={tw`text-white text-xs font-bold `}>{index + 1}</Text> : null
                }
              </View>
              {
                "label" in step ?
                  <Text style={tw`text-[#04825C] font-bold mt-3.5 text-xs`}>{step.label}</Text> :
                  null

              }
            </View>
          ))
        }
      </View>
    </View>
  )
}