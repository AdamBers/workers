import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function WorkerItem({ workerId }) {
  const data = useSelector((state) => state.main.employees);
  const worker = data.find((item) => item.id === workerId);
  return (
    <>
      <Link to={`/employee/${worker.id}`}>
        <div className="worker">
          <span className="worker__id">{worker.id}</span>
          <span className="worker__name">{worker.name}</span>
          <span className="worker__phone">{worker.phone}</span>
          <span className="worker__birthday">{worker.birthday}</span>
          <span className="worker__role">{worker.role}</span>
          <span className="worker__isArchive">{String(worker.isArchive)}</span>
        </div>
      </Link>
    </>
  );
}

export default WorkerItem;
