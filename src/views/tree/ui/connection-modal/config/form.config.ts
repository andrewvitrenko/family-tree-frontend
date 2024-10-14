import { ESex } from '@/entities/user';
import { TSelectOption } from '@/shared/ui/select';

export const sexes: TSelectOption<ESex>[] = [
  { label: 'Male', value: ESex.MALE },
  { label: 'Female', value: ESex.FEMALE },
];
