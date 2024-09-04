'use client';

import { CardContent, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Handle, Position } from '@xyflow/react';
import { differenceInYears, format } from 'date-fns';
import { FC, memo } from 'react';

import { TPerson } from '@/entities/trees';
import { ESex } from '@/entities/user';
import { TNodeProps } from '@/features/flow/model/node.model';

import * as styles from './styles';

const PersonNode: FC<TNodeProps<TPerson>> = ({ data }) => {
  const { firstName, lastName, sex, dateOfBirth, dateOfDeath } = data;

  return (
    <Card sx={styles.container}>
      <Handle type="source" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
      {sex === ESex.MALE && (
        <Handle type="source" position={Position.Left} id="left" />
      )}
      {sex === ESex.FEMALE && (
        <Handle type="source" position={Position.Right} id="right" />
      )}
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="target" position={Position.Bottom} id="bottom" />
      <Handle type="target" position={Position.Left} id="left" />
      <Handle type="target" position={Position.Right} id="right" />
      <CardContent>
        <Typography>
          {firstName} {lastName}
        </Typography>
        <Box sx={styles.divider} />
        <Typography sx={styles.sex}>{sex}</Typography>
        <Typography sx={styles.date}>
          {format(dateOfBirth, 'dd MMMM yyyy')}
        </Typography>
        {dateOfDeath && (
          <Typography sx={styles.date}>
            - {format(dateOfDeath, 'dd MMMM yyyy')}
          </Typography>
        )}
        <Typography sx={styles.age}>
          {differenceInYears(dateOfDeath ?? new Date(), dateOfBirth)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default memo(PersonNode);
