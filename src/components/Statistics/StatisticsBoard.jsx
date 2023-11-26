
import { StatisticsData } from './Statistics';
// import css from './Statistics.module.css';
import data from '../data.json/data.json';

export const Statistics = () => {
  return (
    <div>
      <StatisticsData key={data.title} title={data.title} stats={data.stats} />
    </div>
  );
};
