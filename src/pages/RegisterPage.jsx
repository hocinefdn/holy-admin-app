import axios from "axios";
import { useState } from "react";

//  components
import Header from "../components/home/Header";
import { Button, LinearProgress } from "@mui/material";
import AlertInfo from "../components/global/AlertInfo";
import logo from "../images/HoLyzLogo.png";

// consts
import { apiUrl } from "../constants/api";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [open, setOpen] = useState(false);

  const addUser = () => {
    // to display linear progress bar
    document.getElementById("linear-progress").style = "display:block";
    const user = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      password: document.getElementById("password").value,
    };
    axios
      .post(apiUrl + "/user", user)
      .then((res) => {
        // hide linear progress bar
        document.getElementById("linear-progress").style = "display:none";
        // display alert info
        setOpen(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="w-full">
      <Header />

      <div className="hidden" id="linear-progress">
        <LinearProgress color="success" />
      </div>
      <AlertInfo
        message="Votre compte a été créé avec succès. Pour terminer la création de votre compte, vous devez confirmer l'adresse e-mail en cliquant sur le lien dans votre boîte mail"
        open={open}
        setOpen={setOpen}
      />

      <div className="flex  items-center justify-center py-5 px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-28 w-auto" src={logo} alt="Holyz" />
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Créer un compte
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <input
                id="firstname"
                name="firstname"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Prénom"
              />
              <input
                id="lastname"
                name="lastname"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Nom"
              />

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email"
              />

              <input
                id="phone"
                name="phone"
                type="phone"
                autoComplete="phone"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Téléphone"
              />

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Mot de passe"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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

            <div className="flex justify-center">
              <Button
                variant="contained"
                color="secondary"
                sx={{ color: "white" }}
                onClick={() => addUser()}
              >
                S'inscrire
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
