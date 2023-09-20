import { Card } from 'components/UserCard/Card';
import user from 'components/user.json/user.json';
// import { StatisticsData } from './Statistics/Statistics';
// import data from 'components/data.json/data.json';

export const UserCard = () => {
  return (
    <div>
      <Card
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};
