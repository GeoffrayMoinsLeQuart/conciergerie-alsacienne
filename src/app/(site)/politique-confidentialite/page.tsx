// pages/privacy-policy.tsx
import { FC } from 'react';
import Link from 'next/link';
import PageTitle from '@/components/Common/PageTitle';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { privacyPolicySchema } from '@/app/config/pageSchema';
import { t } from '@/app/libs/content';
import { Metadata } from 'next';
import { getMetadata } from '@/app/config/pageMetadata';

type Segment = { type: 'text'; value: string } | { type: 'link'; label: string; href: string };

export const metadata: Metadata = getMetadata('privacy-policy');

const PrivacyPolicyPage: FC = () => {
  const pageKey = 'politiqueConfidentialite';
  const baseKey = 'PrivacyPolicy';

  const pageAriaLabel = t(pageKey, `${baseKey}.pageAriaLabel`) as string;
  const { pageTitle, pageDescription, showMenu } = t(pageKey, `${baseKey}.PageTitle`) as any;

  const orderRaw = t(pageKey, `${baseKey}.sectionOrder`);
  const sections = t(pageKey, `${baseKey}.sections`) as Record<string, any>;
  const order = Array.isArray(orderRaw) ? orderRaw : Object.keys(sections);

  function renderParagraph(p: string | Segment[], idx: number) {
    if (typeof p === 'string') {
      return <p key={idx}>{p}</p>;
    }
    return (
      <p key={idx}>
        {p.map((seg, i) =>
          seg.type === 'text' ? (
            <span key={i}>{seg.value}</span>
          ) : (
            <Link key={i} href={seg.href} className="text-primary hover:underline">
              {seg.label}
            </Link>
          ),
        )}
      </p>
    );
  }

  return (
    <>
      <SeoSchemaInjector schema={privacyPolicySchema} />

      <PageTitle pageTitle={pageTitle} pageDescription={pageDescription} showMenu={showMenu} />

      <main
        role="main"
        aria-label={pageAriaLabel}
        className="prose mx-auto max-w-[1300px] px-4 py-10"
      >
        {order.map((key) => {
          const sec = sections[key];
          return (
            <section key={key}>
              <h2>{sec.title}</h2>

              {Array.isArray(sec.items) && (
                <ul>
                  {sec.items.map((it: any, i: number) => (
                    <li key={i}>
                      <strong>{it.label} :</strong>{' '}
                      {it.link ? (
                        <Link href={it.link} className="text-primary hover:underline">
                          {it.value}
                        </Link>
                      ) : (
                        it.value
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {Array.isArray(sec.paragraphs) &&
                sec.paragraphs.map((p: string | Segment[], i: number) => renderParagraph(p, i))}
            </section>
          );
        })}
      </main>
    </>
  );
};

export default PrivacyPolicyPage;
