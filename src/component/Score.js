import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionData";

const Score = ()=> {
    const {score,setAppState,setScore} = useContext(DataContext)

    const restarApp=()=>{
        setScore(0)
        setAppState("menu")
    }
    return (
        <div className="score">
            <h1>สรุปผลคะเเนน</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restarApp}>ทำแบบทดสอบอีกครั้ง</button>
        </div>
    )
}
export default Score;