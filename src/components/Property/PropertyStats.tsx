'use client';

import { Property } from '@/types/property';

interface Props {
  property: Property;
  variant?: 'compact' | 'extended';
}

export default function PropertyStats({ property, variant = 'extended' }: Props) {
  const { modeGestion, surface, revenuMensuel, occupation, loyer, nbChambres, categories } =
    property;

  const isConciergerie = modeGestion === 'Conciergerie';
  const isGestionLocative = modeGestion === 'Gestion Locative';

  const items = [
    surface && { label: 'Surface', value: `${surface} m²` },
    modeGestion && { label: 'Gestion', value: modeGestion },
    nbChambres && { label: 'Chambres', value: nbChambres },
    isConciergerie &&
      revenuMensuel && {
        label: 'Revenu',
        value: `${revenuMensuel} €`,
      },
    isConciergerie &&
      occupation && {
        label: 'Occupation',
        value: `${occupation}%`,
      },
    isGestionLocative &&
      loyer && {
        label: 'Loyer',
        value: `${loyer} €`,
      },
    categories?.length && {
      label: 'Type',
      value: categories.map((cat) => cat.value).join(', '),
    },
  ].filter(Boolean) as { label: string; value: string | number }[];

  return (
    <div
      className={
        variant === 'compact'
          ? 'mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-600'
          : 'grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700 sm:grid-cols-3'
      }
    >
      {items.map(({ label, value }) => (
        <div key={label}>
          <strong className="text-black">{label}</strong>
          <div>{value}</div>
        </div>
      ))}
    </div>
  );
}
