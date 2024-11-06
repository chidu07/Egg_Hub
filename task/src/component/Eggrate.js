import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Eggrate() {
  const [rate, setrate] = useState("");

  const history = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("Data to be sent:", { rate });
    try {
      const response = await axios.post("http://localhost:8000/api/addegg", {
        rate: rate,
      });
      // history("/layout");

      // .then((res) => history("/"));

      console.log(response.data);
      setrate("");
      alert("successfully Egg Rate Added");

      // if (response && response.data) {
      //   console.log(response.data);
      // } else {
      //   console.error("Error: No response data received");
      // }
    } catch (error) {
      console.error("Error add task:", error.response.data);
    }
  };

  return (
    <form onSubmit={handlesubmit}>
      <div className="back">
        <center>
          <h1>Egg Rate</h1>
        </center>
        <div className="container" id="add">
          <div className="mb-3 " id="task">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Enter Egg Rate
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={rate}
              onChange={(e) => {
                setrate(e.target.value);
              }}
              required
            />
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              // onClick={handlesubmit}
            >
              Add Egg Rate
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
