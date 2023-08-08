import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { TfiFaceSad } from "react-icons/tfi";

function Table() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const url =  `${process.env.REACT_APP_BASE_URL}/api/get/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = sessionStorage.getItem("uid");
        const response = await axios.get(url + id);
        setUser(response.data);
        console.log("user information", response);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);


  const indexOfLastRow = currentPage * rowsPerPage;

  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  // Get the rows for the current page
  const currentRows = user?.user?.refers?.slice(indexOfFirstRow, indexOfLastRow);
  // const currentRows =
  //   user?.user?.refers
  //     ?.slice(indexOfFirstRow, indexOfLastRow)
  //     ?.filter(
  //       (item) =>
  //         item?.rfname && item?.remail && item?.rcontact && item?.rcourse
  //     ) || [];
  // const currentRows = user?.user?.refers
  // ?.filter(
  //   (item) =>
  //     item?.rfname && item?.remail && item?.rcontact && item?.rcourse
  // )
  // .slice(indexOfFirstRow, indexOfLastRow) || [];
  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [status, setStatus] = useState([]);
  const statusurl =  `${process.env.REACT_APP_BASE_URL}/api/get/`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = sessionStorage.getItem("uid");
        const response = await axios.get(statusurl + id);
        setUser(response.data);
        console.log("user information", response)
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>
        <b> All Referrals </b>
      </h3>
      {!user?.user?.refers || user?.user?.refers.length === 0 ? (
        <div className="noReferrals">
          No referrals yet &nbsp;
          <TfiFaceSad />
        </div>
      ) : (
        <div>
          <table className="uk-table uk-table-striped referTable">
            <thead>
              <tr className="tableHeading">
                <th>Sl No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Course</th>
                <th>Stream</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((item, index) => (
                <tr key={item.id}>
                  <td>{indexOfFirstRow + index + 1}</td>
                  <td>{item?.rfname ? item.rfname : "null"}</td>
                  <td>{item?.rlname ? item.rlname : "null"}</td>
                  <td>{item?.remail ? item.remail : "null"}</td>
                  <td>{item?.rcontact ? item.rcontact : "null"}</td>
                  <td>{item?.rcourse ? item.rcourse : "null"}</td>
                  <td>{item?.rduration ? item.rduration : "null"}</td>
                  <td>{item?.rstatus ? item.rstatus : "Not Enrolled"}</td>
      
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}

          {user?.user?.refers?.length > rowsPerPage && (
            <div className="pagination">
              {Array.from({
                length: Math.ceil(user?.user?.refers.length / rowsPerPage),
              }).map((_, index) => (
                <button
                  key={index}
                  className={currentPage === index + 1 ? "active" : ""}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Table;
