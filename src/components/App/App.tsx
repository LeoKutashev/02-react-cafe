import { useState } from "react";
import styles from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import VoteStats from "../VoteStats/VoteStats.tsx";
import Notification from "../Notification/Notification.tsx";
import type { Vote, VoteOption } from "../../types/VoteType.ts";

const App = () => {
  const [votes, setVotes] = useState<Vote>({ Good: 0, Neutral: 0, Bad: 0 });

  const handleVote = (type: VoteOption): void => {
    setVotes((prevVotes) => ({ ...prevVotes, [type]: prevVotes[type] + 1 }));
  };
  const totalVotes = votes.Good + votes.Neutral + votes.Bad;

  const positivePercentage = totalVotes
    ? Math.round((votes.Good / totalVotes) * 100)
    : 0;

  const resetVotes = (): void => {
    setVotes({ Good: 0, Neutral: 0, Bad: 0 });
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
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
