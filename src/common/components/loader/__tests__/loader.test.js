import React from "react"
import { shallow } from "enzyme"
import Loader from "../loader"

it("smoke test", () => {
  shallow(<Loader />)
})
