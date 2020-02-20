import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {primary, secondary} from '../../../constants/colors';

const displayNumberStyles = StyleSheet.create({
  container: {
    height: 80,
    marginTop: 18,
    paddingBottom: 10,
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    borderBottomWidth: 1,
    flex: 1,
    borderColor: '#eaeaec',
  },
  headingText: {
    paddingHorizontal: 10,
    fontFamily: 'NotoSansThaiUI-Regular',
  },
  numberContainer: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-around',
    marginTop: 10,
    width: '70%',
  },
  number: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'NotoSansThaiUI-Bold',
  },
  reward: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'NotoSansThaiUI-Regular',
    color: 'grey',
    marginTop: 6,
  },
});

function IndividualResultDisplay({
  title = 'ไม่มีข้อมูล',
  results = ['ไม่มีข้อมูล'],
  reward = 'ไม่มีข้อมูล',
}) {
  const displayResult = results.map(result => (
    <Text style={displayNumberStyles.number}>{result}</Text>
  ));
  return (
    <View style={displayNumberStyles.container}>
      <View style={displayNumberStyles.heading}>
        <View style={displayNumberStyles.line} />
        <Text style={displayNumberStyles.headingText}>{title}</Text>
        <View style={displayNumberStyles.line} />
      </View>
      <View style={displayNumberStyles.numberContainer}>{displayResult}</View>
      <Text style={displayNumberStyles.reward}>{reward}</Text>
    </View>
  );
}

const buttonGroupStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 28,
    paddingVertical: 10,
  },
  date: {
    flex: 3,
    color: primary,
    fontFamily: 'NotoSansThaiUI-Bold',
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
  },
  icon: {width: 24, height: 24},
});

function ButtonGroup({onPressCalendar, displayDate}) {
  return (
    <View style={buttonGroupStyles.container}>
      <Text style={buttonGroupStyles.date}>{displayDate}</Text>
      <View style={buttonGroupStyles.buttonContainer}>
        <TouchableOpacity onPress={onPressCalendar}>
          <Image
            style={buttonGroupStyles.icon}
            source={require('../../../../assets/calendar/calendar.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={buttonGroupStyles.icon}
            source={require('../../../../assets/refresh/glyphRegularRefresh.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const formStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  date: {
    flex: 3,
    color: primary,
    fontFamily: 'NotoSansThaiUI-Bold',
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
  },
  textInput: {
    borderRadius: 32,
    borderColor: '#eaeaec',
    borderWidth: 1,
    paddingHorizontal: 20,
    flex: 3,
    fontWeight: 'normal',
    fontFamily: 'NotoSansThaiUI-Regular',
    fontSize: 18,
    marginRight: 5,
  },
  button: {
    borderRadius: 32,
    borderColor: '#eaeaec',
    borderWidth: 1,
    paddingHorizontal: 20,
    flex: 1,
    marginLeft: 5,
    backgroundColor: secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'NotoSansThaiUI-Bold',
    fontSize: 18,
    color: 'white',
  },
});

function Form() {
  return (
    <View style={formStyles.container}>
      <TextInput
        maxLength={50}
        style={formStyles.textInput}
        placeholder="กรอกตัวเลขเพื่อตรวจ"
        placeholderTextColor={secondary}
        keyboardType="numeric"
      />
      <TouchableOpacity style={formStyles.button}>
        <Text style={formStyles.buttonText}>ตรวจ</Text>
      </TouchableOpacity>
    </View>
  );
}

const cardStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 32,
    paddingVertical: 20,
    height: 430,
  },
});

export function ResultCard({onPressCalendar, displayDate}) {
  return (
    <View style={cardStyles.container}>
      <ButtonGroup
        onPressCalendar={onPressCalendar}
        displayDate={displayDate}
      />
      <Form />
      <View style={{flexDirection: 'row'}}>
        <IndividualResultDisplay
          title="สามตัวบน"
          results={['227']}
          reward="รางวัลละ 4,000 บาท"
        />
        <IndividualResultDisplay
          title="เลขท้ายสองตัว"
          results={['60']}
          reward="รางวัลละ 2,000 บาท"
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <IndividualResultDisplay
          title="เลขท้ายสองตัว"
          results={['259', '552']}
          reward="รางวัลละ 4,000 บาท"
        />
        <IndividualResultDisplay
          title="เลขท้ายสองตัว"
          results={['323', '123']}
          reward="รางวัลละ 4,000 บาท"
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <IndividualResultDisplay
          title="เลขท้ายสองตัว"
          results={['06']}
          reward="รางวัลละ 4,000 บาท"
        />
      </View>
    </View>
  );
}
