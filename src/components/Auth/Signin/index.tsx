'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { integrations, messages } from '../../../../integrations.config';
import z from 'zod';

const signinSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .refine(
      (val) =>
        /[A-Z]/.test(val) && // At least one uppercase letter
        /[a-z]/.test(val) && // At least one lowercase letter
        /\d/.test(val) && // At least one number
        /[@$!%*?&]/.test(val), // At least one special character
      {
        message:
          'Password must be at least 8 characters long and contain uppercase and lowercase letters, a number, and a special character.',
      },
    ),
});

export default function Signin() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();

  const loginUser = async (e: any) => {
    e.preventDefault();

    if (!integrations?.isAuthEnabled) {
      toast.error(messages?.auth);
      return;
    }

    const result = await signinSchema.safeParseAsync(data);

    if (!result.success) {
      const firstError = result.error.issues[0];
      toast.error(firstError.message);
      return;
    }

    signIn('credentials', { ...data, redirect: false }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error);
      }

      if (callback?.ok && !callback?.error) {
        toast.success('Logged in successfully');
        router.push('/auth/success');
      }
    });
  };

  return (
    <section className="pt-[120px] lg:pt-[240px]">
      <div className="px-4 xl:container">
        <div className="border-b pb-20 lg:pb-[130px]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[920px] rounded border bg-white px-6 py-10 sm:px-10 md:p-[70px]">
                <h1 className="mb-3 text-2xl font-medium text-black  sm:text-3xl lg:text-2xl xl:text-[40px] xl:leading-tight">
                  Sign in to your Account
                </h1>
                <p className="mb-12 text-base font-medium text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <h3 className="mb-8 text-xl text-dark ">Sign in with Social Media</h3>
                <div className="mb-12 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => signIn('google')}
                    className="flex h-[50px] min-w-[50px] items-center justify-center whitespace-nowrap rounded border text-base text-body-color hover:border-primary hover:bg-primary/5 hover:text-primary md:w-auto md:px-7"
                  >
                    <span className="md:pr-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1416_409)">
                          <path
                            d="M18 9.19932C18.0109 8.58059 17.9457 7.96284 17.806 7.35938H9.18372V10.6993H14.2449C14.149 11.2849 13.9333 11.8455 13.6106 12.3473C13.288 12.8491 12.8651 13.2818 12.3674 13.6193L12.3497 13.7311L15.0761 15.8009L15.2649 15.8194C16.9995 14.2493 17.9997 11.9393 17.9997 9.19932"
                            fill="#4285F4"
                          />
                          <path
                            d="M9.18382 18.0003C11.6633 18.0003 13.745 17.2003 15.2655 15.8203L12.3675 13.6202C11.592 14.1503 10.5512 14.5203 9.18382 14.5203C8.02249 14.5137 6.89279 14.1488 5.955 13.4775C5.0172 12.8061 4.31894 11.8624 3.95927 10.7803L3.85164 10.7893L1.01679 12.9392L0.979736 13.0402C1.74323 14.5314 2.91494 15.7851 4.36385 16.661C5.81276 17.537 7.48174 18.0007 9.18417 18.0003"
                            fill="#34A853"
                          />
                          <path
                            d="M3.95921 10.7798C3.75834 10.2069 3.65469 9.60558 3.65239 8.99982C3.65609 8.39505 3.75591 7.79453 3.94828 7.21988L3.94316 7.10057L1.07355 4.91602L0.979681 4.95976C0.335608 6.21294 0.00012207 7.59658 0.00012207 8.99973C0.00012207 10.4029 0.335608 11.7865 0.979681 13.0397L3.95921 10.7798Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M9.1838 3.47965C10.4997 3.45963 11.7725 3.93991 12.7348 4.81971L15.3267 2.33965C13.6644 0.811346 11.463 -0.0272143 9.1838 -0.000350488C7.48139 -0.000747434 5.81242 0.462942 4.36352 1.33887C2.91461 2.2148 1.74289 3.46843 0.97937 4.95959L3.94902 7.21971C4.31223 6.13773 5.01281 5.19476 5.95199 4.52376C6.89117 3.85275 8.02156 3.48755 9.1838 3.47965Z"
                            fill="#EB4335"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1416_409">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="hidden md:inline-flex">Sign up with Google</span>
                  </button>

                  <button
                    onClick={() => signIn('github')}
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-md border text-body-color hover:border-primary hover:bg-primary/5 hover:text-primary"
                  >
                    <svg
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2731 0C9.7927 0 8.32679 0.291587 6.95907 0.858113C5.59136 1.42464 4.34862 2.25501 3.30182 3.30181C1.1877 5.41593 0 8.28329 0 11.2731C0 16.2558 3.23538 20.4832 7.7108 21.9825C8.27446 22.0727 8.45483 21.7233 8.45483 21.4189C8.45483 21.1596 8.45483 20.4494 8.45483 19.5137C5.33218 20.1901 4.66706 18.0031 4.66706 18.0031C4.1485 16.6955 3.41575 16.346 3.41575 16.346C2.3899 15.6471 3.49466 15.6696 3.49466 15.6696C4.62197 15.7485 5.21945 16.8307 5.21945 16.8307C6.20021 18.5442 7.85735 18.037 8.49992 17.7664C8.60138 17.0336 8.89448 16.5376 9.21013 16.2558C6.7075 15.974 4.08086 15.0045 4.08086 10.7094C4.08086 9.45813 4.50924 8.45482 5.24199 7.65443C5.12926 7.37261 4.7347 6.2002 5.35472 4.67834C5.35472 4.67834 6.30167 4.37396 8.45483 5.82819C9.3454 5.58018 10.3149 5.45618 11.2731 5.45618C12.2313 5.45618 13.2008 5.58018 14.0914 5.82819C16.2445 4.37396 17.1915 4.67834 17.1915 4.67834C17.8115 6.2002 17.4169 7.37261 17.3042 7.65443C18.037 8.45482 18.4653 9.45813 18.4653 10.7094C18.4653 15.0158 15.8274 15.9627 13.3135 16.2445C13.7194 16.594 14.0914 17.2817 14.0914 18.3301C14.0914 19.8407 14.0914 21.0581 14.0914 21.4189C14.0914 21.7233 14.2717 22.084 14.8467 21.9825C19.3221 20.4719 22.5462 16.2558 22.5462 11.2731C22.5462 9.79269 22.2546 8.32678 21.6881 6.95907C21.1216 5.59135 20.2912 4.34862 19.2444 3.30181C18.1976 2.25501 16.9549 1.42464 15.5871 0.858113C14.2194 0.291587 12.7535 0 11.2731 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <a
                    href="https://nextjstemplates.com/docs/authentication"
                    target="_blank"
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-md border text-body-color hover:border-primary hover:bg-primary/5 hover:text-primary"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://nextjstemplates.com/docs/authentication"
                    target="_blank"
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-md border text-body-color hover:border-primary hover:bg-primary/5 hover:text-primary"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 10.494V7.42717C12.1 6.23996 13.085 5.27753 14.3 5.27753H16.5V2.05308L13.5135 1.84464C10.9664 1.66688 8.8 3.63794 8.8 6.13299V10.494H5.5V13.7184H8.8V20.1668H12.1V13.7184H15.4L16.5 10.494H12.1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>

                <div className="relative z-10 mb-8 flex items-center justify-center">
                  <span className="absolute left-0 top-1/2 -z-10 hidden h-[1px] w-full -translate-y-1/2 bg-slate-300  sm:block"></span>
                  <p className="bg-white text-base font-medium text-body-color  sm:px-4">
                    Or Sign in with your email
                  </p>
                </div>

                <form onSubmit={loginUser}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 sm:w-1/2">
                      <div className="mb-10">
                        <label htmlFor="email" className="mb-3 block text-base text-dark ">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={data.email}
                          onChange={(e) => setData({ ...data, email: e.target.value })}
                          placeholder="jhonandrio@domain.com"
                          className="placeholder-dark-text w-full border-b bg-transparent py-5 text-base font-medium text-dark outline-none focus:border-primary   "
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2">
                      <div className="mb-10">
                        <label htmlFor="password" className="mb-3 block text-base text-dark ">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={data.password}
                          onChange={(e) => setData({ ...data, password: e.target.value })}
                          placeholder="**********"
                          className="placeholder-dark-text w-full border-b bg-transparent py-5 text-base font-medium text-dark outline-none focus:border-primary   "
                        />
                      </div>
                    </div>

                    <div className="w-full px-4">
                      <div className="mb-4 flex flex-wrap justify-between gap-4">
                        <div className="flex flex-wrap gap-4">
                          <div className="mb-4 mr-10">
                            <label
                              htmlFor="supportCheckbox"
                              className="flex cursor-pointer select-none text-body-color hover:text-primary"
                            >
                              <div className="relative">
                                <input type="checkbox" id="supportCheckbox" className="sr-only" />
                                <div className="box mr-4 mt-0.5 flex h-5 w-5 items-center justify-center rounded border">
                                  <span className="fill-white opacity-0">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.70692 0.792787C9.89439 0.980314 9.99971 1.23462 9.99971 1.49979C9.99971 1.76495 9.89439 2.01926 9.70692 2.20679L4.70692 7.20679C4.51939 7.39426 4.26508 7.49957 3.99992 7.49957C3.73475 7.49957 3.48045 7.39426 3.29292 7.20679L0.292919 4.20679C0.110761 4.01818 0.00996641 3.76558 0.0122448 3.50339C0.0145233 3.24119 0.119692 2.99038 0.3051 2.80497C0.490508 2.61956 0.741321 2.51439 1.00352 2.51211C1.26571 2.50983 1.51832 2.61063 1.70692 2.79279L3.99992 5.08579L8.29292 0.792787C8.48045 0.605316 8.73475 0.5 8.99992 0.5C9.26508 0.5 9.51939 0.605316 9.70692 0.792787Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                              Keep me signed in
                            </label>
                          </div>
                          <div className="mb-4">
                            <Link
                              href="/auth/forget-password"
                              className="text-base text-body-color hover:text-primary"
                            >
                              Forgot Password?
                            </Link>
                          </div>
                        </div>
                        <div className="mb-4">
                          <p className="text-body-color">
                            Don&#39;t have an account yet?
                            <Link href="/auth/signup" className="text-primary hover:underline">
                              Sign up
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button
                        type="submit"
                        className="flex items-center justify-center rounded bg-primary px-14 py-[14px] text-sm font-semibold text-white hover:bg-primary/90"
                      >
                        Sign In Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
