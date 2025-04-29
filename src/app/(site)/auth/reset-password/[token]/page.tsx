import { getMetadata } from '@/app/config/pageMetadata';
import ResetPassword from '@/components/Auth/ResetPassword';

export const metadata = getMetadata('reset-password');

const ResetPasswordPage = async (props: { params: Promise<{ token: string }> }) => {
  const params = await props.params;
  return <ResetPassword token={params.token} />;
};

export default ResetPasswordPage;
