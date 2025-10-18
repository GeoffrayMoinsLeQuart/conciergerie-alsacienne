'use client';

import FAQSimple from '../FAQSimple';

const faqs = [
  {
    question: '🛋️ Quelle est la différence entre location meublée et non meublée ?',
    answer:
      'La location meublée propose un logement équipé de tous les meubles et équipements nécessaires à la vie quotidienne (lit, table, chaises, électroménager, etc.). La location non meublée (ou vide) ne comprend que les installations fixes. Fiscalement, la location meublée relève du régime BIC tandis que la location vide relève des revenus fonciers.',
  },
  {
    question: '🛡️ Comment fonctionne la garantie loyers impayés ?',
    answer:
      "Notre garantie loyers impayés (GLI) vous protège à 100% dès le premier jour de retard. Nous vous versons l'intégralité du loyer et des charges à date fixe, sans franchise ni carence. La garantie couvre également les frais de contentieux, d'expulsion, les dégradations et même le squat. Elle est incluse dans nos formules Sérénité et Premium.",
  },
  {
    question: '💰 Combien vais-je gagner avec mon bien ?',
    answer:
      "Vos revenus dépendent du loyer de marché, du taux d'occupation et de la formule choisie. En moyenne, nos clients bénéficient d'un taux d'occupation de 98%. Utilisez notre simulateur en ligne pour obtenir une estimation personnalisée selon votre bien et votre localisation (Mulhouse, Colmar, Strasbourg).",
  },
  {
    question: '🔁 Puis-je changer de formule en cours de mandat ?',
    answer:
      "Oui, vous pouvez évoluer vers une formule supérieure à tout moment (par exemple, passer d'Essentielle à Sérénité). Le changement prend effet dès le mois suivant votre demande. Nous adaptons nos services à l'évolution de vos besoins.",
  },
  {
    question: '👤 Comment sont sélectionnés les locataires ?',
    answer:
      "Nous appliquons une sélection rigoureuse : vérification des revenus (taux d'effort < 33%), vérification d'identité, enquête auprès des anciens bailleurs, analyse du dossier complet. Nous privilégions des profils stables avec des garanties solides pour sécuriser votre investissement.",
  },
  {
    question: '📊 Quels sont les frais de gestion ?',
    answer:
      "Nos frais de gestion mensuels sont de 6% HT (Essentielle), 7,5% HT (Sérénité) ou 9% HT (Premium) des loyers encaissés. Des frais de mise en location équivalents à un mois de loyer HT s'appliquent lors de la première location ou d'une relocation. Aucun frais caché.",
  },
  {
    question: '🔧 Gérez-vous les petits travaux ou problèmes techniques ?',
    answer:
      "Oui, nous gérons l'ensemble des interventions techniques : dépannages d'urgence 24h/24, maintenance préventive, coordination des artisans, suivi des travaux. Selon la formule choisie, nous effectuons également des visites techniques régulières (annuelles ou semestrielles).",
  },
  {
    question: '📅 Quand suis-je payé ?',
    answer:
      "Vous recevez vos loyers à date fixe chaque mois, généralement entre le 5 et le 10 du mois. Avec la garantie loyers impayés (formules Sérénité et Premium), le paiement est garanti même en cas d'impayé du locataire.",
  },
  {
    question: '🧾 Qui gère les quittances, les appels de loyers, et les documents administratifs ?',
    answer:
      "Nous gérons l'intégralité de l'administratif : envoi des appels de loyer, édition des quittances, régularisation des charges, révision annuelle du loyer, déclarations fiscales. Vous accédez à tous vos documents via votre espace propriétaire en ligne.",
  },
  {
    question: '📊 Comment puis-je suivre mes revenus ?',
    answer:
      "Vous disposez d'un espace propriétaire en ligne accessible 24h/24 avec : tableau de bord mensuel, historique des paiements, suivi des interventions, documents comptables. Selon votre formule, vous recevez également un bilan de gestion annuel détaillé.",
  },
  {
    question: "🛠️ Proposez-vous un service d'état des lieux et d'entrée-sortie ?",
    answer:
      "Oui, nous réalisons des états des lieux d'entrée et de sortie détaillés avec photos et descriptions précises. Ces documents sont essentiels pour protéger votre bien et faciliter la restitution du dépôt de garantie en cas de dégradation.",
  },
  {
    question: '📝 Dois-je faire des démarches légales ?',
    answer:
      "Non, nous nous occupons de toutes les démarches légales : rédaction du bail conforme, annexes obligatoires (DPE, diagnostics), déclaration en mairie si nécessaire, gestion des congés et renouvellements. Vous n'avez aucune démarche administrative à effectuer.",
  },
];

export default function FAQSection() {
  return <FAQSimple faqs={faqs} />;
}
