'use client';

import ClearIcon from '@mui/icons-material/ClearRounded';
import SearchIcon from '@mui/icons-material/SearchRounded';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { ChangeEvent, FC, memo, useEffect, useRef, useState } from 'react';

import { useDebounce } from '@/shared/hooks';
import { CreateTree } from '@/views/home/ui';

import { TToolbarProps } from './model/props.model';
import * as styles from './styles';

export const Toolbar: FC<TToolbarProps> = memo(({ setDebouncedSearch }) => {
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
    <div className="flex items-end justify-between gap-4 border-b border-b-border pb-3">
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
    </div>
  );
});

Toolbar.displayName = 'Toolbar';
