import { Layout } from '@ui-kitten/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ViewWithInsets = ({ children }: any) => {
  const insets = useSafeAreaInsets();
  return (
    <Layout
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
      }}
    >
      {children}
    </Layout>
  );
};
