import {Input} from 'native-base';

interface DefaultInputProps extends React.ComponentProps<typeof Input> {}

export default function DefaultInput({...props}: DefaultInputProps) {
  return (
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
  );
}
