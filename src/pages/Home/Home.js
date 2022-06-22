import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import DayCountsTable from '../../component/DayCountsTable/DayCountsTable';
import { configHeader } from '../../utils/config';
import { addCountRoute, getDayCountsRoute } from '../../utils/routes';
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
  const [count, setCount] = useState(0);
  const [debouncedCount, setDebouncedCount] = useState(0);

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

  const addTodaysCount = () => {
    const payload = { counter: debouncedCount };

    Axios.post(addCountRoute, payload, configHeader)
      .then((res) => {
        if (res.data.is_first_time_counting_today && todayCount.status) {
          setDayCounts([...dayCounts, todayCount]);
          setTodayCount(res.data.count);
        }
        setCount(0);
        setDebouncedCount(0);
      })
      .catch(() => {

      });
  };

  useEffect(() => {
    if (debouncedCount) {
      addTodaysCount();
    }
  }, [debouncedCount]);

  useEffect(() => {
    const countTimer = setTimeout(() => {
      setDebouncedCount(count);
    }, 1000);
    return () => {
      clearTimeout(countTimer);
    };
  }, [count]);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
    setTodayCount({ ...todayCount, count: todayCount.count + 1 });
  };

  return (
    <div>
      <section>
        <h2 className="counter-text">{todayCount?.count || 0}</h2>
        <button type="button" className="btn-primary btn" onClick={incrementCount}>Click Me</button>
      </section>
      <section className="section">
        <DayCountsTable dayCounts={dayCounts} />
      </section>
    </div>
  );
};

export default Home;
