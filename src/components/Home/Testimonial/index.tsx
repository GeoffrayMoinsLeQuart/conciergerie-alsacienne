// src/components/Home/Testimonial.tsx
'use client';

import SingleTestimonial from './SingleTestimonial';
import { testimonialData } from '@/static-data/testimonial';
import { t } from '@/app/libs/content';

export default function Testimonial() {
  const pageKey = 'home';
  const sectionLabel = t(pageKey, 'Testimonial.label');
  const title = t(pageKey, 'Testimonial.title');
  const description = t(pageKey, 'Testimonial.description');

  return (
    <section
      id="testimonial"
      className="bg-white pb-20 pt-[120px]"
      aria-labelledby="testimonial-title"
    >
      <div className="container">
        <div className="mx-[-16px] flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[50px] max-w-[600px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">{sectionLabel}</span>
              <h2
                id="testimonial-title"
                className="mb-5 text-3xl font-bold text-black sm:text-4xl md:text-[45px]"
              >
                {title}
              </h2>
              <p className="text-lg font-medium text-body-color">{description}</p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap min-h-[400px]" style={{ contain: 'layout' }}>
          {testimonialData?.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
