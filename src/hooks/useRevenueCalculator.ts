'use client';
import { useMemo } from 'react';

export interface RevenueInputs {
  city: string;
  surface: number;
  bedrooms: number;
  finish: string;
  hasParking: boolean;
  taxeFonciere: number;
}

export const useRevenueCalculator = (inputs: RevenueInputs) => {
  const results = useMemo(() => {
    const { city, surface, bedrooms, finish, hasParking, taxeFonciere } = inputs;

    const basePrice = city === 'Mulhouse' ? 65 : city === 'Colmar' ? 70 : 75;
    const finishFactor = finish === 'Économique' ? 0.9 : finish === 'Standard' ? 1 : 1.15;

    const dailyRate =
      (basePrice + bedrooms * 18 + surface * 0.45) * finishFactor + (hasParking ? 3 : 0);
    const occupancyRate = 0.7;
    const monthlyGross = dailyRate * 30 * occupancyRate;
    const monthlyTaxeFonciere = taxeFonciere / 12;
    const monthlyNet = Math.round(monthlyGross - monthlyTaxeFonciere);
    const traditionalRent = Math.round(surface * 13.5);
    const gain = Math.round(((monthlyNet - traditionalRent) / traditionalRent) * 100);

    return {
      dailyRate: Math.round(dailyRate),
      monthlyGross: Math.round(monthlyGross),
      monthlyNet,
      traditionalRent,
      gain,
    };
  }, [inputs]);

  return results;
};
