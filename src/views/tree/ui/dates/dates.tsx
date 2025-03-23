import { differenceInYears, format } from 'date-fns';
import { FC, memo } from 'react';

import { TDatesProps } from './model/props.model';

export const Dates: FC<TDatesProps> = memo(({ dateOfBirth, dateOfDeath }) => {
  return (
    <p className="text-center text-sm">
      <span>{format(dateOfBirth, 'dd MMMM yyyy')}</span>
      {dateOfDeath && <span>- {format(dateOfDeath, 'dd MMMM yyyy')}</span>}
      <span>{differenceInYears(dateOfDeath ?? new Date(), dateOfBirth)}</span>
    </p>
  );
});

Dates.displayName = 'Dates';
