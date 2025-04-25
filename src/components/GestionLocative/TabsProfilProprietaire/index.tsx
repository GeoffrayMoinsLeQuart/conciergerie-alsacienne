'use client';

import { cn } from '@/utils/utils';
import * as React from 'react';

// Tabs Context
const TabsContext = React.createContext<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
} | null>(null);

// Tabs
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, children, className, ...props }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <div className={cn('w-full', className)} {...props}>
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabsContext.Provider>
    </div>
  );
}

// Tabs List
interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function TabsList({ children, className, ...props }: TabsListProps) {
  return (
    <div
      className={cn('flex flex-wrap justify-center gap-4 rounded-xl bg-gray-100 p-4', className)}
      {...props}
    >
      {children}
    </div>
  );
}

// Tabs Trigger
interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: React.ReactNode;
}

export function TabsTrigger({ value, children, className, ...props }: TabsTriggerProps) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');
  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={cn(
        'rounded-full px-6 py-3 text-sm font-semibold shadow-md transition',
        isActive
          ? 'scale-[1.05] bg-primary text-white'
          : 'bg-white text-gray-600 hover:text-primary',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Tabs Content
interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}

export function TabsContent({ value, children, className, ...props }: TabsContentProps) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error('TabsContent must be used within Tabs');
  const { activeTab } = context;
  if (activeTab !== value) return null;

  return (
    <div className={cn('animate-fade-in-up mt-6', className)} {...props}>
      {children}
    </div>
  );
}

// TimelineProcessus
interface TimelineItem {
  title: string;
  points: string[];
}

const TimelineProcessus: React.FC<{ steps: TimelineItem[] }> = ({ steps }) => {
  return (
    <div className="relative flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-between">
      {steps &&
        steps.map((step, index) => (
          <div
            key={index}
            className="animate-slide-up relative flex-1 rounded-xl bg-white p-6 shadow-lg md:max-w-[32%]"
          >
            {index < steps.length - 1 && (
              <div className="absolute right-0 top-1/2 hidden h-1 w-10 translate-x-full transform bg-primary md:block"></div>
            )}
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow">
              {index + 1}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">{step.title}</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {step.points.map((point, idx) => (
                <li key={idx} className="mb-1 text-sm">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

const TabsProfilProprietaire: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Un parcours adapté à chaque propriétaire
        </h2>

        <Tabs defaultValue="investisseur">
          <TabsList>
            <TabsTrigger value="investisseur">📊 Investisseur</TabsTrigger>
            <TabsTrigger value="expatrie">✈️ Expatrié</TabsTrigger>
            <TabsTrigger value="primo">🧭 Primo-bailleur</TabsTrigger>
          </TabsList>

          <TabsContent value="investisseur">
            <TimelineProcessus steps={timelineInvestisseur} />
          </TabsContent>
          <TabsContent value="expatrie">
            <TimelineProcessus steps={timelineExpatrie} />
          </TabsContent>
          <TabsContent value="primo">
            <TimelineProcessus steps={timelinePrimo} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TabsProfilProprietaire;

const timelineInvestisseur = [
  {
    title: 'Optimisation de la rentabilité',
    points: [
      'Évaluation précise du loyer de marché',
      'Conseils fiscaux et patrimoniaux',
      'Stratégie de valorisation long terme',
    ],
  },
  {
    title: 'Gestion technique complète',
    points: ['Suivi des interventions', 'Maintenance préventive', 'Visites techniques régulières'],
  },
  {
    title: 'Reporting et transparence',
    points: [
      'Tableau de bord mensuel',
      'Analyse des rendements',
      'Accompagnement pour arbitrage ou revente',
    ],
  },
];

const timelineExpatrie = [
  {
    title: 'Sérénité à distance',
    points: [
      'Interlocuteur unique 7j/7',
      'Réactivité face aux urgences',
      'Aucune présence requise sur place',
    ],
  },
  {
    title: 'Garantie totale',
    points: [
      'Loyers garantis à date fixe',
      'Protection juridique intégrée',
      'Assurance dégradations locatives',
    ],
  },
  {
    title: 'Communication continue',
    points: [
      'Reporting clair et périodique',
      'Contact WhatsApp & email réactif',
      'Suivi personnalisé à distance',
    ],
  },
];

const timelinePrimo = [
  {
    title: 'Accompagnement de A à Z',
    points: [
      'Aide pour choisir le bon bail',
      'Explication des démarches et obligations',
      'Assistance pour première mise en location',
    ],
  },
  {
    title: 'Simplicité et pédagogie',
    points: [
      'Contrats clairs et simplifiés',
      'Support permanent',
      'Réponses à toutes les questions de débutant',
    ],
  },
  {
    title: 'Montée en compétence',
    points: [
      'Suivi personnalisé',
      'Recommandations sur le long terme',
      'Formations ou documentation en option',
    ],
  },
];
