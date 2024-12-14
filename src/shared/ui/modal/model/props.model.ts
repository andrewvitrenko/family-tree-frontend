import { Theme } from '@mui/material';
import { ModalProps as MuiModalProps } from '@mui/material/Modal';
import { SxProps } from '@mui/system';

export type TModalProps = MuiModalProps & {
  sx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
};
