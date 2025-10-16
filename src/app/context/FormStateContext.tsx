'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

export interface FormState {
  data: Record<string, any> | null;
  source?: 'questionnaire' | 'simulateur' | 'autre';
}

interface FormStateContextType {
  formState: FormState;
  setFormState: (data: FormState) => void;
  clearFormState: () => void;
}

const FormStateContext = createContext<FormStateContextType | undefined>(undefined);

export const FormStateProvider = ({ children }: { children: ReactNode }) => {
  const [formState, setFormStateInternal] = useState<FormState>({ data: null });

  const setFormState = (data: FormState) => setFormStateInternal(data);
  const clearFormState = () => setFormStateInternal({ data: null });

  return (
    <FormStateContext.Provider value={{ formState, setFormState, clearFormState }}>
      {children}
    </FormStateContext.Provider>
  );
};

export const useFormState = () => {
  const ctx = useContext(FormStateContext);
  if (!ctx) throw new Error('useFormState must be used inside <FormStateProvider>');
  return ctx;
};
