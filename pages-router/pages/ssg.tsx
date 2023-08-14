import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

type SSGProps = {
  message: string;
};

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;
  console.log(props);
  return (
    <div>
      <Head>
        <title>title</title>
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{message}</p>
      </main>
    </div>
  );
};
// getStaticPropsはビルド時に実行される
// GetStatifProps<SSGProps>はSSGPropsを引数に取るgetStaticPropsの型
export const getStaticProps: GetStaticProps<SSGProps> = async (content) => {
  const timestamp = new Date().toLocaleDateString();
  const message = `${timestamp}にgetStaticPropsが実行されました`;
  console.log(message);
  return {
    // ここでpropsをもとにページコンポーネントを描画する
    props: {
      message,
      a: {
        b: "b",
      },
    },
  };
};

export default SSG;
