'use client';

import FAQSimple from "../FAQSimple";

const faqs = [
  {
    question: 'Comment sont calculés vos honoraires ?',
    answer:
      'Nous travaillons uniquement au pourcentage sur les revenus générés par votre bien. Pas de frais fixes : nous ne gagnons que si votre bien performe. Notre commission varie selon la formule choisie et le niveau de service. Contactez-nous pour un devis personnalisé et transparent.',
  },
  {
    question: "Qui s'occupe de l'entretien et du ménage ?",
    answer:
      "Notre équipe de professionnels qualifiés gère l'entretien complet de votre bien. Un ménage approfondi est effectué après chaque départ de voyageur. Nous effectuons également une maintenance préventive régulière et intervenons rapidement en cas de problème.",
  },
  {
    question: 'Puis-je utiliser mon bien personnellement ?',
    answer:
      'Absolument. Vous restez prioritaire sur votre bien. Il vous suffit de bloquer les dates souhaitées sur notre calendrier partagé, et nous ne prendrons aucune réservation durant cette période. Votre flexibilité est préservée.',
  },
  {
    question: 'Quelles sont mes obligations légales ?',
    answer:
      "Nous vous accompagnons dans toutes les démarches : déclaration en mairie, obtention des autorisations, respect des réglementations locales et souscription d'assurances adaptées. Nous nous assurons que votre bien est parfaitement en conformité.",
  },
  {
    question: 'Comment puis-je suivre les performances de mon bien ?',
    answer:
      "Vous recevez un rapport mensuel détaillé incluant le taux d'occupation, les revenus générés, les avis clients et les actions menées. Vous avez également accès à un espace en ligne pour suivre l'activité en temps réel.",
  },
  {
    question: "Quel est le taux d'occupation moyen ?",
    answer:
      "Nos biens affichent un taux d'occupation moyen de 98% grâce à notre présence sur toutes les grandes plateformes, notre tarification dynamique et notre service de conciergerie réactif. Les performances varient selon la localisation et la saison.",
  },
  {
    question: 'Puis-je arrêter le service quand je veux ?',
    answer:
      'Notre contrat est flexible. Vous pouvez interrompre le service avec un préavis de 3 mois. Nous croyons en une relation de confiance basée sur la performance et la satisfaction mutuelle, pas sur un engagement contraint.',
  },
  {
    question: 'Mon bien nécessite-t-il un aménagement spécifique ?',
    answer:
      "Nous évaluons votre bien lors de la première visite. Si des améliorations sont recommandées pour optimiser l'expérience client et les revenus (décoration, équipements), nous vous conseillons sans obligation. Nous pouvons aussi gérer ces aménagements pour vous.",
  },
];

function FAQSection() {
  return <FAQSimple faqs={faqs} />;
}

export default FAQSection;
