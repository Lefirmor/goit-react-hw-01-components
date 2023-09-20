import { UserCard } from 'components/UserCard/UserCard';
// import user from 'components/user.json/user.json';
import { Statistics } from './Statistics/StatisticsBoard';
import { FriendList } from './Friends/FriendList';
import friends from './Friends/friends.json/friends.json';
// import { TransactionsData } from './Transactions/TransactionsComponent';
import transactions from './Transactions/transactions.json/transactions.json';
import TransactionsTable from './Transactions/TransactionsHistory';
export const App = () => {
  return (
    <div>
      <UserCard />
      <Statistics />
      <FriendList friends={friends} />
      <TransactionsTable data={transactions} />
    </div>
  );
};

// App.propTypes = {
//   data: PropTypes.arrayOf()
// }
