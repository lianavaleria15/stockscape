const { Company } = require("../../models");

const companyData = [
  {
    name: "Apple Inc.",
    symbol: "AAPL",
    investment_profile_id: 1,
    janPrice: 129.41,
    decPrice: 177.57,
    gainLoss: 48.16,
    sector: "Technology",
    company_summary:
      "Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other variety of related services. It operates through the following geographical segments: Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas segment includes North and South America. The Europe segment consists of European countries, as well as India, the Middle East, and Africa. The Greater China segment comprises of China, Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes Australia and Asian countries. Its products and services include iPhone, Mac, iPad, AirPods, Apple TV, Apple Watch, Beats products, Apple Care, iCloud, digital content stores, streaming, and licensing services. The company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak in April 1976 and is headquartered in Cupertino, CA.",
  },
  {
    name: "Microsoft Corporation",
    symbol: "MSFT",
    investment_profile_id: 1,
    janPrice: 212.25,
    decPrice: 341.25,
    gainLoss: 129.0,
    sector: "Technology",
    company_summary:
      "Microsoft Corporation is a technology company. The Company develops and supports a range of software products, services, devices, and solutions. The Company's segments include Productivity and Business Processes, Intelligent Cloud, and More Personal Computing.",
  },
  {
    name: "Amazon.com Inc.",
    symbol: "AMZN",
    investment_profile_id: 1,
    janPrice: 3138.38,
    decPrice: 3413.22,
    gainLoss: 274.84,
    sector: "Technology",
    company_summary:
      "Microsoft Corporation is a technology company. The Company develops and supports a range of software products, services, devices, and solutions. The Company's segments include Productivity and Business Processes, Intelligent Cloud, and More Personal Computing.",
  },
  {
    name: "Tesla, Inc.",
    symbol: "TSLA",
    investment_profile_id: 1,
    janPrice: 755.98,
    decPrice: 1088.47,
    gainLoss: 332.49,
    sector: "Auto Manufacturing",
    company_summary:
      "Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally. The company operates in two segments, Automotive, and Energy Generation and Storage. The Automotive segment offers electric vehicles, as well as sells automotive regulatory credits.",
  },
  {
    name: "Alphabet Inc. Class A",
    symbol: "GOOGL",
    investment_profile_id: 1,
    janPrice: 1722.88,
    decPrice: 2399.74,
    gainLoss: 676.86,
    sector: "Technology",
    company_summary:
      "Alphabet is a holding company, with Google, the Internet media giant, as a wholly owned subsidiary. Google generates 99% of Alphabet revenue, of which more than 85% is from online ads. Google's other revenue is from sales of apps and content on Google Play and YouTube, as well as cloud service fees and other licensing revenue. Sales of hardware such as Chromebooks, the Pixel smartphone, and smart homes products, which include Nest and Google Home, also contribute to other revenue. Alphabet's moonshot investments are in its other bets segment, where it bets on technology to enhance health (Verily), faster Internet access to homes (Google Fiber), self-driving cars (Waymo), and more. Alphabet's operating margin has been 25%-30%, with Google at 30% and other bets operating at a loss.",
  },
  {
    name: "Meta Platforms Inc. Class A",
    symbol: "FB",
    investment_profile_id: 1,
    janPrice: 263.61,
    decPrice: 346.22,
    gainLoss: 82.61,
    sector: "Technology",
    company_summary:
      "Meta Platforms Inc, formerly Facebook is the world's largest online social network, with 2.5 billion monthly active users. Users engage with each other by exchanging messages and sharing news events, photos, and videos. On the video side, the firm is in the process of building a library of premium content and monetizing it via ads or subscription revenue. Facebook refers to this as Facebook Watch. Its ecosystem consists mainly of the Facebook app, Instagram, Messenger, WhatsApp, and many features surrounding these products. Users can access Facebook on mobile devices and desktops. Advertising revenue represents more than 90% of the firm's total revenue, with 50% coming from the U.S. and Canada and 25% from Europe. With gross margins above 80%, Facebook operates at a 30%-plus margin.",
  },
  {
    name: "Alphabet Inc. Class C",
    symbol: "GOOG",
    investment_profile_id: 1,
    janPrice: 1807.21,
    decPrice: 2930.39,
    gainLoss: 1123.18,
    sector: "Technology",
    company_summary:
      "Alphabet is a holding company, with Google, the Internet media giant, as a wholly owned subsidiary. Google generates 99% of Alphabet revenue, of which more than 85% is from online ads. Google's other revenue is from sales of apps and content on Google Play and YouTube, as well as cloud service fees and other licensing revenue. Sales of hardware such as Chromebooks, the Pixel smartphone, and smart homes products, which include Nest and Google Home, also contribute to other revenue. Alphabet's moonshot investments are in its other bets segment, where it bets on technology to enhance health (Verily), faster Internet access to homes (Google Fiber), self-driving cars (Waymo), and more. Alphabet's operating margin has been 25%-30%, with Google at 30% and other bets operating at a loss.",
  },
  {
    name: "NVIDIA Corporation",
    symbol: "NVDA",
    investment_profile_id: 1,
    janPrice: 126.14,
    decPrice: 276.04,
    gainLoss: 149.9,
    sector: "Technology",
    company_summary:
      "Nvidia is the top designer of discrete graphics processing units that enhance the experience on computing platforms. The firm's chips are used in a variety of end markets, including high-end PCs for gaming, data centers, and automotive infotainment systems. In recent years, the firm has broadened its focus from traditional PC graphics applications such as gaming to more complex and favorable opportunities, including artificial intelligence and autonomous driving, which leverage the high-performance capabilities of the firm's graphics processing units.",
  },
  {
    name: "Berkshire Hathaway Inc. Class B",
    symbol: "BRK.B",
    investment_profile_id: 1,
    janPrice: 230.27,
    decPrice: 68.02,
    gainLoss: 149.9,
    sector: "Conglomerate",
    company_summary:
      "Berkshire Hathaway is a holding company with a wide array of subsidiaries engaged in diverse activities. The firm's core business segment is insurance, run primarily through Geico, Berkshire Hathaway Reinsurance Group, and Berkshire Hathaway Primary Group. Berkshire has used the excess cash thrown off from these and its other operations over the years to acquire Burlington Northern Santa Fe (railroad), Berkshire Hathaway Energy (utilities and energy distributors), and the firms that make up its manufacturing, service, and retailing operations (which include five of Berkshire's largest noninsurance pretax earnings generators: Precision Castparts, Lubrizol, Clayton Homes, Marmon, and IMC/ISCAR). The conglomerate is unique in that it is run on a completely decentralized basis.",
  },
  {
    name: "JPMorgan Chase & Co.",
    symbol: "JPM",
    investment_profile_id: 1,
    janPrice: 131.55,
    decPrice: 158.64,
    gainLoss: 27.09,
    sector: "Finance",
    company_summary:
      "J.P. Morgan is a global leader in financial services, offering solutions to the world's most important corporations, governments and institutions in more than 100 countries. As announced in early 2018, JPMorgan Chase will deploy $1.75 billion in philanthropic capital around the world by 2023.",
  },
];

const seedCompanies = () => Company.bulkCreate(companyData);

module.exports = seedCompanies;
