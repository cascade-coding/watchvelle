import React from "react";
import Brand from "../../../icons/Brand";
import Cart from "../../../icons/Cart";
import NavLinkPrimary from "./NavLinkPrimary";
import NavLinkSecondary from "./NavLinkSecondary";
import Container from "../../Container";
import Bars from "../../../icons/Bars";
import { useCart } from "../../../../store/useCart";
import { Link } from "react-router";

const HeaderPrimary = () => {
  const cartItemsCount = useCart((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <div className="">
      <input type="checkbox" id="sidebar-toggle" className="peer sr-only" />

      <label
        htmlFor="sidebar-toggle"
        aria-hidden="true"
        className="fixed inset-0 z-30 hidden bg-gray-900/50 peer-checked:block md:hidden"
      ></label>

      <header className="">
        <Container className="flex h-19 items-center gap-8">
          <a className="block text-foreground" href="#">
            <span className="sr-only">Home</span>
            <Brand />
          </a>

          <div className="flex flex-1 items-center justify-end">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-9 text-sm">
                <NavLinkPrimary to="/" isActive>
                  Home
                </NavLinkPrimary>

                <NavLinkPrimary to="/watches">Watches</NavLinkPrimary>

                <NavLinkPrimary to="/orders">Orders</NavLinkPrimary>

                <NavLinkPrimary to="/cart">
                  <span className="relative inline-block">
                    <Cart />
                    {cartItemsCount > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 min-w-4.5 h-4.5 px-1 text-[10px] font-bold text-white bg-foreground rounded-full flex items-center justify-center">
                        {cartItemsCount}
                      </span>
                    )}
                  </span>
                </NavLinkPrimary>
              </ul>
            </nav>

            <div className="flex items-center gap-3.5">
              <div className="block md:hidden pt-1">
                <Link to="/cart">
                  <span className="relative inline-block">
                    <Cart />
                    {cartItemsCount > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 min-w-4.5 h-4.5 px-1 text-[10px] font-bold text-white bg-foreground rounded-full flex items-center justify-center">
                        {cartItemsCount}
                      </span>
                    )}
                  </span>
                </Link>
              </div>

              <label
                htmlFor="sidebar-toggle"
                id="sidebar-toggle-label"
                aria-controls="sidebar-nav"
                className="block cursor-pointer rounded-sm p-2.5 text-brand transition peer-focus-visible:ring-2 peer-focus-visible:ring-brand peer-focus-visible:ring-offset-2 hover:text-brand/75 md:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <Bars />
              </label>
            </div>
          </div>
        </Container>
      </header>

      <div
        id="sidebar-nav"
        aria-label="Sidebar"
        className="fixed inset-y-0 left-0 z-40 flex w-full sm:w-80 -translate-x-full flex-col justify-between overflow-y-auto border-r border-border bg-white transition-transform duration-300 peer-checked:translate-x-0 md:hidden"
      >
        <div className="p-4">
          <div className="flex items-center justify-between pl-3 pt-4">
            <a className="block text-foreground" href="#">
              <span className="sr-only">Home</span>
              <Brand />
            </a>
          </div>

          <nav className="">
            <ul className="space-y-1 px-1.5 py-4 text-sm">
              <NavLinkSecondary to="/" isActive>
                Home
              </NavLinkSecondary>

              <NavLinkSecondary to="/watches">Watches</NavLinkSecondary>

              <NavLinkSecondary to="/orders">Orders</NavLinkSecondary>
            </ul>

            <div className="pt-6 px-2">
              <label
                htmlFor="sidebar-toggle"
                className="block cursor-pointer rounded-md bg-gray-200 px-5 py-2.5 text-center text-sm font-medium text-foreground transition hover:bg-gray-300"
                aria-label="Close menu"
                aria-controls="sidebar-nav"
              >
                Close
              </label>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderPrimary;
