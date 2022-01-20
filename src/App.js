import Login from "./pages/Login";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Sidebar from "./component/Sidebar";
import City from "./pages/City";
import Coffeeshop from "./pages/Coffeeshop";
import Users from "./pages/Users";
import CoffeeContext from "./utils/CoffeeContext";

function App() {
  const [cities, setCities] = useState([]);
  const [coffees, setCoffees] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  ///..................................City........................................
  const getCities = async () => {
    const response = await axios.get(
      "https://cafe-api-299.herokuapp.com/api/cities"
    );
    setCities(response.data);
  };
  //....
  useEffect(() => {
    getCities();
    getCoffees();
    getUsers();
  }, []);

  //...
  const deleteCity = async (cityId) => {
    try {
      await axios.delete(
        `https://cafe-api-299.herokuapp.com/api/cities/${cityId}`,
        {
          headers: {
            Authorization: localStorage.tokenDashboardcoffee,
          },
        }
      );
      toast.success("city deleted");
      getCities();
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };
  const addCity = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const coffeeshopes = [];
      if (form.elements.coffeeshopes.forEach) {
        form.elements.coffeeshopes.forEach((coffeeshope) => {
          if (coffeeshope.checked) {
            coffeeshopes.push(coffeeshope.value);
          }
        });
      } else {
        if (form.elements.coffeeshopes.checked) {
          coffeeshopes.push(form.elements.coffeeshopes.value);
        }
      }
      const cityBody = {
        nameOfCity: form.elements.nameOfCity.value,
        image: form.elements.image.value,
        coffeeshopes: coffeeshopes,
      };
      await axios.post(
        `https://cafe-api-299.herokuapp.com/api/cities`,
        cityBody,
        {
          headers: {
            Authorization: localStorage.tokenDashboardcoffee,
          },
        }
      );
      getCities();
      toast.success("add city success");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const editCity = async (e, cityId) => {
    e.preventDefault();
    try {
      const form = e.target;
      const coffeeshopes = [];
      if (form.elements.coffeeshopes.forEach) {
        form.elements.coffeeshopes.forEach((coffeeshope) => {
          if (coffeeshope.checked) {
            coffeeshopes.push(coffeeshope.value);
          }
        });
      } else {
        if (form.elements.coffeeshopes.checked) {
          coffeeshopes.push(form.elements.coffeeshopes.value);
        }
      }

      const cityBody = {
        nameOfCity: form.elements.nameOfCity.value,
        image: form.elements.image.value,
        coffeeshopes: coffeeshopes,
      };
      await axios.put(
        `https://cafe-api-299.herokuapp.com/api/cities/${cityId}`,
        cityBody,
        {
          headers: {
            Authorization: localStorage.tokenDashboardcoffee,
          },
        }
      );
      getCities();
      toast.success("edit success");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  //.................................coffeeshop...................................
  const getCoffees = async () => {
    const response = await axios.get(
      "https://cafe-api-299.herokuapp.com/api/coffeeShop"
    );
    setCoffees(response.data);
  };

  const deleteCoffee = async (coffeeId) => {
    try {
      await axios.delete(
        `https://cafe-api-299.herokuapp.com/api/coffeeShop/${coffeeId}`,
        {
          headers: {
            Authorization: localStorage.tokenDashboardcoffee,
          },
        }
      );
      toast.success("coffeesop deleted");
      getCoffees();
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const addCoffee = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;

      const coffeeBody = {
        name: form.elements.name.value,
        image: form.elements.image.value,
      };
      await axios.post(
        `https://cafe-api-299.herokuapp.com/api/coffeeShop`,
        coffeeBody,
        {
          headers: {
            Authorization: localStorage.tokenDashboardcoffee,
          },
        }
      );
      getCoffees();
      toast.success("add coffeeshop success");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const editCoffee = async (e, coffeeId) => {
    e.preventDefault();
    try {
      const form = e.target;

      const coffeeBody = {
        name: form.elements.name.value,
        image: form.elements.image.value,
      };
      await axios.put(
        `https://cafe-api-299.herokuapp.com/api/coffeeShop/${coffeeId}`,
        coffeeBody,
        {
          headers: {
            Authorization: localStorage.tokenDashboardcoffee,
          },
        }
      );
      getCoffees();
      toast.success("edit success");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  //................................user........................

  const getUsers = async () => {
    const response = await axios.get(
      "https://cafe-api-299.herokuapp.com/api/auth/users",
      {
        headers: {
          Authorization: localStorage.tokenDashboardcoffee,
        },
      }
    );
    setUsers(response.data);
    console.log(users);
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      };
      const response = await axios.post(
        "https://cafe-api-299.herokuapp.com/api/auth/login/admin",
        adminBody
      );
      localStorage.tokenDashboardcoffee = response.data;
      toast.success("login success");
      navigate("/cities");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("tokenDashboardcoffee");
  };

  const addAdmin = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;

      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      };
      await axios.post(
        `https://cafe-api-299.herokuapp.com/api/auth/add-admin`,
        adminBody,
        {
          headers: {
            Authorization: localStorage.tokenDashboardcoffee,
          },
        }
      );
      getUsers();
      toast.success("add admin success");
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(
        `https://cafe-api-299.herokuapp.com/api/auth/users/${userId}`,
        {
          headers: {
            Authorization: localStorage.tokenDashboardcoffee,
          },
        }
      );
      toast.success("user deleted");
      getUsers();
    } catch (error) {
      if (error.response) toast.error(error.response.data);
      else console.log(error);
    }
  };

  const store = {
    deleteCity,
    cities,
    addCity,
    editCity,
    coffees,
    editCoffee,
    deleteCoffee,
    addCoffee,
    login,
    users,
    deleteUser,
    addAdmin,
    logout,
  };

  return (
    <CoffeeContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Routes>
            <Route path="/coffeeshop" element={<Coffeeshop />} />

            <Route
              path="/users"
              element={
                localStorage.tokenDashboardcoffee ? (
                  <Users />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/cities"
              element={
                localStorage.tokenDashboardcoffee ? (
                  <City />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/coffeeshop"
              element={
                localStorage.tokenDashboardcoffee ? (
                  <Coffeeshop />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </CoffeeContext.Provider>
  );
}

export default App;
