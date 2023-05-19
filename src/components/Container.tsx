import {Box, VStack} from 'native-base';
import {
  ResponsiveValue,
  SpaceType,
} from 'native-base/lib/typescript/components/types';
import React from 'react';
import {ViewStyle} from 'react-native';

interface ContainerProps extends React.ComponentProps<typeof VStack> {
  children: React.ReactNode;
}

export default function Container({children, ...props}: ContainerProps) {
  return (
    <VStack px={6} {...props}>
      {children}
    </VStack>
  );
}
