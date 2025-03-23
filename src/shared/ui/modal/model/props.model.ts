import { SxProps, Theme } from '@mui/material';
import { ModalProps as MuiModalProps } from '@mui/material/Modal';

export type TModalProps = MuiModalProps & {
  sx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
};
