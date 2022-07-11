import * as React from "react"
import "@fontsource/poppins";
import "../styles/typography.css";
import "../styles/color.css";

import AppBar from "../components/app-bar/app-bar";

// markup
const IndexPage = () => {
  return (
    <div>
      <AppBar />
      <p className="body white-blue fw-100">Hello World</p>
    </div>
  )
}

export default IndexPage
