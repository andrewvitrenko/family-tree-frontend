import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { FC } from 'react';

import { TLinkProps } from './types';

const Link: FC<TLinkProps> = ({ to, children, ...props }) => {
  return (
    <MuiLink href={to} {...props} component={NextLink}>
      <Typography>{children}</Typography>
    </MuiLink>
  );
};

export default Link;
