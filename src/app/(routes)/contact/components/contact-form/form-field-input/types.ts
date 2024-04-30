import type { HTMLInputTypeAttribute } from 'react';
import type { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface FormFieldInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  type: HTMLInputTypeAttribute;
}

export type { FormFieldInputProps };
