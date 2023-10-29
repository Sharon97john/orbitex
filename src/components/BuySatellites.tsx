import React, { useState, useEffect } from "react";

import { buyTicketOperation, endGameOperation } from "../utils/operation";
import { fetchStorage } from "../utils/tzkt";

const BuySatellites = () => {
  // Players holding lottery tickets
  const [players, setPlayers] = useState<string[]>([]);
  const [tickets, setTickets] = useState<number>(3);
  const [loading, setLoading] = useState<boolean>(false);

  // Set players and tickets remaining
  useEffect(() => {
    // TODO 9 - Fetch players and tickets remaining from storage
    const fetchData = async () => {
      const storage = await fetchStorage();

      setPlayers(Object.values(storage.players));
      setTickets(storage.tickets_available);
    };

    fetchData();
  }, []);

  // TODO 7.a - Complete onBuyTicket function
  const onBuyTicket = async () => {
    try {
      setLoading(true);
      await buyTicketOperation();
      alert("Sucessfully buy a ticket");
    } catch (error) {
      throw error;
    }
    setLoading(false);
  };

  // TODO 11.a - Complete onEndGame function
  const onEndGame = async () => {
    try {
      setLoading(true);
      await endGameOperation();
      alert("Game Over");
    } catch (error) {
      throw error;
    }
    setLoading(false);
  };

  return (
    <div className="content">
      <div className="d-flex flex-column justify-content-center align-items-center h-100 tbl-orb">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Items</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Right Wing Cube Satellite</td>
              <td>
                {tickets > 0 ? (
                  <button
                    onClick={onBuyTicket}
                    className="btn btn-primary btn-mg btn-outline-info"
                  >
                    {loading ? "Loading..." : "Bid"}
                  </button>
                ) : (
                  <button
                    onClick={onEndGame}
                    className="btn btn-success btn-mg btn-outline-info"
                  >
                    {loading ? "Loading..." : "End Game"}
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Solar Panel (Both Wings !)</td>
              <td>
                {tickets > 0 ? (
                  <button
                    onClick={onBuyTicket}
                    className="btn btn-primary btn-mg btn-outline-info"
                  >
                    {loading ? "Loading..." : "Bid"}
                  </button>
                ) : (
                  <button
                    onClick={onEndGame}
                    className="btn btn-success btn-mg btn-outline-info"
                  >
                    {loading ? "Loading..." : "End Game"}
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>X-ray Calorimeter</td>
              <td>
                {tickets > 0 ? (
                  <button
                    onClick={onBuyTicket}
                    className="btn btn-primary btn-mg btn-outline-info"
                  >
                    {loading ? "Loading..." : "Bid"}
                  </button>
                ) : (
                  <button
                    onClick={onEndGame}
                    className="btn btn-success btn-mg btn-outline-info"
                  >
                    {loading ? "Loading..." : "End Game"}
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};



export default BuySatellites;
