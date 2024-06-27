import { Theme } from '@mui/material';
import { ModalProps } from '@mui/material/Modal';
import { SxProps } from '@mui/system';

export type TModalProps = ModalProps & {
  contentSx?: SxProps<Theme>;
};
