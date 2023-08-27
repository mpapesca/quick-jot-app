import { Button, Layout, Text } from '@ui-kitten/components';
import { ViewWithInsets } from './ViewWithInsets';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { TRootStackParamList } from '../navigators/types';

type TNoteViewProps = NativeStackScreenProps<TRootStackParamList, 'Note'>;

const NoteView = ({ navigation }: TNoteViewProps) => {
  return (
    <ViewWithInsets>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>Note</Text>
      </Layout>
    </ViewWithInsets>
  );
};

export default NoteView;
