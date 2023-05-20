import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
// import { Table } from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [teams, setteams] = useState([]);
  const [player, setplayer] = useState([]);
  // const [isShown, setIsShown] = useState(false);

  // const handleClick = (event) => {
  //   setIsShown((current) => !current);
  // };

  const fetchTeamData = () => {
    fetch("https://api.npoint.io/20c1afef1661881ddc9c")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setteams(data?.teamsList);
        setplayer(data?.playerList);
        // console.log(data)
        // console.log(data?.teamsList);
        console.log(data?.playerList);
      });
  };
  
  useEffect(() => {
    fetchTeamData();
  }, []);

  return (
    <div>
      {teams.length > 0 && (
        <table className="table table-stripped table-bordered ">
          <thead>
            <tr>
              <th> Web Name</th>
              <th> Official Name</th>
              <th> Short Name</th>
              <th> Is Active</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((user) => (
              <tr key={user.TID}>
                <td>{user.WebName}</td>
                <td>{user.OfficialName}</td>
                <td>{user.ShortName}</td>
                <td>{user.IsActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <hr />
      <h3>Player List</h3>
      {player.length > 0 && (
        <table className="table table-stripped table-bordered ">
          <tbody>
            {player.map((players) => (
              <tr>
                <td key={players.Id}>{players.Id}</td>
                <td key={players.TID}>{players.TID}</td>
                <td key={players.GDID}>{players.GDID}</td>
                <td key={players.CCode}>{players.CCode}</td>
                <td key={players.Skill}>{players.Skill}</td>
                <td key={players.TName}>{players.TName}</td>
                <td key={players.Value}>{players.Value}</td>
                <td key={players.PDName}>{players.PDName}</td>
                <td key={players.PFName}>{players.PFName}</td>
                <td key={players.SelPer}>{players.SelPer}</td>
                <td key={players.TSCode}>{players.TSCode}</td>
                <td key={players.PStatus}>{players.PStatus}</td>
                <td key={players.Trained}>{players.Trained}</td>
                <td key={players.AwayGoal}>{players.AwayGoal}</td>
                <td key={players.CurGDPts}>{players.CurGDPts}</td>
                <td key={players.IsActive}>{players.IsActive}</td>
                <td key={players.MatchAtd}>{players.MatchAtd}</td>
                <td key={players.MinsPlyd}>{players.MinsPlyd}</td>
                <td key={players.AvbStatus}>{players.AvbStatus}</td>
                <td key={players.SkillDesc}>{players.SkillDesc}</td>
                <td key={players.TOfflName}>{players.TOfflName}</td>
                <td key={players.IsInFinalSquad}>{players.IsInFinalSquad}</td>
                <td key={players.UpComingMatchesList} style={{minWidth:'200px'}}>
                  {/* <button className="btn btn-primary" onClick={handleClick}>
                    {" "}
                    Check Upcooming Match
                  </button> */}
                  {/* {isShown && ( */}
                    <div style={{position:'relative'}}>
                    <div className="custom-modal1">
                      <h6> Upcoming match</h6>
                      <hr/>
                      {/* <a className="close" onClick={handleClick}>
                        X
                      </a> */}
                      <ul className="table-stripped table-bordered " style={{listStyleType:'none'}}>
                        {players.UpComingMatchesList.map((detail) => (
                          <>
                            <li>{" "}<label> TID </label>{detail.TID}</li>
                            <li>
                              {" "}
                              <label> TLoc : </label>
                              {detail.TLoc}
                            </li>
                            <li>
                              {" "}
                              <label> CCode :</label>
                              {detail.CCode}
                            </li>
                            <li>
                              <label> MDate :</label>
                              {detail.MDate}
                            </li>
                            <li>
                              <label> VsTID :</label>
                              {detail.VsTID}
                            </li>
                            <li>
                              <label> TSCode :</label>
                              {detail.TSCode}
                            </li>
                            <li>
                              <label> VsTLoc :</label>
                              {detail.VsTLoc}
                            </li>
                            <li>
                              <label> VsCCode :</label>
                              {detail.VsCCode}
                            </li>
                            <li>
                              <label> VsTSCode :</label>
                              {detail.VsTSCode}
                            </li>
                          </>
                        ))}
                      </ul>
                    </div>
                    </div>
                  {/* )} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
