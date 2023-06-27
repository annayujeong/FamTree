import React, { useState } from "react";
import "../styles/Home.css";

const Home = () => {
    const [current, setCurrent] = useState("");

    const addRelationship = (value: string) => {
        // TODO: not necessarily concat strings, but should do something with this value
        setCurrent(current + " " + value);
    };

    const [isDone, setIsDone] = useState(false);
    const showResult = () => {
        setIsDone(true);
    }
    const result = "Done";

    const reset = () => {
        setCurrent("");
        setIsDone(false);
    };

    return (
        <div className="homeContainer">
            <div className="homeSubContainer">
                <div>
                    <p className="homeWelcomeText">Welcome to FamTree!</p>
                </div>
                <div>
                    <form>
                        <label>
                            Add relationship:
                            <select
                                onChange={e => addRelationship(e.target.value)}
                            >
                                <option value="sister">Sister</option>
                                <option value="brother">Brother</option>
                            </select>
                        </label>
                        <button type="reset">Reset</button>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div>
                    <p>{current}</p>
                    <p>{isDone ? result : ""}</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
