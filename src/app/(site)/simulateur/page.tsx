import { getMetadata } from '@/app/config/pageMetadata';
import SimulateurClient from './SimulateurClient';

export const metadata = getMetadata('simulateur');

export default function Page() {
  return <SimulateurClient />;
}
