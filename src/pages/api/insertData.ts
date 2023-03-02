// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import RandomData from "@/models/RandomData";
import mongoConnect from "@/utils/mongoConnect";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongoConnect();
  const { body } = req;
  await new RandomData(body).save();

  res.status(200).json({ msg: "Done!" });
}
