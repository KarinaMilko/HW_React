// import UserLists from "./components/UserLists";

// function App() {
//   return (
//     <>
//       <UserLists />;
//     </>
//   );
// }

// export default App;

//----------------------------------------------------------------

// import SignUpForms from "./components/SignUpForms";

// function App() {
//   return <SignUpForms />;
// }

// export default App;

//---------------------------------------------------------------
import Slider from "./components/Slider";

function App() {
  const imageUrls = [
    "https://t4.ftcdn.net/jpg/02/66/31/75/240_F_266317554_kr7DPOoM5Uty0YCeFU9nDZTt4a2LeMJF.jpg",
    "https://t3.ftcdn.net/jpg/01/03/31/48/240_F_103314840_pSOFixTmp0m48TfBFoYPw0pOpoaKebwJ.jpg",
    "https://t4.ftcdn.net/jpg/04/15/79/09/240_F_415790935_7va5lMHOmyhvAcdskXbSx7lDJUp0cfja.jpg",
    "https://t3.ftcdn.net/jpg/03/53/25/10/240_F_353251094_V7ANK1fZh03igu6EcB7zEskxqOrshlS3.jpg",
    "https://t3.ftcdn.net/jpg/03/12/26/06/240_F_312260680_EVMXPzgpDj0F5FVoiJUbQ1axYmS5JArN.jpg",
    "https://t4.ftcdn.net/jpg/02/69/18/47/240_F_269184784_4pnmyHf1jB4uXvoM0ggMNSWAOagpb8bW.jpg",
  ];

  return (
    <>
      <Slider imageUrls={imageUrls} />
    </>
  );
}

export default App;
//---------------------------------------------------------------------
// import Weather from "./components/Weather";

// function App() {
//   return (
//     <>
//       <Weather />
//     </>
//   );
// }

// export default App;
// -------------------------------------------------------------

// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Books from "./pages/Books";
// import BasePage from "./pages/BasePage";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import NotFound from "./components/NotFound";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<BasePage />}>
//           <Route index element={<Home />}></Route>
//           <Route path="/about" element={<About />}></Route>
//           <Route path="/books/*" element={<Books />}></Route>
//           <Route path="*" element={<NotFound />}></Route>
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

//-----------------------------------------------------

// import WeatherClass from "./components/WeatherClass";

// function App() {
//   return <WeatherClass />;
// }

// export default App;
//------------------------------------------------------------------------
// import UserProfilePage from "./pages/UserProfilePage";

// function App() {
//   return <UserProfilePage />;
// }

// export default App;
