import { Button, Divider, Input, Layout, Text, TopNavigation } from '@ui-kitten/components';
import { ViewWithInsets } from './ViewWithInsets';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { TRootStackParamList } from '../navigators/types';
import { NoteViewTopNavigation } from '../components/note';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

type TNoteViewProps = NativeStackScreenProps<TRootStackParamList, 'Note'>;

const NoteView = ({ route, navigation }: TNoteViewProps) => {
  console.log({ canGoBack: navigation.canGoBack() });
  return (
    <ViewWithInsets>
      <NoteViewTopNavigation route={route} navigation={navigation} />
      <KeyboardAvoidingView
        style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Input multiline={true} textStyle={{ minHeight: '100%' }} />
      </KeyboardAvoidingView>
    </ViewWithInsets>
  );
};

export default NoteView;
