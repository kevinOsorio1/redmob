import React, { useEffect } from "react"

import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Code,
} from "native-base";
import NativeBaseIcon from "../../components/NativeBaseIcon";
import { colorModeManager } from "../../globalConfig";

const Home = () => {
  return (
    <NativeBaseProvider colorModeManager={colorModeManager}>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBase</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Code>App.js</Code>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={"xl"}>
              Learn NativeBase
            </Text>
          </Link>
        </VStack>
      </Center>
    </NativeBaseProvider>
  )
}

// Color Switch Component
export function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(()=>{
    colorModeManager.set(colorMode)
  },[colorMode])
  return (
    <HStack space={2} alignItems="center">
      <Text>Oscuro</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Claro</Text>
    </HStack>
  );
}

export default Home
