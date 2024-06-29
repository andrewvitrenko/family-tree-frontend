import { DefaultOptions } from 'react-query';

const defaultOptions: DefaultOptions = {
  mutations: { retry: false },
  queries: {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  },
};

export default defaultOptions;
