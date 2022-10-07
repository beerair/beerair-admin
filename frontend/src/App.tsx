import { ThemeProvider } from '@emotion/react';

import { theme, GlobalStyle } from '@/themes';

import 'antd/dist/antd.less';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
    </ThemeProvider>
  );
}

export default App;
