import { NextPage } from "next";

const EnvSample: NextPage = (props) => {
  console.log("process.env.TEST", process.env.TEST);
  console.log("process.env.NEXT_PUBLIC_TEST", process.env.NEXT_PUBLIC_TEST);
  return (
    <div>
      {/* クライアントサイドでエラーになる */}
      {/* <p>{`test1 ${process.env.TEST}`}</p> */}
      <p>{`test2 ${process.env.NEXT_PUBLIC_TEST}`}</p>
    </div>
  );
};

export default EnvSample;
