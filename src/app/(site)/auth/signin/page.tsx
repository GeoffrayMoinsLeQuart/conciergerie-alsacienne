import { getMetadata } from '@/app/config/pageMetadata';
import Signin from '@/components/Auth/Signin';

export const metadata = getMetadata('signin');

export default function SigninPage() {
  return (
    <>
      <Signin />
    </>
  );
}
