import { Htag } from '../components';
import { Button } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag={'h1'}>Text</Htag>
      <Button appearance={'primary'}>Click</Button>
      <Button appearance={'ghost'}>Click</Button>
    </>
  );
}
