

import { useState } from "react";

export default function APITest() {



    const [A, setAState] = useState(0);
    const [B, setBState] = useState(0);

    const AbuttonClick = () => {
        console.log("ボタンクリックされたよ")
        setAState(A + 1)
        console.log("A:" + A)
    }

    const BbuttonClick = () => {
        console.log("ボタンクリックされたよ")
        setBState(B + 1)
        console.log("B:" + B)
    }

    return (
        <div style={{ width: "100%", height: "300px;", margin: "30px;" }}>

            <div style={{ margin: "20px;" }}>
                A={A}
            </div>

            <div style={{ margin: "20px;" }}>
                B={B}
            </div>

            <button onClick={AbuttonClick}
                style={{ margin: "20px;" }}
            >
                Aをプラス
            </button>
            <button onClick={BbuttonClick}
                style={{ margin: "20px;" }}>
                Bをプラス
            </button>

        </div>
    );
}
