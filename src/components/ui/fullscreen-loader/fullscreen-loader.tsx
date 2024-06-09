import CircularProgress from '@mui/material/CircularProgress';
import { FC, memo } from 'react';

import { Modal } from '@/components/ui';

const FullscreenLoader: FC = () => {
  return (
    <Modal open>
      <CircularProgress size={60} thickness={2} />
    </Modal>
  );
};

export default memo(FullscreenLoader);
