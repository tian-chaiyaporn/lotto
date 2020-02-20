import React, {useEffect, Component} from 'react';
import VideoPlayer from 'react-native-video-player';

import {
  View,
  Text,
  StatusBar,
  AsyncStorage,
  Image,
} from 'react-native';

import {primary, secondary, light} from '../../constants/colors';

export class LiveScreen extends Component {
  constructor() {
    super();

    this.state = {
      video: {width: undefined, height: undefined, duration: undefined},
      thumbnailUrl: undefined,
      videoUrl: undefined,
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: light,
        }}>
        <View
          style={{
            backgroundColor: primary,
            alignItems: 'center',
            paddingVertical: 12,
            width: '100%',
          }}>
          <Image source={require('../../../assets/brand.png')} />
        </View>
        <View style={{ backgroundColor: 'black', width: '100%' }}>
          <VideoPlayer
            video={{uri: 'https://www.radiantmediaplayer.com/media/bbb-360p.mp4'}}
            videoWidth={500}
            videoHeight={280}
            ref={r => (this.player = r)}
            onBuffer={this.onBuffer}
            onError={this.videoError}
          />
        </View>
      </View>
    );
  }
}
