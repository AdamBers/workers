import React, { useState } from "react";
import WorkerItem from "../components/WorkerItem";
import { useSelector } from "react-redux";

function Employees() {
  const data = useSelector((state) => state.main.employees);
  const [sortBy, setSortBy] = useState("initial");
  const [filterByRole, setFilterByRole] = useState("all");
  const [filterByActivity, setFilterByActivity] = useState(false);

  // Sort
  function sortHandler(event) {
    setSortBy(event.target.value);
  }
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split(".").map(Number);
    return new Date(year, month - 1, day); // Месяцы начинаются с 0
  };

  const sortByFieldName = (arr, fieldName) => {
    if (sortBy === "initial") {
      return data;
    }
    if (sortBy === "birthday") {
      return [...arr].sort((a, b) => {
        const dateA = parseDate(a["birthday"]).getTime();
        const dateB = parseDate(b["birthday"]).getTime();
        return dateA - dateB;
      });
    } else {
      return [...arr].sort((a, b) => a[fieldName].localeCompare(b[fieldName]));
    }
  };
  const sortedData = sortByFieldName(data, sortBy);

  // FilterByRole
  function filterByRoleHandler(event) {
    setFilterByRole(event.target.value);
  }

  const filterByRoleFunction = (sortedData) => {
    if (filterByRole === "all") {
      return sortedData;
    }
    return sortedData.filter((item) => item.role === filterByRole);
  };
  const filteredData = filterByRoleFunction(sortedData);

  // FilterByActivity
  function filterByActivityHandler(event) {
    setFilterByActivity(!filterByActivity);
  }

  const filterByActivityFunction = (filteredData) => {
    if (filterByActivity === true) {
      return filteredData.filter((item) => item.isArchive === true);
    }
    if (filterByActivity === false) {
      return filteredData.filter((item) => item.isArchive === false);
    }
  };
  const finalData = filterByActivityFunction(filteredData);

  return (
    <div className="employees">
      <h3>Employees</h3>
      <div className="employees__actions">
        <div className="employees__sort">
          <span>Sort By</span>
          <select name="sort" id="sort-select" onChange={sortHandler}>
            <option value="initial">Initial</option>
            <option value="name">Name</option>
            <option value="birthday">Birthday</option>
          </select>
        </div>
        <div className="employees__filterByRole">
          <span>Filter By Role</span>
          <select
            name="filter"
            id="activity-select"
            onChange={filterByRoleHandler}
          >
            <option value="all">All</option>
            <option value="driver">Driver</option>
            <option value="waiter">Waiter</option>
            <option value="cook">Cook</option>
          </select>
        </div>
        <div className="employees__filterByActivity">
          <span>Archive</span>
          <input type="checkbox" onChange={filterByActivityHandler} />
        </div>
      </div>
      <div className="employees__header">
        <div className="worker__id">Id</div>
        <div className="worker__name">Name</div>
        <div className="worker__phone">Phone</div>
        <div className="worker__birthday">Birthday</div>
        <div className="worker__role">Role</div>
        <div className="worker__isArchive">IsArchive</div>
      </div>
      {finalData.map((worker) => {
        return <WorkerItem workerId={worker.id} key={worker.id} />;
      })}
    </div>
  );
}

export default Employees;
