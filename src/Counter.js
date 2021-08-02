// import React, { useState } from "react";

// const Counter = () => {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setCounter(counter - 1)}>-</button>
//       {counter}
//       <button onClick={() => setCounter(counter + 1)}>+</button>
//     </div>
//   );
// };

// export default Counter;

// import React, { useState, useMemo } from "react";

// const genUser = (name, surName) => {
//   const user = { name, surName };
//   console.log(user);
//   return user;
// };

// const Counter = () => {
//   const [counter, setCounter] = useState(0);
//   const [name, setName] = useState("");
//   const [surName, setSurName] = useState("");

//   const user = useMemo(() => genUser(name, surName), [name, surName]);

//   return (
//     <div>
//       <button onClick={() => setCounter(counter - 1)}>-</button>
//       {counter}
//       <button onClick={() => setCounter(counter + 1)}>+</button>
//       <hr />
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//       <br />
//       <input
//         type="text"
//         value={surName}
//         onChange={(e) => {
//           setSurName(e.target.value);
//         }}
//       />
//     </div>
//   );
// };

// export default Counter;

import React, { useState, useEffect, useCallback } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("Hello, world!");
  setMessage("Hello, world!");

  const greeting = useCallback((msg) => {
    console.log(msg);
  }, []);

  useEffect(() => {
    greeting(message);
  }, [greeting, message]);

  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default Counter;
