import { useState } from "react";
import Test from "./test";
import testcss from "@/styles/test/test.module.css"
import APITest from "./APITest";

export default function index() {
    const test = 12;
    const test2 = 12;
    const tests = [12, 2, 3, 4, 56]
    return (
        <>
            <APITest />

            {/* mapの説明 */}
            {tests.map((value, index) => {
                return (
                    <>
                        <br />
                        {index}<span>番目に</span>
                        {value}<span>がありますよ</span>
                    </>
                )
            })}
            {/* Componentを持ってくるところの説明 */}
            <Test />
            {/* 変数の表示の仕方・三項演算子（if文の代わり） */}
            {test}
            {test * test2}
            {test === 12 && <>test</>}
            {test === 12 ? <>test</> : <>test</>}
            /テスト
        </>
    );
}
