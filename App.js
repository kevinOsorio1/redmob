import * as React from "react"
import { extendTheme } from "native-base"
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}
import Navigation from "./src/navigation/Navigation"
// extend the theme
export const theme = extendTheme({ config })
export default function App() {
  return <Navigation />
}
