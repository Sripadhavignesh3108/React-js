// import React from "react";
// import { Link, Route, Routes } from "react-router-dom";
// import Screen3 from "../TempScreens/Screen3";
// import ScreenOne from "../TempScreens/Screen1";
// import ScreenTwo from "../TempScreens/Screen2";

// export default function ScreenList() {
//   return (
//     <div>
//       <Link to={"/home"}>
//         <h1>screen1</h1>
//       </Link>
//       <Link to={"/home/screen2"}>
//         <h1>screen2</h1>
//       </Link>
//       <Link to={"/home/screen3"}>
//         <h1>screen3</h1>
//       </Link>
//       <Link to={"/home/screen3"}>
//         <h1>Home</h1>
//       </Link>
//       <Routes>
//         <Route path="/home">
//           <Route index Component={ScreenOne} />
//           <Route path="screen2" Component={ScreenTwo} />
//           <Route path="screen3" Component={Screen3} />
//         </Route>
//         <Route path="/" Component={ScreenList} />
//       </Routes>
//     </div>
//   );
// }

import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import ScreenOne from "../TempScreens/Screen1";
import ScreenTwo from "../TempScreens/Screen2";
import ScreenThree from "../TempScreens/Screen3";

export default function ScreenList() {
  return (
    <div>
      <Link to="/home">
        <h1>screen1</h1>
      </Link>
      <Link to="/home/screen2">
        <h1>screen2</h1>
      </Link>
      <Link to="/home/screen3">
        <h1>screen3</h1>
      </Link>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Routes>
        <Route path="/" element={<ScreenOne />} />
        <Route path="screen2" element={<ScreenTwo />} />
        <Route path="screen3" element={<ScreenThree />} />
      </Routes>
      {/* <Outlet /> */}
    </div>
  );
}
