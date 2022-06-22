import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import DayCountsTable from '../../component/DayCountsTable/DayCountsTable';
import { getDayCountsRoute } from '../../utils/routes';
import './home.css';

const emptyCountData = {
  day: '',
  count: 0,
  status: false,
  created_at: '',
  updated_at: '',
};

const Home = () => {
  const [todayCount, setTodayCount] = useState(emptyCountData);
  const [dayCounts, setDayCounts] = useState([]);

  const getAllDayCounts = () => {
    Axios.get(getDayCountsRoute)
      .then((res) => {
        setDayCounts(res.data.counts.filter((dayCount) => dayCount.status !== true));
        const currentCount = res.data.counts.filter((dayCount) => dayCount.status === true);
        if (currentCount.length > 0) {
          setTodayCount(currentCount[0]);
        }
      })
      .catch(() => {
        console.log('an error occured while fetching data');
      });
  };

  useEffect(() => {
    getAllDayCounts();
  }, []);
  return (
    <div>
      <section>
        <h2 className="counter-text">{todayCount?.count || 0}</h2>
        <button type="button" className="btn-primary btn">Click Me</button>
      </section>
      <DayCountsTable dayCounts={dayCounts} />
    </div>
  );
};

export default Home;
