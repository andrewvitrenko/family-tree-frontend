import './global.css';

import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';

import { QueryProvider, ToastProvider } from '@/components/providers';
import theme from '@/theme';

export const metadata: Metadata = {
  title: 'Family tree',
  description: 'Where your bloodline watches you',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ToastProvider />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
