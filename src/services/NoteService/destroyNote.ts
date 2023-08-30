import AsyncStorage from "@react-native-async-storage/async-storage";
import getNote from "./getNote";

/**
 * Removes a notes data based on the provided date.
 * @param date The date to destroy the note for.
 * @returns The destroyed note.
 */
const destroyNote = async ({ date }: { date: string }) => {
  try {
    const existingNote = await getNote({ date });
    if (!!existingNote) {
      await AsyncStorage.removeItem(`note:${date}`);
    }

    return existingNote;
  } catch (error) {
    throw new Error(`Error occurred storing note for ${date}: ${error}`);
  }
};

export default destroyNote;