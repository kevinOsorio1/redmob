import React, { useMemo } from "react"
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../views/Home"
import SignInScreen from "../views/SignInScreen"
import { colorModeManager } from "../../globalConfig"
import { AuthContext } from "../../globalContexts"
import { useLogin } from "../hooks/useLogin"
import { useColorModeValue } from "native-base"

const stackOptions = {
  Home: {
    title: "RedMob",
    headerStyle: (props) => {
      return { ...props }
    },
  },
}

const Stack = createNativeStackNavigator()
const Navigation = () => {
  const { logged, loggerManager } = useLogin()
  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        loggerManager({ type: "SIGN_IN", token: "dummy-auth-token" })
      },
      signOut: () => loggerManager({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        loggerManager({ type: "SIGN_IN", token: "dummy-auth-token" })
      },
    }),
    []
  )
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer
        theme={colorModeManager.get === "dark" ? DarkTheme : DefaultTheme}
      >
        <Stack.Navigator>
          {logged.userToken == null ? (
            <Stack.Screen
              options={{
                headerStyle: {
                  backgroundColor: colorModeManager.get,
                },
              }}
              name="SignIn"
              component={SignInScreen}
            />
          ) : (
            <Stack.Screen
              options={{
                title: "RedMob",
                headerStyle: { bg: "#fff" },
              }}
              name="Home"
              component={Home}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
export default Navigation
