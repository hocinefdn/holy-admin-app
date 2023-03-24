import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import { apiUrl } from "../constants/api";
// components
import Header from "../components/global/Header";
import logo from "../images/HoLyzLogo.png";
import { setUserData } from "../store/reducers/userSlice";
import { LinearProgress } from "@mui/material";

function LoginPage() {
  const dispatch = useDispatch();
  const userLoged = useSelector((state) => state.user);
  const [user, setUser] = useState({ email: "", password: "" });

  useEffect(() => {
    if (userLoged.token != null) {
      window.location.href = "/shops";
    }
  }, []);
  const login = () => {
    // to display linear progress bar
    document.getElementById("linear-progress").style = "display:block";
    axios
      .post(apiUrl + "/user/login", user)
      .then((res) => {
        dispatch(setUserData({ user: res.data.user, token: res.data.token }));

        window.location = "/shops";
      })
      .catch((err) => console.log("err :>> ", err.response.data.message));
  };
  return (
    <div className="w-full">
      <Header />
      <div className="hidden" id="linear-progress">
        <LinearProgress color="success" />
      </div>
      <div className="flex  items-center justify-center py-5 px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-28 w-auto" src={logo} alt="Holyz" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Connectez-vous à votre compte
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Mot de passe"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Se souvenir de moi
                </label>
              </div>

              <div className="text-sm">
                <Link color="secondary" to="/forgot-password">
                  Mot de passe oublié ?
                </Link>
              </div>
            </div>

            <div>
              <button
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => login()}
              >
                Se connecter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
