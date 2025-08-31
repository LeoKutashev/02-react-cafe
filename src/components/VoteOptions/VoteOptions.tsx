import style from './VoteOptions.module.css';
import type { VoteOption} from '../../types/VoteType.ts';
interface VoteOptionsProps {
    onVote: (type: VoteOption) => void;
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