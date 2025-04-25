import SimulateurClient from './SimulateurClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simulateur de rentabilité locative | Conciergerie Alsacienne',
  description:
    'Estimez gratuitement le potentiel de votre logement en courte durée. Projection fiable, conseils personnalisés, sans engagement.',
  openGraph: {
    title: 'Estimez vos revenus Airbnb à Mulhouse et Colmar',
    description: 'Testez notre outil simple pour savoir combien pourrait rapporter votre bien.',
    url: 'https://www.conciergerie-alsacienne.fr/simulateur',
    siteName: 'Conciergerie Alsacienne',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Votre bien peut-il devenir rentable ?',
    description: 'Répondez en quelques clics, nous faisons le calcul pour vous.',
  },
};

export default function Page() {
  return <SimulateurClient />;
}