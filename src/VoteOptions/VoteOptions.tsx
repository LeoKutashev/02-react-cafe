import style from './VoteOptions.module.scss';
import type { VoteOption} from '../VoteType.ts';
interface VoteOptionsProps {
    onVote: (type: VoteOption) => void;
    canResetVotes: boolean;
    onResetVotes: () => void;
}

const VoteOptions = ({ onVote, canResetVotes, onResetVotes }: VoteOptionsProps) => {
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
            
            {canResetVotes && (
                <button
                    type="button"
                    className={`${style.button} ${style.reset}`}
                    onClick={onResetVotes}
                >
                    Reset
                </button>
            )}
        </div>
    );
};

export default VoteOptions;