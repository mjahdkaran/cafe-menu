import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function SearchInput() {
  return (
    <div className=" flex justify-center mt-28 py-4  " >
    {/* searchinput */}
    <div
      className="flex items-center   border rounded-md  p-1  md:w-1/3 w-4/5  "
      style={{ borderColor: "var(--green-99BC85)" }}
    >
      <MagnifyingGlassIcon className="size-4 text-green-700 mr-2" />
      <input
        type="text"
        placeholder="Browse your favorite..."
        className="focus:outline-0 "
      />
    </div>
  </div>
  )
}
