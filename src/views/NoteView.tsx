import { Button, Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
import { ViewWithInsets } from './ViewWithInsets';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { TRootStackParamList } from '../navigators/types';
import { NoteViewTopNavigation } from '../components/note';

type TNoteViewProps = NativeStackScreenProps<TRootStackParamList, 'Note'>;

const NoteView = ({ route, navigation }: TNoteViewProps) => {
  console.log({ canGoBack: navigation.canGoBack() });
  return (
    <ViewWithInsets>
      <NoteViewTopNavigation route={route} navigation={navigation} />
      <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text category='h1'>Note</Text>
      </Layout>
    </ViewWithInsets>
  );
};

export default NoteView;
