// import logo from "./logo.svg";

import React, { useEffect, useState } from "react";
// import Table from "./components/Tableforuser";
// import Form from "./components/formforUsers";
import "./App.css";
import { StudentsData } from "./components/studentsData";

function App() {
  // by using useState we define studentsData
  const [data, setData] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState(0);
  const [isUpdated, setIsUpdated] = useState(false);

  //useeffect   to call data
  useEffect(() => {
    setData(StudentsData);
  }, []);

  // event handlers
  const handleEdit = (studentId) => {
    const dt = data.filter((item) => item.studentId === studentId);
    //find or find index
    if (dt !== undefined) {
      setIsUpdated(true);
      setStudentId(studentId);
      setFullName(dt[0].fullName);
      setEmail(dt[0].email);
      // setS(dt[0].studentId);
    }
  };
  const handleDelete = (studentId) => {
    if (studentId > 0) {
      if (window.confirm("Are you sure want to delete?")) {
        //use slice or splice filter.
        const dt = data.filter((item) => item.studentId !== studentId);
        setData(dt);
      }
    }
  };

  const handleSave = (e) => {
    let error = "";
    if (studentId < 0) error += "StudentId is Required";

    if (fullName === "") error += "FullName is Required";

    if (email === "") error += "Email is Required";

    if (error !== "") {
      e.preventDefault();
      const dt = [...data];
      const newObject = {
        studentId: StudentsData.length + 1,
        fullName: fullName,
        email: email,
      };
      dt.push(newObject);
      setData(dt);
    } else {
      alert(error);
    }
  };
  const handleUpdate = () => {
    const index = data
      .map((item) => {
        return item.studentId;
      })
      .indexOf(studentId);
    const dt = [...data];
    dt[index].fullName = fullName;
    dt[index].email = email;
    dt[index].studentId = studentId;

    setData(dt);
    handleClear();
  };

  const handleClear = () => {
    setStudentId(0);
    setFullName("");
    setEmail("");
    setIsUpdated(false);
  };
  // const handleChange=(e,fieldName)=>{

  //   const upFields={...fields}

  //   upFields[fieldName]=e.target.value
  //   setFields(upFields)
  // }
  return (
    <div>
      <h2>Crud Operations</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <div>
          <label>
            studentId:
            <input
              type="number"
              placeholder="studentId"
              onChange={(e) => setStudentId(e.target.value)}
              value={studentId}
            />
          </label>
        </div>
        <div>
          {/* creating form to edit and  save or clear data */}
          <label>
            FullName:
            <input
              type="text"
              placeholder="Enter FullName"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              type="Email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
        </div>

        <div>
          {/* using terinery operator for saving and updating the data */}
          {!isUpdated ? (
            <button
              className="btn btn-primary"
              onClick={(e) => {
                handleSave(e);
              }}
            >
              Save
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => {
                handleUpdate();
              }}
            >
              Update
            </button>
          )}

          <button
            className="btn btn-danger"
            onClick={() => {
              handleClear();
            }}
          >
            Clear
          </button>
        </div>
      </div>
      {/* studentdata table  */}
      <table className="designtable">
        <thead>
          <tr>
            <th>studentId</th>
            <th>FullName</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* loop method used for  maping the ietams from studentdata  */}
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.studentId}</td>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    // btn btn-primary is bootstrap inbult key word for styling
                    className="btn btn-primary "
                    onClick={() => {
                      handleEdit(item.studentId);
                    }}
                  >
                    Edit
                  </button>
                  {/* &nbsp is inbult bootstrap button for spacing */}
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(item.studentId);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
