
import testcss from "@/styles/test/test.module.css"

export default function Test() {
    return (
        <>
            <div
                // className={testcss['test-css-div']}
                className={testcss.testCssDiv}
            >
                Testコンポーネント
            </div>
        </>

    );
}
