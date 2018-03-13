'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroBox,
  ViroMaterials,
  ViroARImageMarker,
  ViroARTrackingTargets,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingInitialized={this._onInitialized} >
        <ViroARImageMarker
          target={"targetOne"}
          onAnchorFound={() => {console.log('found')}}
          opacity={0.1} >
          <ViroBox position={[0, .25, 0]} scale={[2, 2, 2]} />
        </ViroARImageMarker>
      </ViroARScene>
    );
  }

  _onInitialized() {
    this.setState({
      text : "Zdarova! openGeeksLab"
    });
  }

}

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
});

ViroARTrackingTargets.createTargets({
  "targetOne" : {
    source : require('./res/qr.jpg'),
    orientation : "Down",
    physicalWidth : 0.07 // real world width in meters
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldSceneAR;
