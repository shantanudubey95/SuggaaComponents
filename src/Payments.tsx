import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import TextBold12 from './Typography/TextBold12';
import TextBold15 from './Typography/TextBold15';
import TextBold18 from './Typography/TextBold18';
import TextBold20 from './Typography/TextBold20';
import TextBold22 from './Typography/TextBold22';
import TextBold25 from './Typography/TextBold25';
import TextMedium12 from './Typography/TextMedium12';
import TextMedium15 from './Typography/TextMedium15';
import TextMedium18 from './Typography/TextMedium18';
import TextMedium20 from './Typography/TextMedium20';
import TextMedium22 from './Typography/TextMedium22';
import TextRegular12 from './Typography/TextRegular12';
import TextRegular15 from './Typography/TextRegular15';
import TextRegular18 from './Typography/TextRegular18';
import TextRegular20 from './Typography/TextRegular20';
import TextRegular22 from './Typography/TextRegular22';
import TextSemiBold12 from './Typography/TextSemiBold12';
import TextSemiBold15 from './Typography/TextSemiBold15';
import TextSemiBold18 from './Typography/TextSemiBold18';
import TextSemiBold20 from './Typography/TextSemiBold20';
import TextSemiBold22 from './Typography/TextSemiBold22';
const Payments = () => {
  return (
    <View>
      <TextBold25 style={tw`text-red-700`} text="This screen contains all kind of typography" />
      <TextBold25 text="My name is Matilda Hines" />
      <TextBold22 text="This font size is 22 BOLD" />
      <TextBold20 style={tw`text-red-700`} text="This font size is 20 BOLD" />
      <TextBold18 style={tw`text-yellow-700`} text="This font size is 18 BOLD" />
      <TextBold15 text="This font size is 15 BOLD" />
      <TextBold12 text="This font size is 12 BOLD" />
      <TextSemiBold22 text="This font size is 22 semibold" />
      <TextSemiBold20 text="This font size is 20 semibold" />
      <TextSemiBold18 text="This font size is 18 semibold" />
      <TextSemiBold15 text="This font size is 15 semibold" />
      <TextSemiBold12 text="This font size is 12 semibold" />
      <TextMedium22 text="This font size is 22 medium" />
      <TextMedium20 text="This font size is 20 medium" />
      <TextMedium18 text="This font size is 18 medium" />
      <TextMedium15 text="This font size is 15 medium" />
      <TextMedium12 text="This font size is 12 medium" />
      <TextRegular22 text="This font size is 22 regular" />
      <TextRegular20 text="This font size is 20 regular" />
      <TextRegular18 text="This font size is 18 regular" />
      <TextRegular15 text="This font size is 15 regular" />
      <TextRegular12 text="This font size is 12 regular" />
    </View>
  );
};

export default Payments;
