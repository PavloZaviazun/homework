import React from 'react';
import {PageLayout} from "./layouts";
import {Home} from "./components/home";

export const App = () => {



  return (
      <div>
        <PageLayout>
          <Home/>
        </PageLayout>
      </div>
  )
}
