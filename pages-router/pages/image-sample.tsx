import { NextPage } from "next";

import BibleImage from "../public/images/bible.jpeg";
import Image from "next/image";

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合</p>
      <img src="../public/images/bible.jpeg" alt="a" />
      <p>Imageコンポーネントを使用して表示</p>
      <Image src={BibleImage} alt="a" />
      <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
    </div>
  );
};

export default ImageSample;
