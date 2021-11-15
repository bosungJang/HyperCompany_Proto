import React from "react";

import { observer } from "mobx-react";

const Counter = observer(({ counter }:any) => (
  <div>
    <h1>{counter.number}</h1>
    <button onClick={counter.increase}>+1</button>
    <button onClick={counter.decrease}>-1</button>
  </div>
));

export default Counter;