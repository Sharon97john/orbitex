import React from "react";
const CastVotes = () => {
  return (
    <div className="content">
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Proposals</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>ESA decommisioned cubeSat</td>
              <td>
                <button className="btn btn-outline-success">
                  Approve
                </button>
                <button className="btn btn-outline-danger">
                  Disapprove
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>ESA decommisioned ERS-1</td>
              <td>
                <button className="btn btn-outline-success">
                  Approve
                </button>
                <button className="btn btn-outline-danger">
                  Disapprove
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>PROBA-V antenna</td>
              <td>
                <button className="btn btn-outline-success">
                  Approve
                </button>
                <button className="btn btn-outline-danger">
                  Disapprove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CastVotes;
