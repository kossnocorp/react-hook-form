import { FieldValues } from './fields';
import { FieldPath, FieldPathValue } from './path';

export type Sync<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
> = (name: TFieldName, value: FieldPathValue<TFieldValues, TFieldName>) => void;
