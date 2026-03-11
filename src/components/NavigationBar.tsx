import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import type { NavigationRoute, ParamListBase } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import { BottomNavigation } from 'react-native-paper';

interface RouteParams {
  route: NavigationRoute<ParamListBase, string>;
}

export interface NavigationBarProps extends BottomTabBarProps {}

export default function NavigationBar(props: NavigationBarProps) {
  const { navigation, state, insets, descriptors } = props;

  function handleTabPress(
    props: {
      preventDefault: () => void;
    } & RouteParams
  ) {
    const { route, preventDefault } = props;

    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (event.defaultPrevented) {
      preventDefault();
    } else {
      navigation.dispatch({
        ...CommonActions.navigate(route.name, route.params),
        target: state.key,
      });
    }
  }

  function renderIcon(
    props: RouteParams & {
      focused: boolean;
      color: string;
    }
  ) {
    const { route, focused, color } = props;

    const { options } = descriptors[route.key];
    if (options.tabBarIcon) {
      return options.tabBarIcon({ focused, color, size: 24 });
    }
    return null;
  }

  function getLabelText(props: { route: { key: string; name: string } }) {
    const { route } = props;
    const { options } = descriptors[route.key];
    return typeof options.tabBarLabel === 'string'
      ? options.tabBarLabel
      : typeof options.title === 'string'
        ? options.title
        : route.name;
  }

  return (
    <BottomNavigation.Bar
      navigationState={state}
      safeAreaInsets={insets}
      onTabPress={handleTabPress}
      renderIcon={renderIcon}
      getLabelText={getLabelText}
    />
  );
}
