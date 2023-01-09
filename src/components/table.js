import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Table = () => {
  const [user, setUser] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/getuser/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data.data));
  }, [id]);
  return (
    <div className="table-responsive mt-5">
      <table className="table table-hover table-success table-striped">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Qualifications</td>
            <td>Work History</td>
            <td>Interests & Hobbies</td>
            <td>Availability Date</td>
            <td>Email</td>
            {/* <td>Phone</td> */}
            {/* <td>Password</td> */}
            {/* <td>ConfirmPassword</td> */}
          </tr>
          <tr>
            <td>{user?.FirstName}</td>
            <td>{user?.Qualifications}</td>
            <td>{user?.WorkHistory}</td>
            <td>{user?.InterestsHobbies}</td>
            <td>{user?.AvailabilityDate}</td>
            <td>{user?.Email}</td>
            {/* <td>{user?.Password}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
