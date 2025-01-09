import './global.css';

import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';

import { QueryProvider } from '@/features/query-provider';
import { Toaster } from '@/features/toaster';
import theme from '@/shared/config/theme';

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
              <Toaster position="bottom-center" />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
