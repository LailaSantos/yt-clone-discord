import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications mentions={5} />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton mentions={2} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={10} />
      <ServerButton  hasNotifications/>
      

    </Container>
  );
};

export default ServerList;