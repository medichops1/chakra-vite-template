import { Navbar } from "../layout/Navbar";
import { Sidebar } from "../layout/Sidebar";

export const Block = () => {
  return (
    <>
      <Navbar hideFrom="md" />
      <Sidebar hideBelow="md" />
    </>
  );
};
