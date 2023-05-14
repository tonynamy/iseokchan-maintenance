import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@iseokchan/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>이석찬 점검중</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>이석찬은 현재 점검중입니다.</h1>
        <br />
        <p>
          더 나은 서비스를 위하여 이석찬은 현재 잠시 시스템 점검중에 있습니다.
          <br />
          시스템 복구 시까지 서비스 이용이 불가하오니 양해 부탁드립니다.
          <br />
          예상 작업 완료 시각 : 2023년 5월 17일 0:00
          <br />
          개발자 연락처 :{" "}
          <a href="mailto:tonynamy@apperz.co.kr">tonynamy@apperz.co.kr</a>
        </p>
      </main>
    </>
  );
}
