import { NextApiRequest, NextApiResponse } from "next";

type HelloResponse = {
  name: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
  res.status(200).json({ name: "jun" });
};

export default handler;
