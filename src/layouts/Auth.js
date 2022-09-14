import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import FormPet from "views/FormPets/Form";

export default function Auth() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const isMobile = useMediaQuery({ query: "(max-width: 690px)" });
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full min-h-screen py-40">
          {isDesktopOrLaptop && (
            <div
              className="absolute top-0 w-full h-full bg-no-repeat bg-bgpets-500 bg-full"
              style={{
                backgroundImage:
                  "url(" +
                  require("assets/img/register_bg_2_desktop.jpg").default +
                  ")",
              }}
            />
          )}
          {isTabletOrMobile && (
            <div
              className="absolute top-0 w-full h-full bg-no-repeat bg-bgpets-500 bg-full"
              style={{
                backgroundImage:
                  "url(" +
                  require("assets/img/register_bg_2_table.jpg").default +
                  ")",
              }}
            />
          )}
          {isMobile && (
            <div
              className="absolute top-0 w-full h-full bg-no-repeat bg-bgpets-500 bg-full"
              style={{
                backgroundImage:
                  "url(" +
                  require("assets/img/register_bg_2_mobile.jpg").default +
                  ")",
              }}
            />
          )}

          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Route path="/auth/request" exact component={FormPet} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  );
}
