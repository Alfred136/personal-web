import type { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface FormFieldTextAreaProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
}

export type { FormFieldTextAreaProps };
