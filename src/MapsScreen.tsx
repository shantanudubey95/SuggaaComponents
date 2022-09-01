import React, { useEffect, useState } from 'react';
import { View, TextInput, Dimensions, SafeAreaView, TextStyle } from 'react-native';
import tw from 'twrnc'
import LocationNamesCard from './LocationNamesCard';
import MapMain from './MapMain';
import PickAndDropInput from './PickAndDropInput';
import * as IMAGES from './config/images'

// const SEARCH: TextStyle = {
//   borderColor: 'white',
//   margin: 20,
//   top: 20,
// }

const SEARCH = [tw`absolute w-full p-2`]
// const SEARCH = [tw`bg-stone-900  text-white h-10 absolute m-5 border-white self-center px-5 w-11/12`]


type FocusLocation = {
    lat: number,
    lng: number
}

export default () => {

    const [address, setAddress] = useState("")
    const [focusLocation, setFoucsLocation] = useState<FocusLocation>({ lat: 12.91104, lng: 77.5116113 })
    const [suggestedAddresses, setSuggestedAddresses] = useState([])


    useEffect(() => {
        if (address) {
            fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=AIzaSyBYkVZ398sQrKfkKccdpRPe_dA57lD3y3w`)
                .then((response) => response.json())
                .then((data) => {
                    // setFoucsLocation({ ...data?.results[0]?.geometry?.location })
                    console.log(data)
                    setSuggestedAddresses([...data?.predictions])
                })
                .catch((error) => console.log(error))
        }

    }, [address])

    return (
        <View style={{ flex: 1 }}>

            <MapMain location={focusLocation && { latitude: focusLocation.lat, longitude: focusLocation.lng }} />
            {/* < TextInput selectionColor={'white'} placeholderTextColor={"white"} style={SEARCH} placeholder='Search any place' onEndEditing={(event) => setAddress(event.nativeEvent.text)} /> */}
            <View style={SEARCH}>
                <PickAndDropInput inputText={address} inputTitle='Pickup' clearInput={() => (setSuggestedAddresses([]), setAddress(''))} onValueChange={setAddress} />
                {suggestedAddresses.map((address) => {
                    return (
                        <View style={tw`my-1`} >
                            <LocationNamesCard imageId={IMAGES.MARKER_ICON} AddressTitle={address?.structured_formatting?.main_text} AddressFull={address?.description} distance={10} />
                        </View>
                    )
                })}

            </View>
        </View>
    )
}