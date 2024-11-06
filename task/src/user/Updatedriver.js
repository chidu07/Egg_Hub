import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export default function Updatedriver() {
  const [task, settask] = useState([]);
  const [eggrate, seteggrate] = useState(null);
  const [did, setdid] = useState("");
  const [name, setname] = useState("");
  const [sname, setsname] = useState("");
  const [eggsale, setnooftray] = useState("");
  const [amount, setamount] = useState("");
  const [ramt, setramt] = useState("");
  const [balance, setbalance] = useState("");
  const [pbal, setpbal] = useState("");

  const [dname, setSelectedEmployee] = useState("");

  const handleSelectEmployee = (dname) => {
    setSelectedEmployee(dname);
  };

  useEffect(() => {
    setdid(localStorage.getItem("did"));
    setname(localStorage.getItem("dname"));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/getdriver")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          settask(data.data);
        } else {
          console.error(data.message);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8000/api/dispegg")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //         seteggrate(data.data);
  //       } else {
  //         console.error(data.message);
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  // console.log(eggrate);
  // const onamt = (e) => {
  //   setamt(eggsale * eggrate);
  // };
  // useEffect(() => {
  //   fetch("http://localhost:8000/api/dispegg")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //         // Assuming you want to extract the rate based on some condition, for example, based on the id
  //         const desiredId = 1; // Change this according to your condition
  //         const rateObject = data.data.find((item) => item.id === desiredId);

  //         if (rateObject) {
  //           const rate = rateObject.rate;
  //           seteggrate(rate);
  //         } else {
  //           console.error("Rate not found for the desired id:", desiredId);
  //         }
  //       } else {
  //         console.error(data.message);
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  useEffect(() => {
    fetch("http://localhost:8000/api/dispegg")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Sort the data based on a timestamp or another criterion to get the most recent rate
          const sortedData = data.data.sort(
            (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
          );

          // Check if there is any data
          if (sortedData.length > 0) {
            // Get the rate from the most recent entry
            const mostRecentRate = sortedData[sortedData.length - 1].rate;
            seteggrate(mostRecentRate); // Set the egg rate to the most recent rate
          } else {
            console.error("No egg rates found in the database.");
          }
        } else {
          console.error(data.message);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Calculate amount whenever eggsale or eggrate changes
    if (eggsale && eggrate) {
      const calculatedAmount = eggsale * eggrate * 24;
      setamount(calculatedAmount);
    }
  }, [eggsale, eggrate]);

  useEffect(() => {
    // Calculate balance whenever amount or ramt changes
    if (amount && ramt) {
      const calculatedBalance = amount - ramt;
      setbalance(calculatedBalance);
    }
  }, [amount, ramt]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    // setamt(eggsale * eggrate);
    // setbal(amt - ramt);
    // const amount = eggsale * eggrate;

    // Calculate balance
    // const balance = amount - ramt;
    console.log("Data to be sent:", {
      dname,
      sname,
      eggsale,
      amount,
      ramt,
      balance,
      pbal,
    });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/updateddriver",
        {
          dname: dname,
          sname: sname,
          eggsale: eggsale,
          amt: amount,
          ramt: ramt,
          bal: balance,
          pbal: pbal,
        }
      );
      // history("/viewtask");

      // .then((res) => history("/"));

      console.log(response.data);
      alert("updation successfully done");
      setname("");
      setSelectedEmployee("");
      setnooftray("");
      setsname("");
      seteggrate("");
      setamount("");
      setramt("");
      setbalance("");
      setpbal("");
      // setedate("");
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
    <div>
      <form onSubmit={handlesubmit}>
        <center>
          <h1>Update The Line Infromation to Admin</h1>
        </center>
        <div className="back" id="back">
          <div className="container" id="addsub">
            <div className="mb-3 " id="task">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
              ></label>
              <div className="dropdown">
                <a
                  className="btn btn-secondary dropdown-toggle "
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Driver Name
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    {task.map((t, index) => (
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleSelectEmployee(t.dname)}
                      >
                        {t.dname}
                      </a>
                    ))}
                  </li>
                </ul>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={dname}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3 " id="task">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Shop Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={sname}
                onChange={(e) => setsname(e.target.value)}
              />
            </div>
            <div className="mb-3 " id="task">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Number Of Egg Trays Sold
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={eggsale}
                onChange={(e) => setnooftray(e.target.value)}
              />
            </div>
            <div className="mb-3 " id="task">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Amount
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                // onClick={onamt()}
                value={amount}
                readOnly
              />
            </div>

            <div className="mb-3 " id="task">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Received Amount
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={ramt}
                onChange={(e) => setramt(e.target.value)}
              />
            </div>

            <div className="mb-3 " id="task">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Balance
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={balance}
                readOnly
              />
            </div>

            <div className="mb-3 " id="task">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Previous Balance
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                // value={balance}
                value={pbal}
                onChange={(e) => setpbal(e.target.value)}
              />
            </div>
            {/* <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle "
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Employees
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                {tasks.map((t, index) => (
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleSelectEmployee(t.ename)}
                  >
                    {t.ename}
                  </a>
                ))}
              </li>
            </ul>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={selectedEmployee}
            />
          </div> */}

            <br></br>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-lg">
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
