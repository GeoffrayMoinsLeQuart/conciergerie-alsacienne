import { Metadata } from 'next';
import PageTitle from '@/components/Common/PageTitle';
import { getMetadata } from '@/app/config/pageMetadata';
import SeoSchemaInjector from '@/components/SEO/SeoSchemaInjector';
import { mentionsLegalesSchema } from '@/app/config/pageSchema';

export const metadata: Metadata = getMetadata('mentions-legales');

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Injection unique du JSON-LD */}
      <SeoSchemaInjector schema={mentionsLegalesSchema} />

      <PageTitle
        pageTitle="Mentions légales"
        pageDescription="Mentions légales de la Conciergerie Alsacienne : éditeur, hébergeur, droits d'auteur, protection des données et cookies"
        showMenu
      />

      <main role="main" className="prose mx-auto max-w-[1300px] px-4 py-10">
        <section>
          <h2>1. Éditeur du site</h2>
          <ul>
            <li>
              <strong>Raison sociale :</strong> La Conciergerie Alsacienne
            </li>
            <li>
              <strong>Forme juridique :</strong> SASU (société par actions simplifiée
              unipersonnelle)
            </li>
            <li>
              <strong>Capital social :</strong> 100,00 €
            </li>
            <li>
              <strong>Siège social :</strong> 5 bis rue de Margnolles, 69300 Caluire-et-Cuire,
              France
            </li>
            <li>
              <strong>SIREN :</strong> 938 391 158
            </li>
            <li>
              <strong>SIRET (siège) :</strong> 938 391 158 00012
            </li>
            <li>
              <strong>RCS :</strong> R.C.S. Lyon 938 391 158
            </li>
            <li>
              <strong>Numéro de TVA intracommunautaire :</strong> FR07938391158
            </li>
          </ul>
        </section>

        <section>
          <h2>2. Directeur de la publication</h2>
          <p>Jean-François Atlan, Président</p>
        </section>

        <section>
          <h2>3. Hébergement</h2>
          <p>
            Le site est hébergé par <strong>Vercel Inc.</strong>, Delaware corporation (Delaware
            5857312), dont le siège social est situé au 440 N Barranca Ave #4133, Covina, CA 91723,
            États-Unis.
          </p>
        </section>

        <section>
          <h2>4. Contact</h2>
          <ul>
            <li>
              Par e-mail :
              <a href="mailto:contact@conciergerie-alsacienne.fr">
                contact@conciergerie-alsacienne.fr
              </a>
            </li>
            <li>Par téléphone : 00 33 6 21 47 19 22</li>
          </ul>
        </section>

        <section>
          <h2>5. Propriété intellectuelle</h2>
          <p>
            Le contenu de ce site, y compris les textes, graphiques, images et logos, est la
            propriété de la Concierge Alsacienne, à l'exception des éléments appartenant à d'autres
            sociétés partenaires ou auteurs. Toute reproduction, modification, publication ou
            adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le
            processus utilisé, est interdite sans l'accord préalable écrit de l'éditeur.
          </p>
          <p>
            Tout usage non autorisé de ce site ou de l'un quelconque des éléments qu'il contient
            sera considéré comme constitutif d'une contrefaçon et poursuivi conformément aux
            dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
          </p>
        </section>

        <section>
          <h2>6. Responsabilité</h2>
          <p>
            L'accès et l'utilisation du site conciergerie-alsacienne.fr sont soumis à l'acceptation
            et au respect des présentes conditions générales d'utilisation. La Concierge Alsacienne
            se réserve le droit de modifier ces conditions à tout moment&nbsp;; les utilisateurs
            sont invités à les consulter régulièrement.
          </p>
        </section>

        <section>
          <h2>7. Données personnelles &amp; Cookies</h2>
          <p>
            Conformément à la loi Informatique et Libertés n° 78-17 du 6 janvier 1978 modifiée et au
            RGPD, vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression
            des données personnelles vous concernant (art. 34). Pour l'exercer :
            <a href="mailto:contact@conciergerie-alsacienne.fr">
              contact@conciergerie-alsacienne.fr
            </a>
            .
          </p>
          <p>
            Les données collectées peuvent inclure des informations de réservation, de gestion
            d'accès ou de lutte anti-fraude. Aucune transmission à des tiers sans consentement
            préalable.
          </p>
          <p>
            Des mesures techniques et organisationnelles sont en place pour protéger vos données
            contre tout accès non autorisé, perte ou destruction. La Concierge Alsacienne se réserve
            le droit de modifier à tout moment la présente page et la politique en matière de
            cookies&nbsp;; veuillez la consulter régulièrement.
          </p>
        </section>

        <section>
          <h2>8. Mentions complémentaires</h2>
          <p>
            Pour toute question relative aux conditions générales de vente ou à la médiation de la
            consommation, veuillez consulter notre page
            <a href="/cgv">Conditions Générales de Vente</a> ou contacter notre médiateur.
          </p>
        </section>
      </main>
    </>
  );
}
