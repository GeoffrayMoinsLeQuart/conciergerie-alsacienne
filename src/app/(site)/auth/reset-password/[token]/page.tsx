import ResetPassword from "@/components/Auth/ResetPassword";

import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Reset Password Page | ${siteName}`,
  description: "This is Reset Password page description",
};

const ResetPasswordPage = async (props: { params: Promise<{ token: string }> }) => {
  const params = await props.params;
  return <ResetPassword token={params.token} />;
};

export default ResetPasswordPage;
