import {Box, ScrollView, VStack} from 'native-base';
import {
  ResponsiveValue,
  SpaceType,
} from 'native-base/lib/typescript/components/types';
import React from 'react';
import {ViewStyle} from 'react-native';

interface ContainerProps extends React.ComponentProps<typeof VStack> {
  children: React.ReactNode;
  scroll?: boolean;
}

export default function Container({
  scroll = false,
  children,
  ...props
}: ContainerProps) {
  if (scroll) {
    return (
      <ScrollView px={6} {...(props as any)}>
        {children}
      </ScrollView>
    );
  }
  return (
    <VStack px={6} {...props}>
      {children}
    </VStack>
  );
}
