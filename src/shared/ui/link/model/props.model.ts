import { LinkProps } from 'next/link';
import { HTMLProps } from 'react';

import { ERoute } from '@/shared/model/navigation.model';

export type TLinkProps = HTMLProps<HTMLAnchorElement> &
  Omit<LinkProps, 'href'> & {
    href: ERoute;
  };
