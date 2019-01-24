# react-native-speedometer-gauge

[![npm version](https://badge.fury.io/js/react-native-speedometer-gauge.svg)](https://badge.fury.io/js/react-native-speedometer-gauge)
[![npm downloads](https://img.shields.io/npm/dt/react-native-speedometer-gauge.svg)](https://npm-stat.com/charts.html?package=react-native-speedometer-gauge)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![NPM](https://nodei.co/npm/react-native-speedometer-gauge.png)](https://npmjs.org/package/react-native-speedometer-gauge)

A React Native component for showing speedometer like a gauge.

## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Properties](#properties)
- [Examples](#examples)
- [License](#license)

## Installation

**NPM:**

```bash
$ npm install --save react-native-speedometer-gauge
```

**Yarn:**

```bash
$ yarn add react-native-speedometer-gauge
```

## Basic Usage

```javascript
import React, { Component } from 'react';
import SpeedometerGauge from 'react-native-speedometer-gauge';

export default class App extends Component {
  render() {
    return (
      <SpeedometerGauge />
    );
  }
}
```

## Properties

| Prop | Type | Default | Required | Description |
| :--- | :------: | ---: | :-------: | :---------- |
| value | number | none | true | A value between `minValue` and `maxValue` |
| minValue | number | none | true | |
| maxValue | number | none | true | |

## Examples

_@Todo_

## License

[MIT](LICENSE)
