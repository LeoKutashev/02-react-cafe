import { useState } from 'react';
import styles from './App.module.css';
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notificacion/Notificacion";
import type { Vote, VoteOption } from "../VoteType.ts";

const App = () => {
    const [votes, setVotes] = useState<Vote>({ Good: 0, Neutral: 0, Bad: 0 });
 
    const handleVote = (type: VoteOption): void => {
        setVotes(prevVotes => ({ ...prevVotes, [type]: prevVotes[type] + 1 }));
    };
    const totalVotes = votes.Good + votes.Neutral + votes.Bad;
    const positivePercentage = totalVotes === 0 ? 0 : Math.round((votes.Good / totalVotes) * 100);
    const resetVotes = (): void => { setVotes({ Good: 0, Neutral: 0, Bad: 0 }); };
    
    return (
        <div className={styles.app}>
            <CafeInfo />
            <VoteOptions onVote={handleVote}
            canResetVotes={totalVotes > 0} onResetVotes={resetVotes}
                />
            {totalVotes === 0 ? (<VoteStats votes={votes} totalVotes={totalVotes} positivePercentage={positivePercentage} />) : (<Notification/>)}</div>);
};
export default App;