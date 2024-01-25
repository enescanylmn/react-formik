import {useRoutes, generatePath} from "react-router-dom";
import routes from "./Routes";
import {url } from "./utils";



function App() {
  url('notFound')
  

  return useRoutes(routes)
  

  
}

export default App;
