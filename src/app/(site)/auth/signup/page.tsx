import { getMetadata } from '@/app/config/pageMetadata';
import Signup from '@/components/Auth/Signup';

export const metadata = getMetadata('signup');

export default function SignupPage() {
  return (
    <>
      <Signup />
    </>
  );
}
