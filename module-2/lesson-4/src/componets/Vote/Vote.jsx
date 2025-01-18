import { useState } from "react";

const Vote = () => {
  const [votingData, setVotingData] = useState({
    macOs: 0,
    windows: 0,
    linux: 0,
    android: 0,
  });

  const handleChooseOption = (option) => {
    console.log(option);
    // 1-й спосіб (кращий)
    setVotingData((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));

    // 2-й спосіб
    // if (option === "macOs") {
    //   setVotingData((prev) => ({
    //     ...prev,
    //     macOs: prev.macOs + 1,
    //   }));
    // }
    // if (option === "windows") {
    //   setVotingData((prev) => ({
    //     ...prev,
    //     windows: prev.windows + 1,
    //   }));
    // }
    // if (option === "linux") {
    //   setVotingData((prev) => ({
    //     ...prev,
    //     linux: prev.linux + 1,
    //   }));
    // }
  };

  const btnOptions = Object.keys(votingData); // -> ['macOs', 'windows', 'linux']

  return (
    <div>
      <ul>
        {/* console.log(Object.values(votingData)); */}
        <li>macOs: {votingData.macOs}</li>
        <li>windows: {votingData.windows}</li>
        <li>linux: {votingData.linux}</li>
        <li>android: {votingData.android}</li>
      </ul>
      {btnOptions.map((option) => (
        <button key={option} onClick={() => handleChooseOption(option)}>
          {option}
        </button>
      ))}
      {/* <button onClick={() => handleChooseOption("macOs")}>macOs</button>
      <button onClick={() => handleChooseOption("windows")}>windows</button>
      <button onClick={() => handleChooseOption("linux")}>linux</button> */}
    </div>
  );
};

export default Vote;
