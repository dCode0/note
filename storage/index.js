import AsyncStorage from "@react-native-community/async-storage";

export default class Storage {
  key ;

  constructor(key) {
    this.key = key;
  }

  async setItem(value) {
    try {
      await AsyncStorage.setItem(this.key, JSON.stringify(value));
    } catch (error) {
      // Error saving data
    }
  }

  async getItem() {
    try {
      return await AsyncStorage.getItem(this.key);
    } catch (error) {
      return null;
    }
  }
}