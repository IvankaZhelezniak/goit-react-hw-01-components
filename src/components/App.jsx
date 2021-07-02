import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../user.json';
import friends from '../friends.json';
import statisticalData from '../statistical-data.json';
import transactions from '../transactions.json';

export function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <FriendList friends={friends} />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <TransactionHistory items={transactions} />
    </>
  );
}
