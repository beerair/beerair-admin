import { ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';

import { theme, GlobalStyle } from '@/themes';
import appRouter from '@/routes';

import 'antd/dist/antd.less';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={appRouter} />
      <GlobalStyle theme={theme} />
    </ThemeProvider>
  );
}

export default App;
