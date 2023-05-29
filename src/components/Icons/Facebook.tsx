import {Icon} from 'native-base';
import React from 'react';
import {Circle, Path} from 'react-native-svg';

interface FacebookProps {
  size?: React.ComponentProps<typeof Icon>['size'];
}

export default function Facebook({size}: FacebookProps) {
  const nativeSize: React.ComponentProps<typeof Icon>['size'] = size || 4;
  return (
    <Icon
      size={nativeSize}
      viewBox="0 0 40 40"
      fill="none">
      <Circle cx="20" cy="20" r="20" fill="#1877F2" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.7844 25.7807L28.6712 19.9993H23.124V16.2474C23.124 14.6657 23.8988 13.124 26.3834 13.124H28.9055V8.20192C28.9055 8.20192 26.6166 7.81128 24.4283 7.81128C19.8596 7.81128 16.8736 10.5801 16.8736 15.5928V19.9993H11.7952V25.7807H16.8736V39.7571C17.8919 39.9168 18.9356 40 19.9988 40C21.062 40 22.1057 39.9168 23.124 39.7571V25.7807H27.7844Z"
        fill="white"
      />
    </Icon>
  );
}
