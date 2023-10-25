import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { Home } from '../components/pages/Home/Home';

export const AppRouter = () => {

    //const font = "";  //To Develop
  const font = "/ceai-sima";  //To Production

  return (

    <BrowserRouter>
        <Routes>
            <Route path={font} element={<Home />}/>
            <Route path={font + "/principal"} element={<></>}/>
        </Routes>
    </BrowserRouter>
  )
}
