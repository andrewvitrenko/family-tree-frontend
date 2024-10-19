import Typography from '@mui/material/Typography';
import { FC, memo } from 'react';

import { TNameProps } from './model/props.model';
import * as styles from './styles';

const Name: FC<TNameProps> = ({ firstName, lastName }) => {
  return (
    <Typography sx={styles.name}>
      {firstName} {lastName}
    </Typography>
  );
};

export default memo(Name);
