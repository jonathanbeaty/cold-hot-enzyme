import React from "react";
import { shallow, mount, render } from "enzyme";

import GuessCount from "./guess-count";

describe("<GuessCount />", () => {
  it("Should return Guess Count", () => {
    shallow(<GuessCount guessCount={1} />);
  });
});
