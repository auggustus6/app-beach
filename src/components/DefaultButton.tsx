import {Button} from 'native-base';

interface DefaultButtonProps extends React.ComponentProps<typeof Button> {}

export default function DefaultButton({...props}: DefaultButtonProps) {
  return (
    <Button
      variant={'subtle'}
      backgroundColor={'theme_secondary'}
      _text={{color: 'theme_text', fontWeight: 500}}
      _hover={{opacity: 0.5}}
      _pressed={{opacity: 0.5}}
      height={'12'}
      rounded={'lg'}
      {...props}>
      {props.children}
    </Button>
  );
}
