'use client';

import { CardContent } from '@mui/material';
import Card from '@mui/material/Card';
import { FC, memo } from 'react';

import { TPerson } from '@/entities/trees';
import { TNodeProps } from '@/features/flow/model/node.model';
import { Divider } from '@/shared/ui';

import Dates from '../dates';
import Handlers from '../handlers';
import Name from '../name';
import * as styles from './styles';

const PersonNode: FC<TNodeProps<TPerson>> = ({ data }) => {
  const { firstName, lastName, sex, dateOfBirth, dateOfDeath } = data;

  return (
    <Card sx={styles.container}>
      <Handlers sex={sex} />
      <CardContent>
        <Name firstName={firstName} lastName={lastName} />
        <Divider sx={styles.divider} />
        <Dates dateOfBirth={dateOfBirth} dateOfDeath={dateOfDeath} />
      </CardContent>
    </Card>
  );
};

export default memo(PersonNode);
