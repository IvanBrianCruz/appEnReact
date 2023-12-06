
import Sidebar from './components/Sidebar';
// import Sidebar from './components/Sidebar-v5'

import ContentWrapper from './components/ContentWrapper'

import DataContent from './components/DataContent';
import ContentRowTop from './components/ContentRowTop';
import Topbar from './components/Topbar';
import LastMovie from './components/LastMovie';
import Genres from './components/Genres';
import Movies from './components/Movies';
import Form from './components/Form';
import GamesTable from "./components/GamesTable"

// Switch ---> Routes
import { Routes, Route } from 'react-router-dom';

/**
 * 
 * Movies
  ContentRowTop
  Genres
  LastMovie
 */

function App() {

  return (
    <>
      <div id="wrapper">

        {/* Sidebar */}
        <Sidebar />
        {/* <Form/> */}
        {/* End of Sidebar */}

        {/* Ruteo */}
        <Routes>
          <Route path='/' exact element={<ContentWrapper/>} />
          <Route path='/last-movie/:id' exact element={<LastMovie/>} />
          <Route path='/pages' exact element={<Genres/>} />
          <Route path='/tables' exact element={<GamesTable/>} />
        </Routes>



        {/* ********* */}

        {/* Content Wrapper */}
        {/* <ContentWrapper/> */}
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
    </>

  )
}

export default App

// function App() {

//   return (
//     <>
//       <div id="wrapper">

//         {/* Sidebar */}
//         <Sidebar />
//         {/* <Form/> */}
//         {/* End of Sidebar */}

// {/*         
//         <Routes>
//           <Route
//             path='/'
//             exact
//             element={<Movies/>}
//           />

//           <Route
//             exact
//             path='/pages'
//             element={<ContentRowTop />}
//           />
//           <Route
//             exact
//             path='/tables'
//             element={<Genres />}
//           />
//           <Route
//             exact
//             path='/charts/:id'
//             element={<LastMovie />}
//           />

//         </Routes> */}
//         {/* Content Wrapper */}
//         <ContentWrapper/>
//         {/* End of Content Wrapper */}
//       </div>
//       {/* End of Page Wrapper */}
//     </>

//   )
// }

// export default App
