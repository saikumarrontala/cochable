import { useState } from "react";

const Test = () => {
  const [isForm, setIsForm] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      name: "va",
      age: 2,
    },
    {
      id: 2,
      name: "va1",
      age: 22,
    },
  ]);

  const handleAdd = () => {
    setIsForm(true);
  };
  const handleSub = () => {
    //get fields newAdded={name,age}
    //get const newData=[...data]
    //newData.push()
    //setData(newData)
    //hide form
  };
  const [fields, setFields] = useState({});
  const editForm = () => {};
  return (
    <div>
      
      {isForm ? (
        <div>
          <h1>Add Record</h1>
          <input placeholder="name" />
          <input placeholder="age" />
          <button onClick={handleSub.bind(this)}>submit</button>
        </div>
      ) : (
        <div>
          <button onClick={handleAdd.bind(this)}>ADD</button>
          <table>
            <tr>
              <th>Name</th>
              <th>age</th>
            </tr>
            {data.map((item) => {
              return (
                <tr>
                  <td>
                    <button onClick={handleEdit.bind(this, item)}>Edit</button>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
};
export default Test;
