import React from "react";
import { useParams } from "react-router-dom";
import WorkerItem from "../components/WorkerItem";

function EditPage() {

  const { employeeId } = useParams();
  

  return (
    <div className="ghg">
      <WorkerItem workerId={Number(employeeId)} />
    </div>
  );
}

export default EditPage;
