import { ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';

import { theme, GlobalStyle } from '@/themes';
import appRouter from '@/routes';
import AppLayout from '@/components/AppLayout';

import 'antd/dist/antd.less';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <RouterProvider router={appRouter} />
      </AppLayout>
      <GlobalStyle theme={theme} />
    </ThemeProvider>
  );
}

export default App;
