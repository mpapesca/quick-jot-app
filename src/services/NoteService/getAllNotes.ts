import AsyncStorage from "@react-native-async-storage/async-storage";
import type INote from "./types/Note";

/**
 * Gets all existing notes in batches of 25.
 * @param startIndex The index to start in the array of all note records. Ordered by descending date.
 * @param limit how many note records to return.
 * @returns An array of note with a count of equal or less than the provided limit.
 */
const getAllNotes = async ({ startIndex = 0, limit = 25 } = {}): Promise<INote[]> => {
  try {
    const allKeys = await AsyncStorage.getAllKeys();
    console.log({ allKeys })
    const allNoteKeys = allKeys.filter(key => key.startsWith('note:'))
      .sort()
      .reverse();
    if (startIndex >= allNoteKeys.length) {
      return [];
    }
    const noteKeyBatch = allNoteKeys.slice(startIndex, (startIndex + limit));
    const keyValuePairs = await AsyncStorage.multiGet(noteKeyBatch);
    const recentNotes = keyValuePairs.reduce((memo, [_, stringJson]) => {
      if (stringJson) {
        memo.push(JSON.parse(stringJson) as INote);
      }
      return memo;
    }, [] as INote[]);

    return recentNotes;
  } catch (error) {
    throw new Error(`Error occurred getting all notes: ${error}`);
  }
};

export default getAllNotes;