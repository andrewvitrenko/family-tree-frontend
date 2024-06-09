import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ChangeEvent, FC, memo, useEffect, useState } from 'react';

import { Button } from '@/components/ui';
import { useDebounce } from '@/hooks/use-debounce';

import { useTreesListContext } from '../../trees-list';
import * as styles from './styles';

const Toolbar: FC = () => {
  const { openCreateModal, setSearch: setDebounceSearch } =
    useTreesListContext();

  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce(search);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  useEffect(() => {
    setDebounceSearch(debouncedSearch.trim());
  }, [debouncedSearch, setDebounceSearch]);

  return (
    <Box sx={styles.container}>
      <TextField
        variant="filled"
        placeholder="Search"
        sx={styles.input}
        InputProps={{ startAdornment: <SearchIcon /> }}
        value={search}
        onChange={onChange}
      />
      <Button
        variant="text"
        sx={styles.button}
        onClick={openCreateModal}
        startIcon={<AddIcon />}
      >
        Create
      </Button>
    </Box>
  );
};

export default memo(Toolbar);
