import Typography from '@mui/material/Typography';
import { differenceInYears, format } from 'date-fns';
import { FC, memo } from 'react';

import { TDatesProps } from './model/props,model';
import * as styles from './styles';

const Dates: FC<TDatesProps> = ({ dateOfBirth, dateOfDeath }) => {
  return (
    <>
      <Typography sx={styles.content}>
        {format(dateOfBirth, 'dd MMMM yyyy')}
      </Typography>
      {dateOfDeath && (
        <Typography sx={styles.content}>
          - {format(dateOfDeath, 'dd MMMM yyyy')}
        </Typography>
      )}
      <Typography sx={styles.content}>
        {differenceInYears(dateOfDeath ?? new Date(), dateOfBirth)}
      </Typography>
    </>
  );
};

export default memo(Dates);
