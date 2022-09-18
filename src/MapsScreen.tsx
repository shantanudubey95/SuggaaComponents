import React, { useEffect, useReducer } from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import LocationNamesCard from './LocationNamesCard';
import MapMain from './MapMain';
import PickAndDropInput from './PickAndDropInput';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';
const SEARCH = [tw`absolute w-full p-2`];

type FocusLocation = {
  lat: number;
  lng: number;
};

export default () => {
  const initialState = {
    address: '',
    pickUp: {} as FocusLocation,
    drop: {} as FocusLocation,
    suggestedAddresses: [],
  };

  function reducer(state: typeof initialState, action: { type: string; payload: any }) {
    const { type, payload } = action;
    return { ...state, [type]: payload };
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.address) {
      fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${state.address}&key=AIzaSyBYkVZ398sQrKfkKccdpRPe_dA57lD3y3w`
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: 'suggestedAddresses', payload: [...data?.predictions] });
        })
        .catch((error) => {});
    } else dispatch({ type: 'suggestedAddresses', payload: [] });
  }, [state.address]);

  function getCoordinate(placeId: string) {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=AIzaSyBYkVZ398sQrKfkKccdpRPe_dA57lD3y3w`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'pickUp', payload: { ...data?.results[0]?.geometry?.location } });
        dispatch({ type: 'suggestedAddresses', payload: [] });
      })
      .catch((error) => {});
  }

  return (
    <View style={{ flex: 1 }}>
      <MapMain
        pickUp={state.pickUp && { latitude: state.pickUp?.lat, longitude: state.pickUp?.lng }}
      />
      <View style={SEARCH}>
        <PickAndDropInput
          inputText={state.address}
          inputTitle="Pickup"
          clearInput={() => (
            dispatch({ type: 'suggestedAddresses', payload: [] }),
            dispatch({ type: 'address', payload: '' })
          )}
          onValueChange={(inputText) => dispatch({ type: 'address', payload: inputText })}
        />
        <View style={tw`h-1`} />
        {state.suggestedAddresses.map((address) => {
          return (
            <View style={tw`bg-[${COLORS.WHITE}]`}>
              <LocationNamesCard
                onPress={() => (
                  dispatch({ type: 'address', payload: address?.structured_formatting?.main_text }),
                  getCoordinate(address?.place_id)
                )}
                imageId={IMAGES.MARKER_ICON}
                AddressTitle={address?.structured_formatting?.main_text}
                AddressFull={address?.description}
                distance={10}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};
