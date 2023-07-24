import { Layout, Text } from '@ui-kitten/components';
import { ViewWithInsets } from './ViewWithInsets';

export const HomeView = () => {
  return (
    <ViewWithInsets>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>Home</Text>
      </Layout>
    </ViewWithInsets>
  );
};
