import { ReactNode, useState } from "react";
import Container from "@/components/Container";

type Tabs = {
  tabs: {
    name: string;
    element: ReactNode;
  }[];
};

const Tabs = ({ tabs }: Tabs) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-10">
      <Container
        borderStyles="mb-3 rounded-b-none"
        backgroundStyles="rounded-b-none"
      >
        <div className="flex rounded-t-xl">
          {tabs.map(({ name }, index) => (
            <h1
              key={index}
              onClick={() => setActiveTab(index)}
              className={`${
                activeTab === index ? "border-b-2" : "active:translate-y-1"
              } px-6 py-3 capitalize cursor-pointer font-gilroy-bold rounded-t-2xl hover:bg-primary`}
            >
              {name}
            </h1>
          ))}
        </div>
      </Container>

      <Container
        backgroundStyles="w-full h-[80vh] overflow-y-scroll p-5 rounded-t-none"
        borderStyles="rounded-t-none"
      >
        {tabs[activeTab].element}
      </Container>
    </div>
  );
};

export default Tabs;
