import AsyncStorage from "@react-native-async-storage/async-storage";
import type INote from "./types/Note";

/**
 * Stores a notes data based on the provided date. If data exists for that date already, it will try to merge the new data into the existing data.
 * @param date The date to store the note for. If already exists, it will merge the note record together.
 * @param content The note texts to be stored.
 * @returns The new or updated note record.
 */
const storeNote = async ({ date, content }: { date: string, content: string }) => {
  try {

    const existingData = await AsyncStorage.getItem(`note:${date}`);

    const json = {
      date,
      content
    } as INote;

    const storeItem = !!existingData ? AsyncStorage.mergeItem : AsyncStorage.setItem;

    const jsonString = JSON.stringify(json);
    await storeItem(`note:${date}`, jsonString);

    return json;
  } catch (error) {
    throw new Error(`Error occurred storing note for ${date}: ${error}`);
  }
};

export default storeNote;