'use client';

import ClearIcon from '@mui/icons-material/ClearRounded';
import SearchIcon from '@mui/icons-material/SearchRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { ChangeEvent, FC, memo, useEffect, useRef, useState } from 'react';

import { useDebounce } from '@/shared/hooks';
import { CreateTree } from '@/views/home/ui';

import { TToolbarProps } from './model/props.model';
import * as styles from './styles';

const Toolbar: FC<TToolbarProps> = ({ setDebouncedSearch }) => {
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
    setDebouncedSearch(debouncedSearch.trim());
  }, [debouncedSearch, setDebouncedSearch]);

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
      <CreateTree />
    </Box>
  );
};

export default memo(Toolbar);
