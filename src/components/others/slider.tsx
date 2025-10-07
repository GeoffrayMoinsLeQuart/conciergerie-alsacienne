import * as React from 'react';
import { cn } from '@/utils/utils';

interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value?: number[];
  onValueChange?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, value = [0], onValueChange, min = 0, max = 100, step = 1, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = Number(e.target.value);
      onValueChange?.([val]);
    };

    return (
      <div className={cn('relative w-full flex items-center', className)}>
        {/* Barre de progression */}
        <div
          className="absolute left-0 h-2 rounded-full bg-primary transition-all"
          style={{
            width: `${((value[0] - min) / (max - min)) * 100}%`,
          }}
        />
        {/* Input range */}
        <input
          ref={ref}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[0]}
          onChange={handleChange}
          className={cn(
            'relative w-full h-2 appearance-none rounded-full bg-gray-200 outline-none cursor-pointer',
            '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5',
            '[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary',
            '[&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white',
            '[&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110',
          )}
        />
        <div
          className="absolute top-0 left-0 h-2 rounded-full bg-primary transition-all duration-300"
          style={{ width: `${((value[0] - min) / (max - min)) * 100}%` }}
        />
      </div>
    );
  },
);

Slider.displayName = 'Slider';

export { Slider };
