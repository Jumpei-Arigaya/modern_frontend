import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type ISRProps = {
  message: string;
};

const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props;
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <Head>
        <title>title</title>
      </Head>
      <main>
        <p>このページはISRによってビルド時に生成されたページです</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleDateString();
  const message = `${timestamp}によってこのページのgetServerSidePropsが実行されました`;
  console.log(timestamp);
  return {
    props: {
      message,
    },
    // ページの有効期限を秒単位で指定
    revalidate: 60,
  };
};

export default ISR;
