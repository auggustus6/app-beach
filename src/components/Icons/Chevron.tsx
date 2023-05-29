import {Icon} from 'native-base';
import React from 'react';
import { Path} from 'react-native-svg';

interface ChevronProps {
  size?: React.ComponentProps<typeof Icon>['size'];
}

export default function Chevron({size}: ChevronProps) {
  const nativeSize: React.ComponentProps<typeof Icon>['size'] = size || 4;
  return (
    <Icon size={nativeSize} viewBox="0 0 6 8" fill="none">
      <Path
        d="M1.26671 8L0.333374 7.06667L3.40004 4L0.333374 0.933333L1.26671 0L5.26671 4L1.26671 8Z"
        fill="#1C1B1F"
      />
    </Icon>
  );
}
