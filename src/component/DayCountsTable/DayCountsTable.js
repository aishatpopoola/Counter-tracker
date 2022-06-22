import React from 'react';

const DayCountsTable = ({ dayCounts }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Total Counts</th>
      </tr>
    </thead>
    <tbody className="table-tbody">
      {dayCounts.length > 0
      && dayCounts.map((dayCount) => (
        <tr key={dayCount.id}>
          <td>{dayCount.day}</td>
          <td>{dayCount.count}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DayCountsTable;
