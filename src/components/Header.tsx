import { router } from 'expo-router';
import type { ReactNode } from 'react';
import { Appbar } from 'react-native-paper';

export interface HeaderProps {
  title: string;
  showBack?: boolean;
  actions?: ReactNode;
}

export default function Header(props: HeaderProps) {
  const { title, showBack, actions } = props;

  return (
    <Appbar.Header>
      {showBack && <Appbar.BackAction onPress={() => router.back()} />}
      <Appbar.Content title={title} />
      {actions}
    </Appbar.Header>
  );
}
