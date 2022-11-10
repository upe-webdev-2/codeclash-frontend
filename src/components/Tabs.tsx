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
      <div className="flex gap-5 mb-3">
        {tabs.map(({ name }, index) => (
          <h1
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 capitalize cursor-pointer font-gilroy-bold rounded-xl active:scale-95 hover:text-secondary ${
              activeTab === index && "outline"
            }`}
          >
            {name}
          </h1>
        ))}
      </div>
      <Container extraTailwindStyles="w-full h-[80vh] overflow-y-scroll p-5">
        {tabs[activeTab].element}
      </Container>
    </div>
  );
};

export default Tabs;
