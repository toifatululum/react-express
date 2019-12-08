import React, { useState } from "react";

function Navbar() {
  const [toto, setToto] = useState("");
  const [ulum, setUlum] = useState("");
  return (
    <div>
      {toto}
      <button onClick={() => setToto("totoJelek")}>tabah</button>

      <div>
        <input
          type="text"
          placeholder="name"
          value={ulum}
          onChange={e => {
            setUlum(e.target.value);
            console.log(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default Navbar;
