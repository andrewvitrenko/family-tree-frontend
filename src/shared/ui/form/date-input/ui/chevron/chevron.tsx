import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  LucideProps,
} from 'lucide-react';
import { FC, memo, useMemo } from 'react';

import { TChevronProps, TOrientation } from './model/props.model';

const iconsMap: Record<TOrientation, FC<LucideProps>> = {
  down: ChevronDown,
  up: ChevronUp,
  left: ChevronLeft,
  right: ChevronRight,
};

export const Chevron: FC<TChevronProps> = memo(
  ({ orientation = 'right', ...props }) => {
    const Component = useMemo(() => iconsMap[orientation], [orientation]);

    return <Component {...props} />;
  },
);

Chevron.displayName = 'Chevron';
