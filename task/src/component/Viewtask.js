import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Viewtask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/driverupdates")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTasks(data.data);
        } else {
          console.error(data.message);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // const settolocalstorage = (tid, tname) => {
  //   localStorage.setItem("id", tid);
  //   localStorage.setItem("name", tname);
  // };

  return (
    <div className="back">
      <center>
        <h1>Update From The Driver</h1>
      </center>
      <div className="container d-flex justify-content-center bg-dark ">
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Driver Name</th>
              <th scope="col">shop Name</th>
              <th scope="col">No Of tray slale</th>
              <th scope="col">Amount</th>
              <th scope="col">Received Amount</th>
              <th scope="col">Balance Amount</th>
              <th scope="col">Previuos Balance Amount</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <th scope="row">{task.id}</th>
                <td>{task.dname}</td>
                <td>{task.sname}</td>
                <td>{task.eggsale}</td>
                <td>{task.amt}</td>
                <td>{task.ramt}</td>
                <td>{task.bal}</td>
                <td>{task.pbal}</td>
                {/* <td>
                  <button type="button" className="btn btn-success">
                    Edit Task
                  </button>
                </td> */}
                {/* <td>
                  <Link to="/addemp">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => settolocalstorage(task.tid, task.tname)}
                    >
                      Assign Employee
                    </button>
                  </Link>
                </td> */}
                {/* <td>
                  <button type="button" className="btn btn-danger">
                    Delete Task
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
