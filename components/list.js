import React from "react";
import Job from "./job";

export default function List({ results }) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-gray-200">
                {results.map((result) => {
                  return(
                    
                    <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <dt class="text-lg leading-6 font-medium text-gray-900">
                          {result.title}
                      </dt>
                      <dd class="mt-2 text-base text-gray-500">
{result.descrition}                      </dd>
                    </div>
                  </div>
          


                    
                    
                    
                    )
                })}
              </table>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
