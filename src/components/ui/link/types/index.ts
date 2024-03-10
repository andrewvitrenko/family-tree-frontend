import { LinkProps as MuiLinkProps } from '@mui/material/Link';

import { ERoute } from '@/types/routes';

export type TLinkProps = Omit<MuiLinkProps, 'href'> & {
  to: ERoute;
};
