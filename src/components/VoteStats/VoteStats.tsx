import style from "./VoteStats.module.css";
import type { Votes } from "../../types/votes.ts";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

const VoteStats = ({ votes, totalVotes, positiveRate }: VoteStatsProps) => (
  <div className={style.container}>
    <p className={style.stat}>
      Good: <strong>{votes.good}</strong>
    </p>
    <p className={style.stat}>
      Neutral: <strong>{votes.neutral}</strong>
    </p>
    <p className={style.stat}>
      Bad: <strong>{votes.bad}</strong>
    </p>
    <p className={style.stat}>
      Total: <strong>{totalVotes}</strong>
    </p>
    <p className={style.stat}>
      Positive: <strong>{positiveRate}%</strong>
    </p>
  </div>
);
export default VoteStats;
