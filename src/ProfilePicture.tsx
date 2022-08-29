import { Canvas, Paint, Path, Skia } from '@shopify/react-native-skia';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { View, Dimensions, Image, TouchableOpacity } from 'react-native';

type Props = {
  defaultImage: number;
  setPickedImage: any;
};

const ProfilePicture = ({ defaultImage, setPickedImage }: Props) => {
  const padding = 40;
  const strokeWidth = 18;
  const screenWidth = Dimensions.get('window').width;
  const viewWidth = screenWidth - 2 * padding;
  const drawWidth = viewWidth - strokeWidth * 2;
  const path = Skia.Path.Make();

  const [image, setImage] = React.useState<string>();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setPickedImage(result.uri);
    }
  };

  path.addArc({ x: strokeWidth, y: strokeWidth, width: drawWidth, height: drawWidth }, 30, 340);
  return (
    <View
      style={{
        margin: padding,
        width: viewWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {image ? (
        <Image
          source={{ uri: image }}
          style={{
            width: drawWidth,
            height: drawWidth,
            borderRadius: drawWidth,
            position: 'absolute',
          }}
        />
      ) : (
        <Image
          source={defaultImage}
          style={{
            height: drawWidth,
            width: drawWidth,
            borderRadius: drawWidth,
            position: 'absolute',
          }}
        />
      )}

      <Canvas style={{ height: viewWidth, width: viewWidth, position: 'absolute' }}>
        <Path path={path} color="transparent">
          <Paint style="stroke" strokeWidth={strokeWidth} strokeCap="round" color="#04825C" />
        </Path>
      </Canvas>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={require('../assets/Edit.png')}
          style={{ height: 80, width: 80, marginTop: 240, marginLeft: 340 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePicture;
