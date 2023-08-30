import type INote from "./types/Note";
import getNote from "./getNote";

/**
 * Gets the current note.
 * @returns Will return the current note record.
 * @see {getNote}
 */
const geCurrentNote = async (): Promise<INote> => {
  try {
    console.log('get current note');
    const today = new Date();
    const year = today.getFullYear();
    const month = '0' + (today.getMonth() + 1).toString();
    const day = '0' + (today.getDate() + 1).toString();
    const date = `${year}-${month.slice(-2)}-${day.slice(-2)}`;
    const currentNote = await getNote({ date });
    return currentNote;
  } catch (error) {
    throw new Error(`Error occurred getting current note: ${error}`);
  }
};

export default geCurrentNote;
