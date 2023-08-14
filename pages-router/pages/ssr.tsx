import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props;
  return (
    <div>
      <Head>
        <title>title</title>
      </Head>
      <main>
        <p>
          このページはサーバーサイドレンダリングによってアクセス時にサーバで描画されたページです
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
};

// getServerSidePropsはページへのリクエストがある度に実行される
export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context
) => {
  const timestamp = new Date().toLocaleDateString();
  const message = `${timestamp}によってこのページのgetServerSidePropsが実行されました`;
  console.log(timestamp);
  return {
    props: {
      message,
    },
  };
};

export default SSR;
