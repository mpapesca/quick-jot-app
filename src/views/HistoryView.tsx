import { Button, Layout, Text } from '@ui-kitten/components';
import { ViewWithInsets } from './ViewWithInsets';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TRootStackParamList } from '../navigators/types';
import { HistoryViewTopNavigation } from '../components/history';

type THistoryViewProps = NativeStackScreenProps<TRootStackParamList, 'History'>;

const HistoryView = ({ route, navigation }: THistoryViewProps) => {
  console.log({ canGoBack: navigation.canGoBack() });
  return (
    <ViewWithInsets>
      <HistoryViewTopNavigation route={route} navigation={navigation} />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>History</Text>
      </Layout>
    </ViewWithInsets>
  );
};

export default HistoryView;
