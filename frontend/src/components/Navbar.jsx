import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { AiFillSetting } from "react-icons/ai";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-amber-200 rounded">
        <div className="grid grid-cols-12 mx-auto w-full">

          <div className="mx-auto">
            <button>
              <VscThreeBars className="text-4xl mx-auto" />
            </button>
          </div>
          <div className="grid col-span-10 w-96 mx-auto text-center">
            <h1 className="font-bold text-3xl font-Pangolin">
              Cats collection
            </h1>
          </div>
          <div className="mx-auto">
            <button>
              <AiFillSetting className="text-4xl" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
