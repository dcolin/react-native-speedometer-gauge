import React, { Component } from 'react';

import { ART } from 'react-native';
import PropTypes from 'prop-types';

const { Group, Path, Shape, Surface } = ART;

class SpeedometerGauge extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    size: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  };

  static defaultProps = {
    backgroundColor: '#efefef',
  };

  _circlePath = (cx, cy, r, startDegree, endDegree) => {
    let p = Path();
    p.path.push(0, cx + r, cy);
    p.path.push(
      4,
      cx,
      cy,
      r,
      (startDegree * Math.PI) / 180,
      (endDegree * Math.PI) / 180,
      1,
    );
    return p;
  };

  render() {
    const { backgroundColor, size, width } = this.props;

    if (!size && !width) {
      return null;
    }

    // Half Circle
    const cropDegree = 180;

    // Background Path
    const backgroundPath = this._circlePath(
      size / 2,
      size / 2,
      size / 2 - width / 2,
      0,
      (360 * 99.9) / 100 - cropDegree,
    );

    return (
      <Surface height={size} width={size}>
        <Group originX={size / 2} originY={size / 2} rotation={cropDegree}>
          <Shape
            d={backgroundPath}
            stroke={backgroundColor}
            strokeCap="butt"
            strokeWidth={width}
          />
        </Group>
      </Surface>
    );
  }
}

export default SpeedometerGauge;
