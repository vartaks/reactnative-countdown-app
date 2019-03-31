import EventList from './EventList';
import { StackNavigator } from 'react-navigation';

export default StackNavigator({
  list: {
    screen: EventList
  }
});
