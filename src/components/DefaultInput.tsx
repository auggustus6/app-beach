import {FormControl, Input, WarningOutlineIcon} from 'native-base';
import React from 'react';

// interface DefaultInputProps extends React.ComponentProps<typeof Input> {}
interface DefaultInputProps extends React.ComponentProps<typeof Input> {
  isInvalid?: boolean;
  label?: string;
  errorMessage?: string;
}

export default function DefaultInput({
  isInvalid = false,
  label,
  errorMessage,
  ...props
}: DefaultInputProps) {
  return (
    <FormControl isInvalid={isInvalid}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        backgroundColor={'theme_gray'}
        color="theme_textLight"
        fontWeight={'400'}
        borderColor={'transparent'}
        fontSize={'lg'}
        borderRadius={'lg'}
        height={'12'}
        _focus={
          {
            // borderColor: 'theme_primary',
          }
        }
        {...props}
      />
      {errorMessage && (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errorMessage}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
}
