import React from "react";

export default function SearchBox() {
  return (
    <div className="container md:pt-12 md:pb-8 align-center">
      <form name="search" action="" class="max-w md:flex align-center">
        <div className='max-w-7xl mb-4 md:mb-0 md:mr-4 flex-grow focus:ring-offset-pink-800'>
        <label for='role' className='px-3'>Role</label>
          <input
            type="text"
            placeholder="What"
            className=" w-full px-4 py-3 rounded-md border-pink-500 text-pink-900 bg-pink-100 shadow"
          />
        </div>
        <div className='max-w-7xl mb-4 md:mb-0 md:mr-4 flex-grow focus:ring-offset-pink-800'>
        <label for='location' className='px-3'>Location</label>
          <input
            type="text"
            placeholder="City, province"
            className=" w-full px-4 py-3 form-input px4 py3 rounded-md text-pink-900 border-pink-500 bg-pink-100 shadow"
          ></input>
        </div>
      </form>
    </div>
  );
}
