import React, { useReducer } from 'react';
import { View } from 'react-native';
import tw from 'twrnc'
import LocationNamesCard from './LocationNamesCard';
import MapMain from './MapMain';
import PickAndDropInput from './PickAndDropInput';
import * as IMAGES from './config/images'
import * as COLORS from './config/colors'
import BottomModal from './BottomModel';
import VehicleWithFareCard from './VehicleWithFareCard';
import SuggaaImageButton from './SuggaaImageButton';
import SuggaButton from './SuggaButton';

const SEARCH = [tw`absolute w-full p-2`]


type FocusLocation = {
    lat: number,
    lng: number
}

export function BookingScreen() {

    const initialState = {
        showModal: true,
        address: "",
        pickUp: {} as FocusLocation,
        drop: {} as FocusLocation,
        suggestedAddresses: []
    }

    function reducer(state: typeof initialState, action: { type: string; payload: any }) {
        const { type, payload } = action;
        return { ...state, [type]: payload };
    }
    const [state, dispatch] = useReducer(reducer, initialState);




    return (
        <View style={{ flex: 1 }}>

            {state.showModal && <BottomModal showModal={state.showModal} height={'80%'} onClose={() => dispatch({ type: 'showModal', payload: false })}>
                <VehicleWithFareCard vehicleType='HATCH' duration={"0"} fare={120} onPress={() => alert('onPress')} />
                <VehicleWithFareCard vehicleType='SEDAN' duration={"0"} fare={100} onPress={() => alert('onPress')} />
                <VehicleWithFareCard vehicleType='RICKSHAW' duration={"0"} fare={90} onPress={() => alert('onPress')} />
                <VehicleWithFareCard vehicleType='BIKE' duration={"0"} fare={80} onPress={() => alert('onPress')} />
                <VehicleWithFareCard vehicleType='SCOOTER' duration={"0"} fare={70} onPress={() => alert('onPress')} />

                <View style={tw`flex-row mt-8.25`}>
                    <SuggaaImageButton imageId={IMAGES.COUPON} buttonType="BORDER" text='Coupon' onPress={() => alert('here')} />
                    <View style={tw`w-5`} />
                    <SuggaaImageButton imageId={IMAGES.CASH} buttonType="BORDER" text='Cash' onPress={() => alert('here')} />
                </View>
                <View style={tw`h-5`} />

                <SuggaButton buttonType='FILLED' text='Book Mini' onPress={() => alert('here')} />

            </BottomModal>
            }
            <SuggaButton buttonType='FILLED' text='Booking Modal' onPress={() => dispatch({ type: 'showModal', payload: true })} />

        </View>
    )
}