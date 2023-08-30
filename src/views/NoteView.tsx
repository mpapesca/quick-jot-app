import { useEffect, useState } from 'react';
import { Button, Input } from '@ui-kitten/components';
import { Keyboard, PanResponder } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { InputAccessoryView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { ViewWithInsets } from './ViewWithInsets';
import type { TRootStackParamList } from '../navigators/types';
import { NoteViewTopNavigation } from '../components/note';
import * as NoteService from '../services/NoteService';
import { getAllNotes, getCurrentNote, resetPastNote, storeNote } from '../state/slices/noteSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';

type TNoteViewProps = NativeStackScreenProps<TRootStackParamList, 'Note'>;

const NoteView = ({ route, navigation }: TNoteViewProps) => {
  const dispatch = useAppDispatch();

  const { currentNote, pastNote } = useAppSelector((state) => state.note);

  const [panResponder, setPanResponder] = useState<ReturnType<PanResponder['create']>>();
  const [content, setContent] = useState((pastNote ?? currentNote)?.content ?? '');

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setPanResponder(
        PanResponder.create({
          onStartShouldSetPanResponderCapture: () => true,
        }),
      );
    }
    dispatch(getCurrentNote());
    dispatch(getAllNotes());
  }, []);

  useEffect(() => {
    setContent((pastNote ?? currentNote)?.content ?? '');
  }, [currentNote?.date, pastNote?.date]);

  const handleStoringNote = async () => {
    if (!!pastNote || !currentNote) {
      return;
    }

    await dispatch(storeNote({ date: currentNote.date, content }));
  };

  const handleDoneEditing = () => {
    if (Keyboard.isVisible()) {
      Keyboard.dismiss();
    }
    if (!!pastNote) {
      dispatch(resetPastNote());
    }
  };

  return (
    <ViewWithInsets>
      <NoteViewTopNavigation note={pastNote ?? currentNote} route={route} navigation={navigation} />
      <KeyboardAvoidingView
        {...(Platform.OS === 'ios' ? panResponder?.panHandlers : {})}
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Input
          status='basic'
          multiline={true}
          textStyle={{ minHeight: '100%' }}
          inputAccessoryViewID={'Note'}
          value={content}
          disabled={!!pastNote}
          onChangeText={setContent}
          onEndEditing={handleStoringNote}
        />
      </KeyboardAvoidingView>

      <InputAccessoryView nativeID='Note'>
        <View>
          <Button onPress={handleDoneEditing} appearance='ghost'>
            {!pastNote ? 'Done' : 'Go back to today'}
          </Button>
        </View>
      </InputAccessoryView>
    </ViewWithInsets>
  );
};

export default NoteView;
