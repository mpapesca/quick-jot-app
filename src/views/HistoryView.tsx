import { useState } from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Icon, Layout, List, ListItem, Modal, Text } from '@ui-kitten/components';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ViewWithInsets } from './ViewWithInsets';
import { TRootStackParamList } from '../navigators/types';
import { HistoryViewTopNavigation } from '../components/history';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import INote from '../services/NoteService/types/Note';
import { resetPastNote, setPastNote, destroyNote } from 'state/slices/noteSlice';

type THistoryViewProps = NativeStackScreenProps<TRootStackParamList, 'History'>;

const HistoryView = ({ route, navigation }: THistoryViewProps) => {
  const dispatch = useAppDispatch();
  const { currentNote, recentNotes } = useAppSelector((state) => state.note);

  const [menuNote, setMenuNote] = useState<INote>();

  const handleSelection = (note: INote) => {
    console.log({ noteDate: note.date, currentDate: currentNote?.date });
    if (note.date !== currentNote?.date) {
      dispatch(setPastNote(note));
    } else {
      dispatch(resetPastNote());
    }
    navigation.goBack();
  };

  const handleDeleteNote = async () => {
    if (menuNote) {
      await dispatch(destroyNote({ date: menuNote.date }));
      setMenuNote(undefined);
    }
  };

  const getDeleteButton = (note: INote) => {
    return (
      <Button
        appearance='ghost'
        status='danger'
        accessoryRight={<Icon name='trash-outline' />}
        onPress={() => setMenuNote(note)}
      />
    );
  };

  const renderItem = ({ item: note }: ListRenderItemInfo<INote>) => {
    return (
      <ListItem
        key={note.date}
        title={`${new Date(note.date).toLocaleDateString()}`}
        onPress={() => handleSelection(note)}
        accessoryRight={getDeleteButton(note)}
      />
    );
  };

  return (
    <ViewWithInsets>
      <HistoryViewTopNavigation route={route} navigation={navigation} />
      <Layout style={{ flex: 1 }}>
        <List data={recentNotes} renderItem={renderItem} />
      </Layout>
      <Modal
        visible={!!menuNote}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setMenuNote(undefined)}
      >
        <Card disabled={true}>
          <Text category='h3' style={{ textAlign: 'center' }}>
            Confirm delete:
          </Text>
          <Text category='h3' style={{ textAlign: 'center' }}>
            {menuNote?.date}
          </Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button
              size='giant'
              status='basic'
              style={styles.menuButton}
              onPress={() => setMenuNote(undefined)}
            >
              Cancel
            </Button>
            <Button
              size='giant'
              status='danger'
              style={styles.menuButton}
              onPress={() => handleDeleteNote()}
            >
              Delete
            </Button>
          </View>
        </Card>
      </Modal>
    </ViewWithInsets>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuButton: {
    margin: 8,
  },
});

export default HistoryView;
