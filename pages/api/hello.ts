// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../utils/connectDB";

type Data = {
  message: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    await connectDB();
    res.status(200).json({ message: "connection" });
  } catch (error) {
    res.status(500).json({ message: "Error connection" });
  }
};
