import { ArrowRight } from 'lucide-react';
import { Button } from '../Buttons/button';

const ResultsBannerSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#E63946] via-blue-600 to-blue-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center space-y-6">
        <h3 className="text-3xl md:text-4xl font-bold leading-snug drop-shadow-sm">
          98 % de taux d'occupation moyen pour nos propriétaires
        </h3>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Mulhouse • Colmar • Strasbourg — +100 biens gérés, loyers versés à date fixe
        </p>
        <Button
          size="lg"
          className="bg-white text-[#E63946] border-2 border-transparent font-semibold px-8 py-6 shadow-xl hover:scale-105 hover:shadow-2xl hover:border-white hover:bg-[#E63946] hover:text-white transition-all duration-300"
        >
          Estimer mes revenus locatifs
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default ResultsBannerSection;