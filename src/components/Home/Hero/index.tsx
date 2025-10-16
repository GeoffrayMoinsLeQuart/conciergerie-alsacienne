'use client';
import MultiStepQuestionnaire from '@/components/MultiStepQuestionnaire';
import { Phone } from 'lucide-react';
import { useHeaderOffset } from '@/hooks/useHeaderOffset'; // ✅ nouveau hook

const Hero = () => {
  const { paddingTop } = useHeaderOffset('2rem'); // ✅ calcule la hauteur dynamique du header

  return (
    <section
      className="
        relative 
        flex 
        items-center 
        overflow-hidden 
        bg-gradient-to-br 
        from-[#0048BA] 
        to-[#0072FF]
      "
      style={{
        paddingTop, // 👈 applique le hook ici
        paddingBottom: '5rem',
        minHeight: '100vh',
      }}
    >
      {/* Motif discret */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Transformez votre bien <br />
            en <span className="text-yellow-400 drop-shadow-lg">machine à revenus</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium animate-fade-in">
            <span className="text-yellow-400 font-bold">+40% de revenus</span> dès le 1er mois |
            Mulhouse & Alsace | <span className="text-yellow-400 font-bold">€2.1M</span> générés
            pour nos clients
          </p>

          <div className="mb-8 animate-scale-in">
            <MultiStepQuestionnaire />
          </div>

          {/* Zone de confiance */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-white/80 animate-fade-in">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/20 border-2 border-white backdrop-blur-sm"
                />
              ))}
            </div>

            <p className="text-sm text-center sm:text-left">
              <span className="font-bold text-white">+50 propriétaires</span> nous font confiance
            </p>

            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-elegant">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm text-primary">Réponse sous 2 h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
