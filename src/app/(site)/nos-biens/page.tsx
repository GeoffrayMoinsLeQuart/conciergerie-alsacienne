import Properties from '@/components/Property';
import { fetchProperties } from '@/sanity/sanity-utils';
import { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Biens en gestion courte et longue durée | Conciergerie Alsacienne',
  description:
    'Découvrez des logements soignés, rentables, gérés avec attention. Une vitrine de notre méthode et de notre engagement.',
  openGraph: {
    title: 'Nos biens en location à Mulhouse, Colmar et alentours',
    description: 'Du studio rénové à la maison familiale, chaque bien reflète notre exigence.',
    url: 'https://www.conciergerie-alsacienne.fr/nos-biens',
    siteName: 'Conciergerie Alsacienne',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Des logements performants sous notre gestion',
    description: 'Optimisation, sérénité, résultats. En images.',
  },
};

export default async function Page() {
  const properties = await fetchProperties();

  return <>{properties && <Properties properties={properties} />}</>;
}
