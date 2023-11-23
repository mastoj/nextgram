"use client";
import GithubCorner from "../../components/github-corner/GithubCorner";
//import { usePathname } from "next/navigation";

// export const metadata = {
//   title: "NextGram",
//   description:
//     "A sample Next.js app showing dynamic routing with modals as a route.",
//   metadataBase: new URL("https://nextgram.vercel.app"),
// };

export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  //  const pathname = usePathname();
  // const shouldShowModal = pathname.includes("/se/photos/");
  // console.log("shouldShowModal", shouldShowModal);
  return (
    <>
      {props.children} {props.modal}
    </>
  );
}
