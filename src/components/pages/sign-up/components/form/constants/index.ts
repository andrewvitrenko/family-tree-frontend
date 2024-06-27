import { TSelectOption } from '@/shared/ui/select';
import { ESex } from '@/types/user';

export const sexes: TSelectOption<ESex>[] = [
  { label: 'Male', value: ESex.MALE },
  { label: 'Female', value: ESex.FEMALE },
];
