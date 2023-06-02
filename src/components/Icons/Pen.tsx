import {Icon} from 'native-base';
import React from 'react';
import {Circle, Path} from 'react-native-svg';

interface PenProps {
  size?: React.ComponentProps<typeof Icon>['size'];
}

export default function Pen({size}: PenProps) {
  const nativeSize: React.ComponentProps<typeof Icon>['size'] = size || 4;
  return (
    <Icon
      size={nativeSize}
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none">
      <Path
        d="M2 17H3.4L12.025 8.375L10.625 6.975L2 15.6V17ZM16.3 6.925L12.05 2.725L13.45 1.325C13.8333 0.941667 14.3042 0.75 14.8625 0.75C15.4208 0.75 15.8917 0.941667 16.275 1.325L17.675 2.725C18.0583 3.10833 18.2583 3.57083 18.275 4.1125C18.2917 4.65417 18.1083 5.11667 17.725 5.5L16.3 6.925ZM14.85 8.4L4.25 19H0V14.75L10.6 4.15L14.85 8.4Z"
        fill="#1C1B1F"
      />
    </Icon>
  );
}
