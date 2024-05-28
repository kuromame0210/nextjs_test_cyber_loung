

import { useState } from "react";

export default function ZipCode() {

    const [zipcodeText, setText] = useState("100-0001");
    const [resultText, setResultText] = useState("");

    const [isLoading, setIsLoading] = useState(false);


    const getAdress = (e: any) => {

        setIsLoading(true);


        e.preventDefault();
        fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcodeText}`)
            .then(res => res.json())
            .then(data => {

                console.log({ data })

                setResultText(
                    data.results[0].address1 + data.results[0].address2 + data.results[0].address3
                )
                setIsLoading(false);

            })
            .catch(() => {
                alert("error")
            });
    }


    return (
        <div style={{ width: "100%", height: "300px;", margin: "30px;" }}>


            <input
                value={zipcodeText}
                onChange={(event) => setText(event.target.value)}
            />

            <button onClick={getAdress}
                style={{ margin: "20px;" }}
            >
                郵便番号から住所を取得
            </button>

            {isLoading ? <p>ローディング中</p> : <p>{resultText}</p>}

        </div>
    );
}
