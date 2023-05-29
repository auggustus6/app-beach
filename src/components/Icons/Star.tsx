import {Icon} from 'native-base';
import React from 'react';
import {Circle, Path} from 'react-native-svg';

interface StarProps {
  size?: React.ComponentProps<typeof Icon>['size'];
}

export default function Star({size}: StarProps) {
  const nativeSize: React.ComponentProps<typeof Icon>['size'] = size || 4;
  return (
    <Icon size={nativeSize} viewBox="0 0 14 13" fill="none">
      <Path
        d="M2.88337 12.6667L3.96671 7.98333L0.333374 4.83333L5.13337 4.41667L7.00004 0L8.86671 4.41667L13.6667 4.83333L10.0334 7.98333L11.1167 12.6667L7.00004 10.1833L2.88337 12.6667Z"
        fill="black"
        fillOpacity="0.4"
      />
    </Icon>
  );
}
