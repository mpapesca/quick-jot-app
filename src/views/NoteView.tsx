import { Button, Divider, Input, Layout, Text, TopNavigation } from '@ui-kitten/components';
import { Button as DefaultButton, Keyboard, PanResponder } from 'react-native';
import { ViewWithInsets } from './ViewWithInsets';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { TRootStackParamList } from '../navigators/types';
import { NoteViewTopNavigation } from '../components/note';
import { InputAccessoryView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { useEffect, useState } from 'react';

type TNoteViewProps = NativeStackScreenProps<TRootStackParamList, 'Note'>;

const NoteView = ({ route, navigation }: TNoteViewProps) => {
  const [panResponder, setPanResponder] = useState<ReturnType<PanResponder['create']>>();

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setPanResponder(
        PanResponder.create({
          onStartShouldSetPanResponderCapture: () => true,
        }),
      );
    }
  }, []);

  console.log({ canGoBack: navigation.canGoBack() });
  return (
    <ViewWithInsets>
      <NoteViewTopNavigation route={route} navigation={navigation} />
      <KeyboardAvoidingView
        {...(Platform.OS === 'ios' ? panResponder?.panHandlers : {})}
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Input multiline={true} textStyle={{ minHeight: '100%' }} inputAccessoryViewID='Note' />
      </KeyboardAvoidingView>
      <InputAccessoryView nativeID='Note'>
        <View>
          <Button onPress={Keyboard.dismiss} appearance='ghost'>
            Done
          </Button>
        </View>
      </InputAccessoryView>
    </ViewWithInsets>
  );
};

export default NoteView;
