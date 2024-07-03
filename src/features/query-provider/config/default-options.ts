import { DefaultOptions } from '@tanstack/react-query';

const defaultOptions: DefaultOptions = {
  mutations: { retry: false },
  queries: {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    throwOnError: false,
  },
};

export default defaultOptions;
