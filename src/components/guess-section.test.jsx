import React from "react";
import { shallow, mount, render } from "enzyme";

import GuessSection from "./guess-section";

describe("<GuessSection />", () => {
  it("Should return Guess Section", () => {
    shallow(<GuessSection feedback={"Hello World"} guessCount={3} />);
  });
});
