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
    width: '50%',
    alignItems: 'center',
  },
  bottomContainer: {
    height: 80,
    marginVertical: 25,
    paddingBottom: 10,
    width: '100%',
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

function FirstRowNumberDisplay({
  title = 'ไม่มีข้อมูล',
  number = 'ไม่มีข้อมูล',
  reward = 'ไม่มีข้อมูล',
}) {
  return (
    <View style={displayNumberStyles.container}>
      <View style={displayNumberStyles.heading}>
        <View style={displayNumberStyles.line} />
        <Text style={displayNumberStyles.headingText}>{title}</Text>
        <View style={displayNumberStyles.line} />
      </View>
      <View style={displayNumberStyles.numberContainer}>
        <Text style={displayNumberStyles.number}>{number}</Text>
      </View>
      <Text style={displayNumberStyles.reward}>{reward}</Text>
    </View>
  );
}

function SecondRowNumberDisplay({
  title = 'ไม่มีข้อมูล',
  firstNumber = 'ไม่มีข้อมูล',
  secondNumber = 'ไม่มีข้อมูล',
  reward = 'ไม่มีข้อมูล',
}) {
  return (
    <View style={displayNumberStyles.container}>
      <View style={displayNumberStyles.heading}>
        <View style={displayNumberStyles.line} />
        <Text style={displayNumberStyles.headingText}>{title}</Text>
        <View style={displayNumberStyles.line} />
      </View>
      <View style={displayNumberStyles.numberContainer}>
        <Text style={displayNumberStyles.number}>{firstNumber}</Text>
        <Text style={displayNumberStyles.number}>{secondNumber}</Text>
      </View>
      <Text style={displayNumberStyles.reward}>{reward}</Text>
    </View>
  );
}

function BottomeRowNumberDisplay({
  title = 'ไม่มีข้อมูล',
  number = 'ไม่มีข้อมูล',
  reward = 'ไม่มีข้อมูล',
}) {
  return (
    <View style={displayNumberStyles.bottomContainer}>
      <View style={displayNumberStyles.heading}>
        <View style={displayNumberStyles.line} />
        <Text style={displayNumberStyles.headingText}>{title}</Text>
        <View style={displayNumberStyles.line} />
      </View>
      <View style={displayNumberStyles.numberContainer}>
        <Text style={displayNumberStyles.number}>{number}</Text>
      </View>
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

function ButtonGroup() {
  return (
    <View style={buttonGroupStyles.container}>
      <Text style={buttonGroupStyles.date}>1 กุมภาพันธ์ 63</Text>
      <View style={buttonGroupStyles.buttonContainer}>
        <TouchableOpacity>
          <Image
            style={buttonGroupStyles.icon}
            source={require('../../../../assets/refresh/glyphRegularRefresh.png')}
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

export function ResultCard() {
  return (
    <View style={cardStyles.container}>
      <ButtonGroup />
      <Form />
      <View style={{flexDirection: 'row', flex: 1}}>
        <FirstRowNumberDisplay
          title="สามตัวบน"
          number="227"
          reward="รางวัลละ 4,000 บาท"
        />
        <FirstRowNumberDisplay
          title="เลขท้ายสองตัว"
          number="06"
          reward="รางวัลละ 2,000 บาท"
        />
      </View>
      <View style={{flexDirection: 'row', flex: 1}}>
        <SecondRowNumberDisplay
          title="เลขหน้าสามตัว"
          firstNumber="259"
          secondNumber="552"
          reward="รางวัลละ 4,000 บาท"
        />
        <SecondRowNumberDisplay
          title="เลขท้ายสามตัว"
          firstNumber="323"
          secondNumber="123"
          reward="รางวัลละ 4,000 บาท"
        />
      </View>
      <View style={{flex: 1, width: '100%'}}>
        <BottomeRowNumberDisplay
          title="เลขท้ายสองตัว"
          number="06"
          reward="รางวัลละ 2,000 บาท"
        />
      </View>
    </View>
  );
}
