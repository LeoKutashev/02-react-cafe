import style from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes.ts";
interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  canReset: boolean;
  onReset: () => void;
}

const VoteOptions = ({ onVote, canReset, onReset }: VoteOptionsProps) => {
  return (
    <div className={style.container}>
      <button
        type="button"
        className={style.button}
        onClick={() => onVote("Good")}
      >
        Good
      </button>

      <button
        type="button"
        className={style.button}
        onClick={() => onVote("Neutral")}
      >
        Neutral
      </button>

      <button
        type="button"
        className={style.button}
        onClick={() => onVote("Bad")}
      >
        Bad
      </button>

      {canReset && (
        <button
          type="button"
          className={`${style.button} ${style.reset}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default VoteOptions;
