'use client';

import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Graphic from './Graphic';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email || email == '') {
      toast.error('Please enter your email address.');

      return;
    }

    try {
      const res = await axios.post('/api/newsletter', { email });

      if (res.data.status == 400) {
        toast.error(res.data?.detail);
        setEmail('');
      } else {
        toast.success('Thanks for signing up!');
        setEmail('');
      }
    } catch (error: any) {
      toast.error(error?.response?.data);
    }
  };

  return (
    <section className="mt-[-160px] bg-white">
      <div className="container">
        <div className="relative z-10 overflow-hidden rounded-md bg-primary py-[70px] text-center">
          <div className="relative z-10 mx-auto max-w-[770px] px-6">
            <h2 className="mb-10 text-2xl font-bold leading-tight text-white md:text-[40px]">
              Subscribe our newsletter to receive future updates
            </h2>
            <form onSubmit={handleSubmit} className="relative mx-auto max-w-[480px]">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mb-5 w-full rounded-full border border-white border-opacity-[13%] bg-white bg-opacity-[15%] px-8 py-4 text-center text-white placeholder-white placeholder-opacity-70 outline-none transition focus:border-opacity-100 focus-visible:shadow-none sm:mb-0 sm:text-left"
              />
              <button className="right-2 top-2 w-full rounded-full bg-white px-5 py-4 text-base font-semibold text-primary sm:absolute sm:w-auto sm:py-[10px]">
                Subscribe Now
              </button>
            </form>
          </div>

          <Graphic />
        </div>
      </div>
    </section>
  );
}
