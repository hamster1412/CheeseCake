import React from "react";
import { Popover } from "@headlessui/react";

function ProfilePopover() {
  return (
    <Popover className="relative">
      <Popover.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </Popover.Button>

      <Popover.Panel className="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
        <div className="grid grid-rows-3 justify-evenly leading-10">
          <a href="/analytics">Profile</a>
          <a href="/engagement">Setting</a>
          <a href="/security">Sign out</a>
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export default ProfilePopover;
