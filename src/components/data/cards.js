import one from "@/assets/with-grants/01.jpg";
import two from "@/assets/with-grants/02.jpg";
import three from "@/assets/with-grants/03.jpg";
import four from "@/assets/with-grants/04.jpg";
import five from "@/assets/with-grants/05.jpg";
import six from "@/assets/with-grants/06.jpg";
import seven from "@/assets/with-grants/07.jpg";
import eight from "@/assets/with-grants/08.jpg";
import nine from "@/assets/with-grants/09.jpg";

const cards = [
  {
    category: "Crowdfund",
    title: "Funding rates page",
    amount: "$5,000 - $6,000",
    description:
      "Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.",
    avatars: [one, two],
  },
  {
    category: "Edition",
    title: "Tradingview integration",
    amount: "$5,000 - $6,000",
    description:
      "The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account to execute trades directly through a strategy. Users will be able to tap into Tradingview resources and test out different ...",
    avatars: [three, four, five],
  },
  {
    category: "Entry",
    title: "Rewards optimization research and paper",
    amount: "$5,000 - $6,000",
    description:
      "The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership.",
    avatars: [six, seven, eight],
  },
  {
    category: "Crowdfund",
    title: "DAO Organizational Structure Research",
    amount: "$5,000 - $6,000",
    description:
      "The grant will be used to fund a deep dive research report around historical and existing DAO structures with guidance around successful best practices. Topics will include organization structure, reporting & accountability, contributors, funding, and more.",
    avatars: [nine],
  },
];

export default cards;
