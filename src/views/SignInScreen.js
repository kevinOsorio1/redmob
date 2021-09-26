import React from "react"
import {
  Button,
  NativeBaseProvider,
  TextField,
  Center,
  VStack,
  Text,
} from "native-base"
import { AuthContext } from "../../globalContexts"
import { ToggleDarkMode } from "./Home"

function SignInScreen() {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const { signIn } = React.useContext(AuthContext)

  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <Text>Correo de usuario</Text>
          <TextField
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <Text>Contraseña</Text>
          <TextField
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button onPress={() => signIn({ username, password })}>
            Sign in
          </Button>

          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  )
}

export default SignInScreen
