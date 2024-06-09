import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FC, memo } from 'react';

import { useTreesListContext } from '../../../../trees-list';
import * as styles from './styles';
import { TTreeCardProps } from './types';

const TreeCard: FC<TTreeCardProps> = (props) => {
  const { openDeleteModal, openUpdateModal } = useTreesListContext();

  const onDeleteClick = () => openDeleteModal(props);
  const onEditClick = () => openUpdateModal(props);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{props.name}</Typography>
      </CardContent>
      <CardActions sx={styles.actions}>
        <IconButton color="primary" onClick={onEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton color="warning" onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default memo(TreeCard);
