import React from "react";

function AllieFooter() {
  return (
    <footer className="flex flex-col justify-center p-5 text-center text-white bg-coolViolet">
      <p className="text-lg">
        &copy; {new Date().getFullYear()} Alex "Allie" Wuollet
      </p>
      <p className="pt-3 text-xs">Made with 🧡 by RellSoft</p>
    </footer>
  );
}

export default AllieFooter;
