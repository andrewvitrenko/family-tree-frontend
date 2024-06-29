import { LinkProps as MuiLinkProps } from '@mui/material/Link';

import { ERoute } from '@/shared/model/navigation';

export type TLinkProps = Omit<MuiLinkProps, 'href'> & {
  to: ERoute;
};
