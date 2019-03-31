import EventList from './EventList';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  list: {
    screen: EventList
  }
});

export default createAppContainer(AppNavigator);