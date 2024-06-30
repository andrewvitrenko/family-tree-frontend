import { FC, memo } from 'react';

import { Loader, Modal } from '@/shared/ui';

const FullscreenLoader: FC = () => {
  return (
    <Modal open>
      <Loader size={60} thickness={2} />
    </Modal>
  );
};

export default memo(FullscreenLoader);
