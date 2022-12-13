import 'antd/dist/reset.css';
import "./App.css";
import router from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </StyledEngineProvider>

  );
}

export default App;
