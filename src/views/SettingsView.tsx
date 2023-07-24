import { Layout, Text } from '@ui-kitten/components';
import { ViewWithInsets } from './ViewWithInsets';

export const SettingsView = () => {
  return (
    <ViewWithInsets>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>Settings</Text>
      </Layout>
    </ViewWithInsets>
  );
};
