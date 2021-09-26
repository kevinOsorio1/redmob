
import * as SecureStore from "expo-secure-store"

export const colorModeManager = {
  get: async () => {
    try {
      let val = await SecureStore.getItemAsync('color-mode');
      return val === 'dark' ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  },
  set: async (value) => {
    try {
      await SecureStore.setItemAsync('color-mode', value);
    } catch (e) {
      console.log(e);
    }
  },
};