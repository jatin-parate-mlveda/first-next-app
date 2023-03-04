import { v4 as uuid } from 'uuid';
import Apps from "@/models/Apps";
import mongoConnect from "@/utils/mongoConnect";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongoConnect();
  const promises = [] as any[];

  for (let i = 0; i < 1000; i += 1) {
    const name = uuid();
    promises.push(
      new Apps({
        handle: name,
        name,
      }).save()
    );
  }

  await Promise.all(promises);

  res.status(200).json({ msg: "Done!" });
}
