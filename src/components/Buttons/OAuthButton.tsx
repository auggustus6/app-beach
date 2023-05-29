import {Box, Button} from 'native-base';
import React from 'react';
import Facebook from '../Icons/Facebook';

interface OAuthButtonProps {
  icon: React.ReactNode;
}

export default function OAuthButton({icon}: OAuthButtonProps) {
  return (
    <Box style={{width: 100}}>
      <Button
        h={16}
        rounded={'2xl'}
        bgColor={'transparent'}
        borderColor={'#e0e0e0'}
        borderWidth={1}
        _pressed={{
          bgColor: '#e0e0e0',
        }}
        >
        {icon}
      </Button>
    </Box>
  );
}
