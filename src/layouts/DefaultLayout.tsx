import {Box, Spacer} from 'native-base';
import React from 'react';
import Container from '../components/Container';
import BreadCrumbs from '../components/BreadCrumbs';

interface DefaultLayoutProps {
  children: React.ReactNode;
  actualPath?: string;
  scroll?: boolean;
}

export default function DefaultLayout({
  children,
  actualPath,
  scroll = false,
}: DefaultLayoutProps) {
  return (
    <Container scroll={scroll}>
      {actualPath && (
        <Box mt={8} mb={4}>
          <BreadCrumbs actualPath={'Quadra'} />
        </Box>
      )}
      {children}
      <Box mt={8} />
    </Container>
  );
}
