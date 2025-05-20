'use client';

import { cn } from '@/utils/utils';
import * as React from 'react';
import SectionTitle from '@/components/Common/SectionTitle';
import { t } from '@/app/libs/content';

interface TimelineItem {
  title: string;
  points: string[];
}

// Contexte Tabs
const TabsContext = React.createContext<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
} | null>(null);

// Composant racine Tabs
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  children: React.ReactNode;
}
function Tabs({ defaultValue, children, ...props }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);
  return (
    <div {...props}>
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabsContext.Provider>
    </div>
  );
}

// Liste des onglets
interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
function TabsList({ children, className, ...props }: TabsListProps) {
  return (
    <div
      className={cn('flex flex-wrap justify-center gap-4 rounded-xl bg-gray-100 p-4', className)}
      role="tablist"
      aria-label="Choisissez votre profil de propriétaire"
      {...props}
    >
      {children}
    </div>
  );
}

// Bouton onglet
interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: React.ReactNode;
}
function TabsTrigger({ value, children, className, ...props }: TabsTriggerProps) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error('TabsTrigger doit être utilisé dans Tabs');
  const isActive = ctx.activeTab === value;
  return (
    <button
      role="tab"
      id={`tab-${value}`}
      aria-controls={`tabpanel-${value}`}
      aria-selected={isActive}
      onClick={() => ctx.setActiveTab(value)}
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

// Contenu onglet
interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}
function TabsContent({ value, children, className, ...props }: TabsContentProps) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error('TabsContent doit être utilisé dans Tabs');
  if (ctx.activeTab !== value) return null;
  return (
    <div
      id={`tabpanel-${value}`}
      role="tabpanel"
      aria-labelledby={`tab-${value}`}
      tabIndex={0}
      className={cn('animate-fade-in-up mt-6', className)}
      {...props}
    >
      {children}
    </div>
  );
}

// Composant Timeline (identique à l'original)
const TimelineProcessus: React.FC<{ steps: TimelineItem[] }> = ({ steps }) => (
  <div
    className="relative flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-between"
    aria-label="Étapes du parcours"
  >
    {steps.map((step, idx) => (
      <div
        key={idx}
        className="animate-slide-up relative flex-1 rounded-xl bg-white p-6 shadow-lg md:max-w-[32%]"
      >
        {idx < steps.length - 1 && (
          <div className="absolute right-0 top-1/2 hidden h-1 w-10 translate-x-full transform bg-primary md:block" />
        )}
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow">
          {idx + 1}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-gray-800">{step.title}</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {step.points.map((pt, j) => (
            <li key={j} className="mb-1 text-sm">
              {pt}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

// Composant principal
const TabsProfilProprietaire: React.FC = () => {
  const pageKey = 'gestionLocative';
  const baseKey = 'GestionLocative.TabsProfilProprietaire';

  // Récupération dynamique depuis le JSON
  const mainTitle = t(pageKey, `${baseKey}.mainTitle`) as string;
  const sectionId = t(pageKey, `${baseKey}.sectionId`) as string;
  const headingId = t(pageKey, `${baseKey}.headingId`) as string;
  const tabs = t(pageKey, `${baseKey}.tabs`) as { value: string; label: string }[];
  const timelines = t(pageKey, `${baseKey}.timelines`) as Record<string, TimelineItem[]>;

  return (
    <section className="bg-white py-20" id={sectionId} role="region" aria-labelledby={headingId}>
      <div className="container">
        <header className="text-center mb-10">
          <h2 id={headingId} className="text-3xl font-bold">
            {mainTitle}
          </h2>
        </header>

        <Tabs defaultValue={tabs[0].value}>
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <TimelineProcessus steps={timelines[tab.value] || []} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TabsProfilProprietaire;
