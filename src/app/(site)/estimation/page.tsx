import { getMetadata } from '@/app/config/pageMetadata';
import SimulateurClient from './SimulateurClient';

export const metadata = getMetadata('estimation');

export default function Page() {
  return <SimulateurClient />;
}
