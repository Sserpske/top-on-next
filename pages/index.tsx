import React from 'react';

import { Button, Htag, P } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag={'h1'}>Text</Htag>
      <Button appearance='primary' arrow='down'>Click</Button>
      <Button appearance='ghost' arrow={'right'}>Click</Button>
      <P size={'l'}>Big</P>
      <P>Medium</P>
      <P size={'s'}>Small</P>
    </>
  );
}
