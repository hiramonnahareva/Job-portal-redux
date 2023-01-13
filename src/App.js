import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import auth from "./firebase/firebase.config";
import { getUser, setUser, toggleLoading } from "./reduxToolkitAll/features/auth/authSilce";
import routes from "./routes/routes";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if(user){
        dispatch(getUser(user.email));
      }
      else{
        dispatch(toggleLoading());
      }
    });
  },[])
  return (
    <>
     <RouterProvider router={routes} />
     <Toaster/>
    </>
  );
}

export default App;
