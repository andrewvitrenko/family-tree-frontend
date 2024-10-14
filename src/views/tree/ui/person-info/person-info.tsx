import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FC, memo } from 'react';

import { Divider } from '@/shared/ui';

import Dates from '../dates';
import Name from '../name';
import { TPersonInfoProps } from './model/props.model';
import * as styles from './styles';

const PersonInfo: FC<TPersonInfoProps> = ({
  firstName,
  lastName,
  dateOfBirth,
  dateOfDeath,
}) => {
  return (
    <Card sx={styles.container}>
      <CardContent>
        <Name firstName={firstName} lastName={lastName} />
        <Divider sx={styles.divider} />
        <Dates dateOfBirth={dateOfBirth} dateOfDeath={dateOfDeath} />
      </CardContent>
    </Card>
  );
};

export default memo(PersonInfo);
