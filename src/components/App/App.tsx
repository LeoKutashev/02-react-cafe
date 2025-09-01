import { useState } from "react";
import styles from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import VoteStats from "../VoteStats/VoteStats.tsx";
import Notification from "../Notification/Notification.tsx";
import type { Votes, VoteType } from "../../types/votes.ts";

const App = () => {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  const handleVote = (type: VoteType): void => {
    setVotes((prevVotes) => ({ ...prevVotes, [type]: prevVotes[type] + 1 }));
  };
  const totalVotes = votes.good + votes.neutral + votes.bad;

  const positivePercentage = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  const resetVotes = (): void => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={styles.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        canReset={totalVotes > 0}
        onReset={resetVotes}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
