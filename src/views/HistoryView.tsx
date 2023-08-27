import { Button, Layout, Text } from '@ui-kitten/components';
import { ViewWithInsets } from './ViewWithInsets';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TRootStackParamList } from '../navigators/types';

type THistoryViewProps = NativeStackScreenProps<TRootStackParamList, 'History'>;

const HistoryView = ({ navigation }: THistoryViewProps) => {
  return (
    <ViewWithInsets>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>History</Text>
      </Layout>
    </ViewWithInsets>
  );
};

export default HistoryView;
