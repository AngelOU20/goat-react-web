import { useState, type ChangeEvent } from 'react';

// Interfaz para la estructura de retorno
interface FormState<T> {
  formState: T;
  setFormState: React.Dispatch<React.SetStateAction<T>>;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
}

// export function useForm<T>(initialForm: T): FormState<T> {
export const useForm = <T>(initialForm: T): FormState<T> => {
  const [formState, setFormState] = useState<T>(initialForm);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = (): void => {
    setFormState(initialForm);
  };

  return {
    formState,
    setFormState,

    onInputChange,
    onResetForm,
  };
};
