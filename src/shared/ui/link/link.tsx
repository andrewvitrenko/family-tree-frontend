import { Link as MuiLink, Typography } from '@mui/material';
import NextLink from 'next/link';
import { FC, memo } from 'react';

import { TLinkProps } from './model/props.model';

const Link: FC<TLinkProps> = ({ to, children, ...props }) => {
  return (
    <MuiLink href={to} {...props} component={NextLink}>
      <Typography>{children}</Typography>
    </MuiLink>
  );
};

export default memo(Link);
