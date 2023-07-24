import { Layout, Text } from '@ui-kitten/components';
import { ViewWithInsets } from './ViewWithInsets';

export const DetailsView = () => {
  return (
    <ViewWithInsets>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>Details</Text>
      </Layout>
    </ViewWithInsets>
  );
};
