import {Box, Heading, List, ScrollView, Spacer, Text} from 'native-base';
import React from 'react';
import Container from '../components/Container';
import Card from '../components/Card';
import PlayerCard from '../components/PlayerCard';

export default function HomeView() {
  return (
    <Container space={6}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Heading size={'lg'} fontWeight={500} mt={6} mb={4}>
          Quadras próximas
        </Heading>
        {new Array(3).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            <Card key={index} />
            <Spacer my={4} />
          </React.Fragment>
        ))}
        <Heading size={'lg'} fontWeight={500} mt={2} mb={4}>
          Eventos próximos
        </Heading>
        {new Array(3).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            <Card key={index} />
            <Spacer my={4} />
          </React.Fragment>
        ))}
        <Heading size={'lg'} fontWeight={500} mt={2} mb={5}>
          Jogadores
        </Heading>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {new Array(5).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              <PlayerCard key={index} />
              <Spacer ml={8} />
            </React.Fragment>
          ))}
        </ScrollView>
        <Spacer my={4} />
      </ScrollView>
    </Container>
  );
}
