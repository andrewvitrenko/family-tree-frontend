import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';

export type TConnectionButtonProps = {
  sx?: SxProps<Theme>;
  connectionType: 'parent' | 'child';
  sourceId: string;
};
