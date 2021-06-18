import React from "react";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Nav() {
  const navigation = ["Login", "Register", "Advertise"];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Disclosure as="nav">
        {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 fixed inset-x-0 top-0 bg-white">
            <div className="flex items-center h-20 pb-1 justify-between">
              <div className="text-3xl font-extrabold font-mono">
                <h1>I N T E R N T R ! P</h1>
              </div>{" "}
              <div className="flex items-center justify-between">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-12">
                  <a
                      href="#"
                      className="text-gray-300 hover:bg-white hover:text-pink-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </a> <a
                      href="#"
                      className="text-gray-300 hover:bg-white hover:text-pink-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Register
                    </a> <a
                      href="#"
                      className="text-gray-300 hover:bg-white hover:text-pink-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Advertise
                    </a>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-pink-200 focus:outline-pink focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-pink">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item, itemIdx) =>
                itemIdx === 0 ? (
                  <Fragment key={item}>
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a
                      href="#"
                      className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item}
                    </a>
                  </Fragment>
                ) : (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
        )}
    </Disclosure>
  );
}
