import { useFonts } from 'expo-font';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import tw from 'twrnc';

import AddStopInput from './AddStopInput';
import CurrentLocationButton from './CurrentLocationButton';
import DocumentsRequired from './DocumentsRequired';
import DriverCateogoryCard from './DrvierCategoryCard';
import HamburgerIcon from './HamburgerIcon';
import SearchLocation from './InputSearchLocation';
import LocationNamesCard from './LocationNamesCard';
import PickAndDropInput from './PickAndDropInput';
import RidesCard from './RidesCard';
import SuggaButton from './SuggaButton';
import SuggaCheckBox from './SuggaCheckBox';
import SuggaaDropDown from './SuggaaDropDown';
import * as COLORS from './config/colors';
import * as IMAGES from './config/images';

export default function HomeScreen() {
  const [, setLocationName] = React.useState('');
  const [stop, setStop] = React.useState('');
  const [selectedCheckBox, setSelectedCheckBox] = React.useState('');
  const [selectedDropDownValue, setSelectedDropDownValue] = React.useState('');
  const [driverType, setDriverType] = React.useState('NoVehicle');
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/Poppins-Regular.ttf'),
  });

  return (
    <ScrollView style={tw`w-full`} contentContainerStyle={tw`p-4`}>
      <SearchLocation
        imageId={IMAGES.SEARCH_ICON}
        isEditable={false}
        textStyle={tw`flex-1 mx-4 text-[${COLORS.LIGHT_GRAY_BORDER}] text-3.78`}
        style={tw`h-12 py-3 px-4.5 flex-row  rounded-1.25 items-center self-stretch shadow-md bg-[${COLORS.WHITE}]`}
        placeholder="Search Drop Location"
        onPress={() => alert('Add your fuunction here')}
        onValue={(val) => setLocationName(val)}
      />

      <View style={tw`my-4`} />

      <HamburgerIcon
        ImageId={IMAGES.HAMBURGER_ICON}
        style={tw`p-2 self-start rounded-1.25 bg-[${COLORS.WHITE}] shadow-md`}
        onPress={() => alert('add function here')}
      />

      <View style={tw`my-4`} />

      <CurrentLocationButton
        ImageId={IMAGES.CURENT_LOCATION}
        style={tw`p-2 self-start rounded-1.25 bg-[${COLORS.WHITE}] shadow-md`}
        onPress={() => alert('add function here')}
      />

      <View style={tw`my-4`} />

      <RidesCard
        values={{
          date: new Date(),
          fare: '177',
          vehicleType: 'AUTO',
          location: 'Birsa Munda Airport, Ranchi',
          status: 'COMPLETED',
        }}
        style={tw`flex-row bg-[${COLORS.WHITE}] pl-7 pt-7`}
        viewStyle={`border-b flex-1 ml-7  pb-3.75 pr-5 border-[${COLORS.LIGHT_GRAY_BORDER}] `}
        imageUrl="https://picsum.photos/200/300"
        imageStyle="w-11.65 h-11.65 rounded-11.25"
      />

      <View style={tw`my-4`} />
      <SuggaButton onPress={() => alert('add function here')} text="Button" buttonType="FILLED" />
      <View style={tw`my-2`} />
      <SuggaButton onPress={() => alert('add function here')} text="Button" buttonType="BORDER" />
      <View style={tw`my-2`} />
      <SuggaButton onPress={() => alert('add function here')} text="Button" buttonType="DISABLED" />

      <View style={tw`my-2`} />
      <AddStopInput
        clearInput={() => setStop('')}
        onPress={() => alert('add action here')}
        text={stop}
        onValue={setStop}
      />
      <View style={tw`my-2`} />
      <PickAndDropInput
        inputTitle="Pickup"
        clearInput={() => setStop('')}
        onPress={() => alert('add action here')}
        text={stop}
        onValue={setStop}
      />
      <View style={tw`my-2`} />
      <PickAndDropInput
        inputTitle="Drop"
        clearInput={() => setStop('')}
        onPress={() => alert('add action here')}
        text={stop}
        onValue={setStop}
      />

      <View style={tw`my-4`} />
      <LocationNamesCard
        distance={12}
        AddressFull="Remco Bhel Layout Kenchenhalli RR Nagar Be..."
        AddressTitle="RR Nagar Complex"
        imageId={IMAGES.MARKER_ICON}
      />

      <View style={tw`my-4 flex-row`}>
        <SuggaCheckBox
          title="Yes"
          onPress={(value) => setSelectedCheckBox(value)}
          isActive={selectedCheckBox === 'Yes'}
        />
        <SuggaCheckBox
          title="No"
          onPress={(value) => setSelectedCheckBox(value)}
          isActive={selectedCheckBox === 'No'}
        />
      </View>

      <View style={tw`my-2`} />
      <SuggaaDropDown
        style={{
          backgroundColor: COLORS.WHITE,
          alignContent: 'center',
          width: '100%',
          borderWidth: 2,
          borderColor: COLORS.SPANIS_VIRIDIAN,
          borderRadius: 5,
          fontSize: 20,
          fontWeight: '400',
          paddingHorizontal: 13,
          paddingVertical: 10,
        }}
        value={selectedDropDownValue}
        label="Gender"
        list={['Male', 'Female']}
        onChangeText={(text) => setSelectedDropDownValue(text)}
        selectionColor={COLORS.SPANIS_VIRIDIAN}
      />

      <View style={tw`my-4`} />
      <DocumentsRequired
        title="Personal Details"
        description="Personal details, address proof, driving license, PAN card"
      />
      <View style={tw`my-4`} />
      <DocumentsRequired
        title="Bank Details"
        description="Personal details, address proof, driving license, PAN card"
      />
      <View style={tw`my-4`} />
      <DocumentsRequired
        title="Vehicles Details"
        description="Personal details, address proof, driving license, PAN card"
      />

      <View style={tw`my-4`} />
      <DriverCateogoryCard
        onPress={() => setDriverType('NoVehicle')}
        title="I Drive"
        description="If you have no vehicles and like to partner with Suggaa to find an Operator for you."
        category="NoVehicle"
        isActive={driverType === 'NoVehicle'}
      />
      <DriverCateogoryCard
        onPress={() => setDriverType('SingleDriver')}
        title="I have a car and I drive"
        description="If you have a single vehicle and like to partner with Suggaa and ride your vehicle"
        category="SingleDriver"
        isActive={driverType === 'SingleDriver'}
      />
      <DriverCateogoryCard
        onPress={() => setDriverType('FleetOwner')}
        title="I have more than 1 car"
        description="If you have many vehicles and drivers and like to manage them on Suggaa"
        category="FleetOwner"
        isActive={driverType === 'FleetOwner'}
      />
      <View style={tw`my-10`} />
    </ScrollView>
  );
}
