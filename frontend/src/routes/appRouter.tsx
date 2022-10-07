import { createBrowserRouter } from 'react-router-dom';

import Index from '@/containers/index';

const appRouter = createBrowserRouter([{ path: '/', element: <Index /> }]);

export default appRouter;
