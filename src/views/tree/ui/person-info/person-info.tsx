import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FC, memo } from 'react';

import { Divider } from '@/shared/ui';

import { Dates } from '../dates';
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
        <h2 className="text-center font-bold">
          {firstName} {lastName}
        </h2>
        <Divider className="my-2" />
        <Dates dateOfBirth={dateOfBirth} dateOfDeath={dateOfDeath} />
      </CardContent>
    </Card>
  );
};

export default memo(PersonInfo);
