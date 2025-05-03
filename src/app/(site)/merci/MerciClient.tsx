'use client';

import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function MerciClient() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
        <div className="max-w-md text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" strokeWidth={1.5} />

          <h1 className="mt-6 text-3xl font-bold text-gray-900">Merci pour votre demande !</h1>
          <p className="mt-4 text-gray-600">
            Nous avons bien reçu vos informations et reviendrons vers vous dans les 24 heures.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-block rounded-md bg-primary px-6 py-3 text-white hover:bg-primary/90 transition"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
