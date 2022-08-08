import {BrowserRouter, Route} from 'react-router-dom';

import Layout from './Components/UI/Layout/Index';
import AppRoutes from './AppRoutes';


function App() {
  return (
    <div className='App'>
      <Layout>
        <div>
          <AppRoutes />
        </div>
      </Layout>
    </div>

  );
}

export default App;
