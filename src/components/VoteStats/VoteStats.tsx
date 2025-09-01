import style from "./VoteStats.module.css";
import type { Vote } from "../../types/votes.ts";

interface VoteStatsProps {
  votes: Vote;
  totalVotes: number;
  positivePercentage: number;
}

const VoteStats = ({
  votes,
  totalVotes,
  positivePercentage,
}: VoteStatsProps) => (
  <div className={style.container}>
    <p className={style.stat}>
      Good: <strong>{votes.Good}</strong>
    </p>
    <p className={style.stat}>
      Neutral: <strong>{votes.Neutral}</strong>
    </p>
    <p className={style.stat}>
      Bad: <strong>{votes.Bad}</strong>
    </p>
    <p className={style.stat}>
      Total: <strong>{totalVotes}</strong>
    </p>
    <p className={style.stat}>
      Positive: <strong>{positivePercentage}%</strong>
    </p>
  </div>
);
export default VoteStats;
