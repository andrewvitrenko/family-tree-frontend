export type TOrientation = 'up' | 'down' | 'left' | 'right';

export type TChevronProps = {
  className?: string;
  size?: number;
  disabled?: boolean;
  orientation?: TOrientation;
};
