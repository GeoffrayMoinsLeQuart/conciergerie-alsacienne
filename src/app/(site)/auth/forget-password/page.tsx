import { getMetadata } from '@/app/config/pageMetadata';
import ForgetPassword from '@/components/Auth/ForgetPassword';


export const metadata = getMetadata('forgot-password');

const ForgetPasswordPage = () => {
  return <ForgetPassword />;
};

export default ForgetPasswordPage;
