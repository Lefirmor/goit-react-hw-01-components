// import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const StatisticsData = ({ title, stats }) => {
  return (
    <div className={css.statistics}>
      <h2 className="title">Upload stats</h2>

      <ul className={css.statList}>
        <li className="item">
          <span className={title}>.docx</span>
          <span className={stats}>4%</span>
        </li>
        <li className="item">
          <span className={title}>.mp3</span>
          <span className={stats}>14%</span>
        </li>
        <li className="item">
          <span className={title}>.pdf</span>
          <span className={stats}>41%</span>
        </li>
        <li className="item">
          <span className={title}>.mp4</span>
          <span className={stats}>12%</span>
        </li>
      </ul>
    </div>
  );
};


