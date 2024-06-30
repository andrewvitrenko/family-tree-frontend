import { LinkProps as MuiLinkProps } from '@mui/material/Link';

import { ERoute } from '@/shared/model/navigation.model';

export type TLinkProps = Omit<MuiLinkProps, 'href'> & {
  to: ERoute;
};
