import AsyncStorage from "@react-native-async-storage/async-storage";
import type INote from "./types/Note";
import storeNote from "./storeNote";

/**
 * Gets a note based on a specified date. If that a note for that date does not exist yet, it will create it.
 * @param date The date of the note being retrieved in the format: yyyy-mm-dd.
 * @returns If found, it will return the requested note object, else it will return a new note object.
 * @see {storeNote}
 */
const getNote = async ({ date }: { date: string }): Promise<INote> => {
  try {
    const stringJson = await AsyncStorage.getItem(`note:${date}`);

    if (!stringJson) {
      return storeNote({ date, content: '' });
    }

    return JSON.parse(stringJson) as INote;
  } catch (error) {
    throw new Error(`Error occurred getting note for ${date}: ${error}`);
  }
};

export default getNote;
