import React from 'react';
import { Text, View, Image } from 'react-native';

type Props = {
  driver_name: string;
  car_number: string;
  car_name: string;
  rating: number;
  driver_image: string;
};

const DriverDetails = (props: Props) => {
  return (
    <>
      <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
        <View
          style={{
            width: '90%',
            height: 37,
            backgroundColor: '#04825C',
            flexDirection: 'row-reverse',
            borderRadius: 5,
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white', fontSize: 22, fontWeight: '600', marginRight: 7 }}>
            {props.driver_name}
          </Text>
        </View>
        <View
          style={{
            width: '70%',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, lineHeight: 22.5, fontWeight: '400' }}>
              {props.rating}
            </Text>
            <Image source={require('../assets/Star.png')} style={{ height: 32, width: 32 }} />
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 18, lineHeight: 27, fontWeight: '600', marginRight: 7 }}>
              {props.car_number}
            </Text>
            <Text style={{ fontSize: 15, lineHeight: 22.5, fontWeight: '600', marginRight: 7 }}>
              {props.car_name}
            </Text>
          </View>
        </View>
      </View>
      <Image
        source={require('../assets/Pic26.png')}
        style={{ height: 91, width: 91, position: 'absolute' }}
      />
    </>
  );
};

export default DriverDetails;
