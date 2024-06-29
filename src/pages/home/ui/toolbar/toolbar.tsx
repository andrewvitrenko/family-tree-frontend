import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/ClearRounded';
import SearchIcon from '@mui/icons-material/SearchRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { ChangeEvent, FC, memo, useEffect, useRef, useState } from 'react';

import { useDebounce } from '@/hooks/use-debounce';
import { Button } from '@/shared/ui';

import { useTreesListContext } from '../trees';
import * as styles from './styles';

const Toolbar: FC = () => {
  const { openCreateModal, setSearch: setDebounceSearch } =
    useTreesListContext();

  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce(search);
  const ref = useRef<HTMLInputElement>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const onClear = () => {
    setSearch('');
    ref.current?.focus();
  };

  useEffect(() => {
    setDebounceSearch(debouncedSearch.trim());
  }, [debouncedSearch, setDebounceSearch]);

  return (
    <Box sx={styles.container}>
      <TextField
        variant="filled"
        placeholder="Search"
        sx={styles.input}
        InputProps={{
          startAdornment: <SearchIcon />,
          endAdornment: (
            <IconButton onClick={onClear}>
              <ClearIcon />
            </IconButton>
          ),
        }}
        value={search}
        inputRef={ref}
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
