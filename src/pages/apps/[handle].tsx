import Apps, { IApps } from "@/models/Apps";
import mongoConnect from "@/utils/mongoConnect";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = { app: IApps };

export const getStaticProps: GetStaticProps<Props, { handle: string }> = async (
  context
) => {
  await mongoConnect();
  const app = await Apps.findOne({ handle: context.params!.handle }).exec();
  return { props: { app: app.toJSON() } };
};

export const getStaticPaths: GetStaticPaths<{ handle: string }> = async (
  context
) => {
  await mongoConnect();
  const apps = await Apps.find({}, {}, { maxTimeMS: 1000000 });

  return {
    fallback: false,
    paths: apps.map((app) => ({
      params: {
        handle: app.handle,
      },
    })),
  };
};

export default function AppPage(props: Props) {
  return <h1>{props.app.name}</h1>;
}
