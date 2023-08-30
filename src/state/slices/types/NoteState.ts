import INote from "../../../services/NoteService/types/Note";

export interface INoteState {
  currentNote?: INote;
  error?: string;
  pastNote?: INote;
  recentNotes: INote[];
};