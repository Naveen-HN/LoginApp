import React from "react";
//import { render } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";
import Login from "./Login";
import Adapter from "enzyme-adapter-react-16";

describe("Test case for testing login", () => {
  let wrapper;
  test("username check", () => {
    wrapper = shallow(<Login />);
    wrapper.find("input[type='email']").simulate("change", {
      target: { name: "username", value: "naveenhn" }
    });

    expect(wrapper.state("username")).toEqual("naveenhn");
  });
});
