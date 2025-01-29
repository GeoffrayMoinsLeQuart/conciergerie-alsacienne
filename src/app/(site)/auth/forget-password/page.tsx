import ForgetPassword from "@/components/Auth/ForgetPassword";

import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Forgot Password Page | ${siteName}`,
  description: "This is Forgot Password page description",
};

const ForgetPasswordPage = () => {
  return <ForgetPassword />;
};

export default ForgetPasswordPage;
