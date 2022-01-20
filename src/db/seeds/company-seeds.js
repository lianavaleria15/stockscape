const { Company } = require("../../models");

const companyData = [
  {
    name: "Apple Inc.",
    symbol: "AAPL",
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
    janPrice: 131.55,
    decPrice: 158.64,
    gainLoss: 27.09,
    sector: "Finance",
    company_summary:
      "J.P. Morgan is a global leader in financial services, offering solutions to the world's most important corporations, governments and institutions in more than 100 countries. As announced in early 2018, JPMorgan Chase will deploy $1.75 billion in philanthropic capital around the world by 2023.",
  },
  {
    name: "Johnson & Johnson",
    symbol: "JNJ",
    janPrice: 157.24,
    decPrice: 169.67,
    gainLoss: 27.09,
    sector: "Healthcare",
    company_summary:
      "Johnson & Johnson researches and develops, manufactures, and sells a range of products in the health care field worldwide. It operates through three segments: Consumer Health, Pharmaceutical, and Medical Devices. The Consumer Health segment offers baby care products under the JOHNSON'S and AVEENO Baby brands; oral care products under the LISTERINE brand; skin health/beauty products under the AVEENO, CLEAN & CLEAR, DR. CI:LABO, NEUTROGENA, and OGX brands; acetaminophen products under the TYLENOL brand; cold, flu, and allergy products under the SUDAFED brand; allergy products under the BENADRYL and ZYRTEC brands; ibuprofen products under the MOTRIN IB brand; smoking cessation products under the NICORETTE brand; and acid reflux products under the PEPCID brand. This segment also provides women's health products, such as sanitary pads and tampons under the STAYFREE, CAREFREE, and o.b. brands; wound care products comprising adhesive bandages under the BAND-AID brand; and first aid products under the NEOSPORIN brand.",
  },
  {
    name: "UnitedHealth Group Incorporated",
    symbol: "UNH",
    janPrice: 351.45,
    decPrice: 502.94,
    gainLoss: 151.49,
    sector: "Healthcare",
    company_summary:
      "UnitedHealth Group Incorporated operates as a diversified health care company in the United States. It operates through four segments: UnitedHealthcare, OptumHealth, OptumInsight, and OptumRx. The UnitedHealthcare segment offers consumer-oriented health benefit plans and services for national employers, public sector employers, mid-sized employers, small businesses, and individuals; health and well-being services to individuals age 50 and older, addressing their needs for preventive and acute health care services, as well as services dealing with chronic disease and other specialized issues for older individuals.",
  },
  {
    name: "The Home Depot, Inc.",
    symbol: "HD",
    janPrice: 266.01,
    decPrice: 404.09,
    gainLoss: 138.08,
    sector: "Consumer Cyclical",
    company_summary:
      "The Home Depot, Inc. operates as a home improvement retailer. It operates The Home Depot stores that sell various building materials, home improvement products, building materials, lawn and garden products, and dÃ©cor products, as well as provide installation, home maintenance, and professional service programs to do-it-yourself and professional customers. The company also offers installation programs that include flooring, cabinets and cabinet makeovers, countertops, furnaces and central air systems, and windows; and professional installation in various categories sold through its stores and in-home sales programs, as well as acts as a general contractor to provide installation services to its do-it-for-me customers through third-party installers.",
  },
  {
    name: "The Procter & Gamble Company",
    symbol: "PG",
    janPrice: 139.66,
    decPrice: 161.97,
    gainLoss: 22.31,
    sector: "Consumer Defensive",
    company_summary:
      "The Procter & Gamble Company provides branded consumer packaged goods to consumers in North and Latin America, Europe, the Asia Pacific, Greater China, India, the Middle East, and Africa. It operates in five segments: Beauty; Grooming; Health Care; Fabric & Home Care; and Baby, Feminine & Family Care. The Beauty segment offers conditioners, shampoos, styling aids, and treatments; and antiperspirants and deodorants, personal cleansing, and skin care products under the Head & Shoulders, Herbal Essences, Pantene, Rejoice, Olay, Old Spice, Safeguard, Secret, and SK-II brands. The Procter & Gamble Company was founded in 1837 and is headquartered in Cincinnati, Ohio.",
  },
  {
    name: "Visa Inc.",
    symbol: "V",
    janPrice: 220.25,
    decPrice: 217.63,
    gainLoss: -2.62,
    sector: "Financial Services",
    company_summary:
      "Visa Inc. operates as a payments technology company worldwide. The company facilitates digital payments among consumers, merchants, financial institutions, businesses, strategic partners, and government entities. It operates VisaNet, a transaction processing network that enables authorization, clearing, and settlement of payment transactions. In addition, the company offers card products, platforms, and value-added services. It provides its services under the Visa, Visa Electron, Interlink, VPAY, and PLUS brands. Visa Inc. was founded in 1958 and is headquartered in San Francisco, California.",
  },
  {
    name: "Bank of America Corporation",
    symbol: "BAC",
    janPrice: 30.46,
    decPrice: 44.64,
    gainLoss: 14.18,
    sector: "Financial Services",
    company_summary:
      "Bank of America Corporation, through its subsidiaries, provides banking and financial products and services for individual consumers, small and middle-market businesses, institutional investors, large corporations, and governments worldwide. Its Consumer Banking segment offers traditional and money market savings accounts, certificates of deposit and IRAs, noninterest-and interest-bearing checking accounts, and investment accounts and products; and credit and debit cards, residential mortgages, and home equity loans, as well as direct and indirect loans, such as automotive, recreational vehicle, and consumer personal loans.",
  },
  {
    name: "Mastercard Incorporated",
    symbol: "MA",
    janPrice: 358.0,
    decPrice: 360.31,
    gainLoss: 2.31,
    sector: "Financial Services",
    company_summary:
      "Mastercard Incorporated, a technology company, provides transaction processing and other payment-related products and services in the United States and internationally. It facilitates the processing of payment transactions, including authorization, clearing, and settlement, as well as delivers related products and services. The company offers integrated products and services for account holders, merchants, financial institutions, businesses, governments, and other organizations, such as programs that enable issuers to provide consumers with credits to defer payments; payment products and solutions that allow its customers to access funds in deposit and other accounts; prepaid payment programs and management services; and commercial credit and debit payment products and solutions.",
  },
  {
    name: "Pfizer Inc.",
    symbol: "PFE",
    janPrice: 36.87,
    decPrice: 59.2,
    gainLoss: 22.33,
    sector: "Healthcare",
    company_summary:
      "Pfizer Inc. discovers, develops, manufactures, markets, distributes, and sells biopharmaceutical products worldwide. It offers medicines and vaccines in various therapeutic areas, including cardiovascular metabolic and pain under the Eliquis, Chantix/Champix, and Premarin family brands; biologics, small molecules, immunotherapies, and biosimilars under the Ibrance, Xtandi, Sutent, Inlyta, Retacrit, Lorbrena, and Braftovi brands; and sterile injectable and anti-infective medicines under the Sulperazon, Medrol, Zithromax, Vfend, and Panzyga brands. The company also provides medicines and vaccines in various therapeutic areas, such as pneumococcal disease, meningococcal disease, tick-borne encephalitis, and COVID-19 under the Prevnar 13/Prevenar 13 (pediatric/adult), Nimenrix, FSME/IMMUN-TicoVac, Trumenba, and the Pfizer-BioNTech COVID-19 vaccine brands.",
  },
  {
    name: "Exxon Mobil Corporation",
    symbol: "XOM",
    janPrice: 41.45,
    decPrice: 61.89,
    gainLoss: 20.44,
    sector: "Energy",
    company_summary:
      "Exxon Mobil Corporation explores for and produces crude oil and natural gas in the United States and internationally. It operates through Upstream, Downstream, and Chemical segments. The company is also involved in the manufacture, trade, transport, and sale of crude oil, natural gas, petroleum products, petrochemicals, and other specialty products; and manufactures and sells petrochemicals, including olefins, polyolefins, aromatics, and various other petrochemicals. As of December 31, 2020, it had approximately 22,239 net operated wells with proved reserves. The company was founded in 1870 and is based in Irving, Texas.",
  },
  {
    name: "The Walt Disney Company",
    symbol: "DIS",
    janPrice: 182.26,
    decPrice: 152.8,
    gainLoss: -29.46,
    sector: "Communication Services",
    company_summary:
      "The Walt Disney Company, together with its subsidiaries, operates as an entertainment company worldwide. It operates through two segments, Disney Media and Entertainment Distribution; and Disney Parks, Experiences and Products. The company engages in the film and episodic television content production and distribution activities, as well as operates television broadcast networks under the ABC, Disney, ESPN, Freeform, FX, Fox, National Geographic, and Star brands; and studios that produces motion pictures under the Walt Disney Pictures, Twentieth Century Studios, Marvel, Lucasfilm, Pixar, and Searchlight Pictures banners. It also offers direct-to-consumer streaming services through Disney+, Disney+ Hotstar, ESPN+, Hulu, and Star+; sale/licensing of film and television content to third-party television and subscription video-on-demand services; theatrical, home entertainment, and music distribution services; staging and licensing of live entertainment events; and post-production services by Industrial Light & Magic and Skywalker Sound. In addition, the company operates theme parks and resorts, such as Walt Disney World Resort in Florida; Disneyland Resort in California; Disneyland Paris; Hong Kong Disneyland Resort; and Shanghai Disney Resort; Disney Cruise Line, Disney Vacation Club, National Geographic Expeditions, and Adventures by Disney as well as Aulani, a Disney resort and spa in Hawaii.",
  },
  {
    name: "Broadcom Inc.",
    symbol: "AVGO",
    janPrice: 439.33,
    decPrice: 674.28,
    gainLoss: 234.95,
    sector: "Technology",
    company_summary:
      "Broadcom Inc. designs, develops, and supplies various semiconductor devices with a focus on complex digital and mixed signal complementary metal oxide semiconductor based devices and analog III-V based products worldwide. The company operates in two segments, Semiconductor Solutions and Infrastructure Software. It provides set-top box system-on-chips (SoCs); cable, digital subscriber line, and passive optical networking central office/consumer premise equipment SoCs; wireless local area network access point SoCs; Ethernet switching and routing merchant silicon products; embedded processors and controllers.",
  },
  {
    name: "Cisco Systems, Inc.",
    symbol: "CSCO",
    janPrice: 44.31,
    decPrice: 63.42,
    gainLoss: 19.11,
    sector: "Technology",
    company_summary:
      "Cisco Systems, Inc. designs, manufactures, and sells Internet Protocol based networking and other products related to the communications and information technology industry in the Americas, Europe, the Middle East, Africa, the Asia Pacific, Japan, and China. It provides infrastructure platforms, including networking technologies of switching, routing, wireless, and data center products that are designed to work together to deliver networking capabilities, and transport and/or store data. The company also offers collaboration products comprising unified communications, Cisco TelePresence, and conferencing, as well as the Internet of Things and analytics software.",
  },
  {
    name: "Netflix, Inc.",
    symbol: "NFLX",
    janPrice: 539.0,
    decPrice: 613.12,
    gainLoss: 74.12,
    sector: "Communication Services",
    company_summary:
      "Netflix, Inc. provides entertainment services. It offers TV series, documentaries, and feature films across various genres and languages. The company provides members the ability to receive streaming content through a host of Internet-connected devices, including TVs, digital video players, television set-top boxes, and mobile devices. It also provides DVDs-by-mail membership services. The company has approximately 204 million paid members in 190 countries. Netflix, Inc. was founded in 1997 and is headquartered in Los Gatos, California.",
  },
  {
    name: "Thermo Fisher Scientific Inc.",
    symbol: "TMO",
    janPrice: 469.05,
    decPrice: 662.21,
    gainLoss: 193.16,
    sector: "Healthcare",
    company_summary:
      "Thermo Fisher Scientific Inc. offers life sciences solutions, analytical instruments, specialty diagnostics, and laboratory products and service worldwide. The company's Life Sciences Solutions segment offers reagents, instruments, and consumables for biological and medical research, discovery, and production of drugs and vaccines, as well as diagnosis of infections and diseases to pharmaceutical, biotechnology, agricultural, clinical, healthcare, academic, and government markets. Its Analytical Instruments segment provides instruments, consumables, software, and services for use in laboratory, on production line, and in field for pharmaceutical, biotechnology, academic, government, environmental, and other research and industrial markets, as well as clinical laboratories. ",
  },
  {
    name: "Adobe Inc.",
    symbol: "ADBE",
    janPrice: 500.3,
    decPrice: 577.68,
    gainLoss: 77.38,
    sector: "Technology",
    company_summary:
      "Adobe Inc. operates as a diversified software company worldwide. Its Digital Media segment provides tools and solutions that enable individuals, teams, and enterprises to create, publish, promote, and monetize their digital content. Its flagship product is Creative Cloud, a subscription service that allows customer to download and access the latest versions of its creative products. This segment serves content creators, experience designers, app developers, enthusiasts, students, social media users, and creative professionals; and marketing departments and agencies, companies, and publishers. The company's Digital Experience segment offers products, services, and solutions for creating, managing, executing, measuring, monetizing, and optimizing customer experiences from analytics to commerce.",
  },
  {
    name: "Costco Wholesale Corporation",
    symbol: "COST",
    janPrice: 377.43,
    decPrice: 563.47,
    gainLoss: 186.04,
    sector: "Consumer Defensive",
    company_summary:
      "Costco Wholesale Corporation, together with its subsidiaries, engages in the operation of membership warehouses in the United States, Puerto Rico, Canada, the United Kingdom, Mexico, Japan, Korea, Australia, Spain, France, Iceland, China, and Taiwan. It offers branded and private-label products in a range of merchandise categories. The company offers sundries, dry groceries, candies, coolers, freezers, liquor, and tobacco and deli products; appliances, electronics, health and beauty aids, hardware, garden and patio products, sporting goods, tires, toys and seasonal products, office supplies, automotive care products, postages, tickets, apparel, small appliances, furniture, domestics, housewares, special order kiosks, and jewelry; and meat, produce, service deli, and bakery products.",
  },
  {
    name: "PepsiCo, Inc.",
    symbol: "PEP",
    janPrice: 147.01,
    decPrice: 171.47,
    gainLoss: 24.46,
    sector: "Consumer Defensive",
    company_summary:
      "PepsiCo, Inc. operates as a food and beverage company worldwide. The company operates through seven segments: Frito-Lay North America; Quaker Foods North America; PepsiCo Beverages North America; Latin America; Europe; Africa, Middle East and South Asia; and Asia Pacific, Australia and New Zealand and China Region. It offers branded dips, cheese-flavored snacks, and tortillas, as well as corn, potato, and tortilla chips; cereals, rice, pasta, mixes and syrups, granola bars, grits, oatmeal, rice cakes, simply granola, and side dishes; beverage concentrates, fountain syrups, and finished goods; ready-to-drink tea, coffee, and juices; and dairy products. The company provides its products primarily under the Cheetos, Doritos, Fritos, Lay's, Ruffles, Tostitos, Aunt Jemima, Cap'n crunch, Life, Pasta Roni, Quaker Chewy, Quaker, Rice-A-Roni, Aquafina, Diet Mountain Dew, Diet Pepsi, Gatorade, Mountain Dew, Pepsi, Propel, Sierra Mist, Tropicana, Emperador, Marias Gamesa, Rosquinhas Mabel, Sabritas, Saladitas, 7UP, Gatorade, H2oh!, Manzanita Sol, Mirinda, Pepsi, Pepsi Black, San Carlos, Toddy, Agusha, Chudo, and Domik v Derevne brands.",
  },
  {
    name: "AbbVie Inc.",
    symbol: "ABBV",
    janPrice: 107.18,
    decPrice: 134.41,
    gainLoss: 27.23,
    sector: "Healthcare",
    company_summary:
      "AbbVie Inc. discovers, develops, manufactures, and sells pharmaceuticals in the worldwide. The company offers HUMIRA, a therapy administered as an injection for autoimmune and intestinal BehÃ§et's diseases; SKYRIZI to treat moderate to severe plaque psoriasis in adults; RINVOQ, a JAK inhibitor for the treatment of moderate to severe active rheumatoid arthritis in adult patients; IMBRUVICA to treat adult patients with chronic lymphocytic leukemia (CLL), small lymphocytic lymphoma (SLL), mantle cell lymphoma, waldenstrÃ¶m's macroglobulinemia, marginal zone lymphoma, and chronic graft versus host disease; VENCLEXTA, a BCL-2 inhibitor used to treat adults with CLL or SLL; and MAVYRET to treat patients with chronic HCV genotype 1-6 infection. It also provides CREON, a pancreatic enzyme therapy for exocrine pancreatic insufficiency; Synthroid used in the treatment of hypothyroidism; AndroGel for males diagnosed with symptomatic low testosterone; Linzess/Constella to treat irritable bowel syndrome with constipation and chronic idiopathic constipation.",
  },
  {
    name: "Accenture plc",
    symbol: "ACN",
    janPrice: 261.0,
    decPrice: 415.33,
    gainLoss: 154.33,
    sector: "Technology",
    company_summary:
      "Accenture plc, a professional services company, provides strategy and consulting, interactive, and technology and operations services worldwide. The company offers application services, including agile transformation, DevOps, application modernization, enterprise architecture, software and quality engineering, data management, intelligent automation comprises robotic process automation, natural language processing, and virtual agents, and liquid application management services, as well as program, project, and service management services; strategy consulting services; critical data elements, data management and governance, data platform and architecture, product-based organization and skills, business adoption, and value realization services; engineering, and research and development digitization; smart connected product design and development; product platform engineering and modernization; product as-a-service enablement; products related to production and operations; autonomous robotics systems.",
  },
  {
    name: "Abbott Laboratories",
    symbol: "ABT",
    janPrice: 109.53,
    decPrice: 141.46,
    gainLoss: 31.93,
    sector: "Healthcare",
    company_summary:
      "Abbott Laboratories discovers, develops, manufactures, and sells health care products worldwide. It operates in four segments: Established Pharmaceutical Products, Diagnostic Products, Nutritional Products, and Medical Devices. The Established Pharmaceutical Products segment provides generic pharmaceuticals for the treatment of pancreatic exocrine insufficiency, irritable bowel syndrome or biliary spasm, intrahepatic cholestasis or depressive symptoms, gynecological disorder, hormone replacement therapy, dyslipidemia, hypertension, hypothyroidism, MÃ©niÃ¨re's disease and vestibular vertigo, pain, fever, inflammation, and migraine, as well as provides anti-infective clarithromycin, influenza vaccine, and products to regulate physiological rhythm of the colon. The Diagnostic Products segment offers laboratory systems in the areas of immunoassay, clinical chemistry, hematology, and transfusion; molecular diagnostics systems that automate the extraction, purification, and preparation of DNA and RNA from patient samples, as well as detect and measure infectious agents.",
  },
  {
    name: "Chevron Corporation",
    symbol: "CVX",
    janPrice: 85.15,
    decPrice: 118.79,
    gainLoss: 33.64,
    sector: "Energy",
    company_summary:
      "Chevron Corporation, through its subsidiaries, engages in integrated energy, chemicals, and petroleum operations worldwide. The company operates in two segments, Upstream and Downstream. The Upstream segment is involved in the exploration, development, and production of crude oil and natural gas; processing, liquefaction, transportation, and regasification associated with liquefied natural gas; transportation of crude oil through pipelines; and transportation, storage, and marketing of natural gas, as well as operates a gas-to-liquids plant. The Downstream segment engages in refining crude oil into petroleum products; marketing crude oil, refined products, and lubricants; transporting crude oil and refined products through pipeline, marine vessel, motor equipment, and rail car; and manufacturing and marketing commodity petrochemicals, and fuel and lubricant additives, as well as alkylate and plastics for industrial uses.",
  },
  {
    name: "The Coca-Cola Company",
    symbol: "KO",
    janPrice: 54.27,
    decPrice: 58.65,
    gainLoss: 4.38,
    sector: "Consumer Defensive",
    company_summary:
      "The Coca-Cola Company, a beverage company, manufactures, markets, and sells various nonalcoholic beverages worldwide. The company provides sparkling soft drinks; water, enhanced water, and sports drinks; juice, dairy, and plantÂbased beverages; tea and coffee; and energy drinks. It also offers beverage concentrates and syrups, as well as fountain syrups to fountain retailers, such as restaurants and convenience stores. The company sells its products under the Coca-Cola, Diet Coke/Coca-Cola Light, Coca-Cola Zero Sugar, Fanta, Fresca, Schweppes, Sprite, Thums Up, Aquarius, Ciel, Dasani, glacÃ©au smartwater, glacÃ©au vitaminwater, Ice Dew, I LOHAS, Powerade, Topo Chico, AdeS, Del Valle, fairlife, innocent, Minute Maid, Minute Maid Pulpy, Simply, Ayataka, Costa, dogadan, FUZE TEA, Georgia, Gold Peak, HONEST TEA, and Kochakaden brands.",
  },
  {
    name: "Comcast Corporation",
    symbol: "CMCSA",
    janPrice: 52.28,
    decPrice: 50.47,
    gainLoss: -1.81,
    sector: "Communication Services",
    company_summary:
      "Comcast Corporation operates as a media and technology company worldwide. It operates through Cable Communications, Cable Networks, Broadcast Television, Filmed Entertainment, Theme Parks, and Sky segments. The Cable Communications segment offers cable services, including high-speed Internet, video, voice, wireless, and security and automation services to residential and business customers under the Xfinity brand, as well as sells advertising. The Cable Networks segment operates national cable networks that provide various entertainment, news and information, and sports content; regional sports and news networks; international cable networks; and various digital properties, including brand-aligned Websites, as well as engages in the cable television studio production operations. The Broadcast Television segment operates NBC and Telemundo broadcast networks, NBC and Telemundo local broadcast television stations, broadcast television studio production operations, and various digital properties.",
  },
  {
    name: "PayPal Holdings, Inc.",
    symbol: "PYPL",
    janPrice: 237.8,
    decPrice: 192.01,
    gainLoss: -45.79,
    sector: "Financial Services",
    company_summary:
      "PayPal Holdings, Inc. operates as a technology platform and digital payments company that enables digital and mobile payments on behalf of consumers and merchants worldwide. Its payment solutions include PayPal, PayPal Credit, Braintree, Venmo, Xoom, Hyperwallet, and iZettle products. The company's payments platform allows consumers to send and receive payments, withdraw funds to their bank accounts, and hold balances in their PayPal accounts in various currencies. It also offers gateway services that enable merchants to accept payments online with credit or debit cards, as well as digital wallets. PayPal Holdings, Inc. was founded in 1998 and is headquartered in San Jose, California.",
  },
  {
    name: "salesforce.com, inc.",
    symbol: "CRM",
    janPrice: 222.64,
    decPrice: 258.3,
    gainLoss: 35.66,
    sector: "Technology",
    company_summary:
      "salesforce.com, inc. develops enterprise cloud computing solutions with a focus on customer relationship management worldwide. The company offers Sales Cloud to store data, monitor leads and progress, forecast opportunities, and gain insights through analytics and relationship intelligence, as well as deliver quotes, contracts, and invoices. It also provides Service Cloud, which enables companies to deliver personalized customer service and support, as well as a field service solution that enables companies to connect agents, dispatchers, and mobile employees through a centralized platform, which helps to schedule and dispatch work, and track and manage jobs in real-time. In addition, the company offers Marketing Cloud to plan, personalize, and optimize one-to-one customer marketing interactions; and Commerce Cloud, which enables companies to enhance engagement, conversion, revenue, and loyalty from their customers.",
  },
  {
    name: "Verizon Communications Inc.",
    symbol: "VZ",
    janPrice: 58.96,
    decPrice: 52.68,
    gainLoss: -6.28,
    sector: "Communication Services",
    company_summary:
      "Verizon Communications Inc. offers communications, technology, information, and entertainment products and services to consumers, businesses, and governmental entities worldwide. Its Consumer segment provides postpaid and prepaid service plans; internet access on notebook computers and tablets; wireless equipment, including smartphones and other handsets; and wireless-enabled internet devices, such as tablets, and other wireless-enabled connected devices, such as smart watches. It also provides residential fixed connectivity solutions, including internet, video, and voice services; and sells network access to mobile virtual network operators. As of December 31, 2020, it had approximately 94 million wireless retail connections, 7 million broadband connections, and 4 million Fios video connections. The company's Business segment provides network connectivity products, including private networking, private cloud connectivity, virtual and software defined networking, and internet access services.",
  },
  {
    name: "Intel Corporation",
    symbol: "INTC",
    janPrice: 49.89,
    decPrice: 51.94,
    gainLoss: 2.05,
    sector: "Technology",
    company_summary:
      "Intel Corporation designs, manufactures, and sells essential technologies for the cloud, smart, and connected devices for retail, industrial, and consumer uses worldwide. The company operates through DCG, IOTG, Mobileye, NSG, PSG, CCG, and All Other segments. It offers platform products, such as central processing units and chipsets, and system-on-chip and multichip packages; and non-platform or adjacent products comprising accelerators, boards and systems, connectivity products, and memory and storage products. The company also provides Internet of Things products, including high-performance compute solutions for targeted verticals and embedded applications; and computer vision and machine learning-based sensing, data analysis, localization, mapping, and driving policy technology. It serves original equipment manufacturers, original design manufacturers, and cloud service providers.",
  },
  {
    name: "Wells Fargo & Company",
    symbol: "WFC",
    janPrice: 30.32,
    decPrice: 48.77,
    gainLoss: 18.45,
    sector: "Financial Services",
    company_summary:
      "Wells Fargo & Company (NYSE: WFC) is a leading financial services company that has approximately $1.9 trillion in assets and proudly serves one in three U.S. households and more than 10% of all middle market companies in the U.S. We provide a diversified set of banking, investment and mortgage products and services, as well as consumer and commercial finance, through our four reportable operating segments: Consumer Banking and Lending, Commercial Banking, Corporate and Investment Banking, and Wealth and Investment Management. Wells Fargo ranked No. 30 on Fortune's 2020 rankings of America's largest corporations. In the communities we serve, the company focuses its social impact on building a sustainable, inclusive future for all by supporting housing affordability, small business growth, financial health and a low-carbon economy.",
  },
  {
    name: "QUALCOMM Incorporated",
    symbol: "QCOM",
    janPrice: 153.01,
    decPrice: 186.33,
    gainLoss: 33.32,
    sector: "Technology",
    company_summary:
      "QUALCOMM Incorporated engages in the development and commercialization of foundational technologies for the wireless industry worldwide. The company operates through three segments: Qualcomm CDMA Technologies (QCT); Qualcomm Technology Licensing (QTL); and Qualcomm Strategic Initiatives (QSI). The QCT segment develops and supplies integrated circuits and system software based on 3G/4G/5G and other technologies for use in wireless voice and data communications, networking, application processing, multimedia, and global positioning system products. The QTL segment grants licenses or provides rights to use portions of its intellectual property portfolio, which include various patent rights useful in the manufacture and sale of wireless products comprising products implementing CDMA2000, WCDMA,LTE and/or OFDMA-based 5G standards and their derivatives.",
  },
  {
    name: "Eli Lilly and Company",
    symbol: "LLY",
    janPrice: 169.02,
    decPrice: 278.41,
    gainLoss: 109.39,
    sector: "Healthcare",
    company_summary:
      "Eli Lilly and Company discovers, develops, and markets human pharmaceuticals worldwide. It offers Baqsimi for severe hypoglycemia; Basaglar, Humalog, Humalog Mix 75/25, Humalog U-100, Humalog U-200, Humalog Mix 50/50, insulin lispro, insulin lispro protamine, insulin lispro mix 75/25, Humulin, Humulin 70/30, Humulin N, Humulin R, Humulin U-500, and Lyumjev for diabetes; and Jardiance, Trajenta, and Trulicity for type 2 diabetes. The company provides Alimta for non-small cell lung cancer (NSCLC) and malignant pleural mesothelioma; Cyramza for metastatic gastric cancer, gastro-esophageal junction adenocarcinoma, metastatic NSCLC, metastatic colorectal cancer, and hepatocellular carcinoma; Erbitux for colorectal cancers, and various head and neck cancers; Retevmo for metastatic NSCLC, medullary thyroid cancer, and thyroid cancer; Tyvyt for relapsed or refractory classic Hodgkin's lymph and non-squamous NSCLC; and Verzenio for HR+ and HER2- metastatic breast cancer. It offers Olumiant for rheumatoid arthritis; and Taltz for plaque psoriasis, psoriatic arthritis, ankylosing spondylitis, and non-radiographic axial spondylarthritis.",
  },
  {
    name: "NIKE, Inc.",
    symbol: "NKE",
    janPrice: 142.85,
    decPrice: 167.58,
    gainLoss: 24.73,
    sector: "Consumer Cyclical",
    company_summary:
      "NIKE, Inc., together with its subsidiaries, designs, develops, markets, and sells athletic footwear, apparel, equipment, and accessories worldwide. The company offers NIKE brand products in six categories, including running, NIKE basketball, the Jordan brand, football, training, and sportswear. It also markets products designed for kids, as well as for other athletic and recreational uses, such as American football, baseball, cricket, golf, lacrosse, skateboarding, tennis, volleyball, walking, wrestling, and other outdoor activities; and apparel with licensed college and professional team, and league logos, as well as sells sports apparel. In addition, the company sells a line of performance equipment and accessories comprising bags, socks, sport balls, eyewear, timepieces, digital devices, bats, gloves, protective equipment, and other equipment for sports activities; and various plastic products to other manufacturers.",
  },
  {
    name: "Walmart Inc.",
    symbol: "WMT",
    janPrice: 144.3,
    decPrice: 140.76,
    gainLoss: -3.54,
    sector: "Consumer Defensive",
    company_summary:
      "Walmart Inc. engages in the operation of retail, wholesale, and other units worldwide. The company operates through three segments: Walmart U.S., Walmart International, and Sam's Club. It operates supercenters, supermarkets, hypermarkets, warehouse clubs, cash and carry stores, and discount stores; membership-only warehouse clubs; ecommerce websites, such as walmart.com, walmart.com.mx, walmart.ca, flipkart.com, and samsclub.com; and mobile commerce applications. The company offers grocery products, including dry grocery, snacks, dairy, meat, produce, deli and bakery, frozen foods, and alcoholic and nonalcoholic beverages, as well as consumables, such as health and beauty aids, pet supplies, household chemicals, paper goods, and baby products; and health and wellness products covering pharmacy, over-the-counter drugs and other medical products, and optical and clinical services.",
  },
  {
    name: "McDonald's Corporation",
    symbol: "MCD",
    janPrice: 214.49,
    decPrice: 268.24,
    gainLoss: 53.75,
    sector: "Consumer Cyclical",
    company_summary:
      "McDonald's Corporation operates and franchises McDonald's restaurants in the United States and internationally. Its restaurants offer various food products and beverages, as well as breakfast menu. As of December 31, 2020, the company operated 39,198 restaurants. McDonald's Corporation was founded in 1940 and is based in Chicago, Illinois.",
  },
  {
    name: "Merck & Co., Inc.",
    symbol: "MRK",
    janPrice: 78.24,
    decPrice: 76.57,
    gainLoss: -1.64,
    sector: "Healthcare",
    company_summary:
      "Merck & Co., Inc. operates as a healthcare company worldwide. It operates through two segments, Pharmaceutical and Animal Health. The Pharmaceutical segment offers human health pharmaceutical products in the areas of oncology, hospital acute care, immunology, neuroscience, virology, cardiovascular, diabetes, and women's health, as well as vaccine products. The Animal Health segment discovers, develops, manufactures, and markets veterinary pharmaceuticals, vaccines, and health management solutions and services, as well as digitally connected identification, traceability, and monitoring products. It serves drug wholesalers and retailers, hospitals, and government agencies; managed health care providers, such as health maintenance organizations, pharmacy benefit managers, and other institutions; and physicians and physician distributors, veterinarians, and animal producers.",
  },
  {
    name: "Danaher Corporation",
    symbol: "DHR",
    janPrice: 224.99,
    decPrice: 327.41,
    gainLoss: 102.42,
    sector: "Healthcare",
    company_summary:
      "Danaher Corporation designs, manufactures, and markets professional, medical, industrial, and commercial products and services worldwide. The company operates through three segments: Life Sciences, Diagnostics, and Environmental & Applied Solutions. The Life Sciences segment provides mass spectrometers; cellular analysis, lab automation, and centrifugation instruments; microscopes; and genomics consumables. This segment also offers bioprocess technologies, consumables, and services; and filtration, separation, and purification technologies to the pharmaceutical and biopharmaceutical, food and beverage, medical, and life sciences companies, as well as universities, medical schools and research institutions, and various industrial manufacturers. The Diagnostics segment provides chemistry, immunoassay, microbiology, and automation systems, as well as hematology and molecular diagnostics products.",
  },
  {
    name: "AT&T Inc.",
    symbol: "T",
    janPrice: 29.39,
    decPrice: 24.78,
    gainLoss: -4.61,
    sector: "Communication Services",
    company_summary:
      "AT&T Inc. provides telecommunication, media, and technology services worldwide. The company operates through Communications, WarnerMedia, and Latin America segments. The Communications segment offers wireless voice and data communications services; video and targeted advertising services; broadband, including fiber, and legacy telephony internet and voice communication; and wireline telecom services. It also sells handsets, wirelessly enabled computers, wireless data cards, and IP-based set-top boxes, as well as various accessories, such as carrying cases and hands-free devices through the company-owned stores, agents, and third-party retail stores. This segment markets its communications services and products under the AT&T, Cricket, AT&T PREPAIDSM, AT&T TV, AT&T Fiber, and DIRECTV brand names.",
  },
  {
    name: "Lowe's Companies, Inc.",
    symbol: "LOW",
    janPrice: 160.77,
    decPrice: 253.7,
    gainLoss: 92.93,
    sector: "Consumer Cyclical",
    company_summary:
      "Lowe's Companies, Inc., together with its subsidiaries, operates as a home improvement retailer in the United States and internationally. The company offers a line of products for construction, maintenance, repair, remodeling, and decorating. It provides home improvement products in various categories, such as appliances, dÃ©cor, paint, hardware, millwork, lawn and garden, lighting, lumber and building materials, flooring, kitchens and bath, rough plumbing and electrical, seasonal and outdoor living, and tools. It also offers installation services through independent contractors in various product categories; extended protection plans; and in-warranty and out-of-warranty repair services.",
  },
  {
    name: "Linde plc",
    symbol: "LIN",
    janPrice: 266.71,
    decPrice: 343.42,
    gainLoss: 76.71,
    sector: "Basic Materials",
    company_summary:
      "Linde plc operates as an industrial gas company in North and South America, Europe, the Middle East, Africa, and the Asia Pacific. It offers oxygen, nitrogen, argon, rare gases, carbon dioxide, hydrogen, helium, electronic and specialty gases, acetylene, and carbon monoxide. The company also designs and constructs turnkey process plants, such as olefin, natural gas, air separation, hydrogen and synthesis gas, and other plants. It serves healthcare, petroleum refining, manufacturing, food, beverage carbonation, fiber-optics, steel making, aerospace, electronics, chemical, and water treatment industries. The company was founded in 1879 and is based in Guildford, the United Kingdom.",
  },
  {
    name: "Texas Instruments Incorporated",
    symbol: "TXN",
    janPrice: 164.6,
    decPrice: 191.84,
    gainLoss: 27.24,
    sector: "Technology",
    company_summary:
      "Texas Instruments Incorporated designs, manufactures, and sells semiconductors to electronics designers and manufacturers worldwide. It operates in two segments, Analog and Embedded Processing. The Analog segment offers power products to manage power requirements in various levels using battery management solutions, DC/DC switching regulators, AC/DC and isolated controllers and converters, power switches, linear regulators, voltage supervisors, voltage references, and lighting products. This segment also provides signal chain products that sense, condition, and measure signals to allow information to be transferred or converted for further processing and control for use in end markets, including amplifiers, data converters, interface products, motor drives, clocks, and sensing products.; and high volume products comprising integrated analog and standard products, which are primarily for sale into personal electronics, industrial, and automotive markets.",
  },
  {
    name: "NextEra Energy, Inc.",
    symbol: "NEE",
    janPrice: 77.21,
    decPrice: 91.32,
    gainLoss: 14.11,
    sector: "Utilities",
    company_summary:
      "NextEra Energy, Inc., through its subsidiaries, generates, transmits, distributes, and sells electric power to retail and wholesale customers in North America. The company generates electricity through wind, solar, nuclear, and fossil fuel, such as coal and natural gas facilities. It also develops, constructs, and operates long-term contracted assets with a focus on renewable generation facilities, electric transmission facilities, and battery storage projects; and owns, develops, constructs, manages and operates electric generation facilities in wholesale energy markets. As of December 31, 2020, the company operated approximately 28,400 megawatts of net generating capacity. It serves approximately 11 million people through approximately 5.6 million customer accounts in the east and lower west coasts of Florida with approximately 76,200 circuit miles of transmission and distribution lines and 673 substations.",
  },
  {
    name: "Intuit Inc.",
    symbol: "INTU",
    janPrice: 379.74,
    decPrice: 652.77,
    gainLoss: 273.03,
    sector: "Technology",
    company_summary:
      "Intuit Inc. provides financial management and compliance products and services for consumers, small businesses, self-employed, and accounting professionals in the United States, Canada, and internationally. The company operates in four segments: Small Business & Self-Employed, Consumer, Credit Karma, and ProConnect. The Small Business & Self-Employed segment provides QuickBooks online services and desktop software solutions comprising QuickBooks Online Advanced, a cloud-based solution; QuickBooks Enterprise, a hosted solution; QuickBooks Self-Employed solution; QuickBooks Commerce, a solution for product-based businesses; QuickBooks Online Accountant and QuickBooks Accountant Desktop Plus solutions; and payroll solutions, such as online payroll processing, direct deposit of employee paychecks, payroll reports, electronic payment of federal and state payroll taxes, and electronic filing of federal and state payroll tax forms.",
  },
  {
    name: "Advanced Micro Devices, Inc.",
    symbol: "AMD",
    janPrice: 92.11,
    decPrice: 154.36,
    gainLoss: 62.25,
    sector: "Technology",
    company_summary:
      "Advanced Micro Devices, Inc. operates as a semiconductor company worldwide. The company operates in two segments, Computing and Graphics; and Enterprise, Embedded and Semi-Custom. Its products include x86 microprocessors as an accelerated processing unit, chipsets, discrete and integrated graphics processing units (GPUs), data center and professional GPUs, and development services; and server and embedded processors, and semi-custom System-on-Chip (SoC) products, development services, and technology for game consoles. The company provides x86 microprocessors for desktop PCs under the AMD Ryzen, AMD Ryzen PRO, Ryzen, Threadripper, AMD A-Series, AMD FX, AMD Athlon, AMD Athlon PRO, and AMD Pro A-Series processors brands; microprocessors for notebook and 2-in-1s under the AMD Ryzen, AMD A-Series, AMD Athlon, AMD Ryzen PRO, AMD Athlon PRO, and AMD Pro A-Series processors brands; microprocessors for servers under the AMD EPYC and AMD Opteron brands.",
  },
  {
    name: "Union Pacific Corporation",
    symbol: "UNP",
    janPrice: 208.04,
    decPrice: 247.95,
    gainLoss: 39.91,
    sector: "Industrials",
    company_summary:
      "Union Pacific Corporation, through its subsidiary, Union Pacific Railroad Company, engages in the railroad business in the United States. The company offers transportation services for grain and grain products, fertilizers, food and refrigerated products, and coal and renewables to grain processors, animal feeders, ethanol producers, and other agricultural users; coal and sand, petroleum, and liquid petroleum gases; and construction products, industrial chemicals, plastics, forest products, specialized products, metals and ores, and soda ash, as well as finished automobiles, automotive parts, and merchandise in intermodal containers. As of December 31, 2020, its rail network included 32,313 route miles connecting Pacific Coast and Gulf Coast ports with the Midwest and Eastern United States gateways. The company was founded in 1862 and is headquartered in Omaha, Nebraska.",
  },
  {
    name: "United Parcel Service, Inc.",
    symbol: "UPS",
    janPrice: 168.4,
    decPrice: 215.11,
    gainLoss: 46.71,
    sector: "Industrials",
    company_summary:
      "United Parcel Service, Inc. provides letter and package delivery, transportation, logistics, and financial services. It operates through three segments: U.S. Domestic Package, International Package, and Supply Chain & Freight. The U.S. Domestic Package segment offers time-definite delivery of letters, documents, small packages, and palletized freight through air and ground services in the United States. The International Package segment provides guaranteed day and time-definite international shipping services in Europe, the Asia Pacific, Canada and Latin America, the Indian sub-continent, the Middle East, and Africa. This segment offers guaranteed time-definite express options.",
  },
  {
    name: "Philip Morris International Inc.",
    symbol: "PM",
    janPrice: 82.82,
    decPrice: 93.54,
    gainLoss: 10.72,
    sector: "Industrials",
    company_summary:
      "Philip Morris International Inc., through its subsidiaries, manufactures and sells cigarettes, other nicotine-containing products, smoke-free products, and related electronic devices and accessories. The company offers IQOS smoke-free products, including heated tobacco and nicotine-containing vapor products under the HEETS, HEETS Creations, HEETS Dimensions, HEETS Marlboro, HEETS FROM MARLBORO, Marlboro Dimensions, Marlboro HeatSticks, and Parliament HeatSticks brands, as well as under the Fiit and Miix licensed brands. It also sells its products under the Marlboro, Parliament, Bond Street, Chesterfield, L&M, Lark, and Philip Morris brands.",
  },
  {
    name: "Morgan Stanley",
    symbol: "MS",
    janPrice: 69.28,
    decPrice: 100.4,
    gainLoss: 31.12,
    sector: "Financial Services",
    company_summary:
      "Morgan Stanley, a financial holding company, provides various financial products and services to corporations, governments, financial institutions, and individuals in the Americas, Europe, the Middle East, Africa, and Asia. The company operates through Institutional Securities, Wealth Management, and Investment Management segments. The Institutional Securities segment offers capital raising and financial advisory services, including services related to the underwriting of debt, equity, and other securities, as well as advice on mergers and acquisitions, restructurings, real estate, and project finance. This segment also provides sales and trading services, such as sales, financing, prime brokerage, and market-making services in equity and fixed income products consisting of foreign exchange and commodities; corporate and commercial real estate loans, which provides secured lending facilities and financing for sales and trading customers, as well as asset-backed and mortgage lending; and wealth management services, investment, and research services.",
  },
  {
    name: "Honeywell International Inc.",
    symbol: "HON",
    janPrice: 212.84,
    decPrice: 206.43,
    gainLoss: -6.41,
    sector: "Industrials",
    company_summary:
      "Honeywell International Inc. operates as a diversified technology and manufacturing company worldwide. Its Aerospace segment offers auxiliary power units, propulsion engines, integrated avionics, environmental control and electric power systems, engine controls, flight safety, communications, navigation hardware, data and software applications, radar and surveillance systems, aircraft lighting, advanced systems and instruments, satellite and space components, and aircraft wheels and brakes; spare parts; repair, overhaul, and maintenance services; thermal systems; and connected solutions and data services for aftermarket, as well as wireless connectivity and management services. The company's Honeywell Building Technologies segment offers software applications for building control and optimization; sensors, switches, control systems, and instruments for energy management; access control; video surveillance; fire products; remote patient monitoring systems; e-cooling heat transfer agents; and installation and upgrades of systems.",
  },
  {
    name: "Medtronic plc",
    symbol: "MDT",
    janPrice: 117.2,
    decPrice: 104.43,
    gainLoss: -12.77,
    sector: "Healthcare",
    company_summary:
      "Medtronic plc develops, manufactures, distributes, and sells device-based medical therapies to hospitals, physicians, clinicians, and patients worldwide. It operates through four segments: Cardiovascular Portfolio, Neuroscience Portfolio, Medical Surgical Portfolio, and Diabetes Operating Unit. The Cardiovascular Portfolio segment offers implantable cardiac pacemakers, cardioverter defibrillators, and cardiac resynchronization therapy devices; AF ablation products; insertable cardiac monitor systems; mechanical circulatory support; TYRX products; and remote monitoring and patient-centered software. It also provides aortic valves; percutaneous coronary intervention stents, surgical valve replacement and repair products, endovascular stent grafts, percutaneous angioplasty balloons, and products to treat superficial venous diseases in the lower extremities.",
  },
  {
    name: "Applied Materials, Inc.",
    symbol: "AMAT",
    janPrice: 87.24,
    decPrice: 162.72,
    gainLoss: 75.48,
    sector: "Technology",
    company_summary:
      "Applied Materials, Inc. provides manufacturing equipment, services, and software to the semiconductor, display, and related industries. It operates through three segments: Semiconductor Systems, Applied Global Services, and Display and Adjacent Markets. The Semiconductor Systems segment develops, manufactures, and sells various manufacturing equipment that is used to fabricate semiconductor chips or integrated circuits. This segment also offers various technologies, including epitaxy, ion implantation, oxidation/nitridation, rapid thermal processing, physical vapor deposition, chemical vapor deposition, chemical mechanical planarization, electrochemical deposition, atomic layer deposition, etching, and selective deposition and removal, as well as metrology and inspection tools.",
  },
  {
    name: "Oracle Corporation",
    symbol: "ORCL",
    janPrice: 64.69,
    decPrice: 89.54,
    gainLoss: 24.85,
    sector: "Technology",
    company_summary:
      "Oracle Corporation provides products and services that address enterprise information technology environments worldwide. Its Oracle cloud software as a service offering include various cloud software applications, including Oracle Fusion cloud enterprise resource planning (ERP), Oracle Fusion cloud enterprise performance management, Oracle Fusion cloud supply chain and manufacturing management, Oracle Fusion cloud human capital management, Oracle Fusion cloud advertising and customer experience, and NetSuite applications suite. The company also offers cloud-based industry solutions for various industries; Oracle application licenses; and Oracle license support services. In addition, it provides cloud and license business' infrastructure technologies, such as the Oracle Database, an enterprise database; Java, a software development language; and middleware, including development tools and others.",
  },
  {
    name: "The Charles Schwab Corporation",
    symbol: "SCHW",
    janPrice: 53.22,
    decPrice: 85.82,
    gainLoss: 32.6,
    sector: "Financial Services",
    company_summary:
      "The Charles Schwab Corporation, through its subsidiaries, provides wealth management, securities brokerage, banking, asset management, custody, and financial advisory services. The company operates in two segments, Investor Services and Advisor Services. The Investor Services segment provides retail brokerage and banking services, retirement plan services, and other corporate brokerage services; equity compensation plan sponsors full-service recordkeeping for stock plans, stock options, restricted stock, performance shares, and stock appreciation rights; and retail investor, retirement plan, and mutual fund clearing services. The Advisor Services segment offers custodial, trading, banking, and support services; and retirement business and corporate brokerage retirement services. This segment provides brokerage accounts with cash management capabilities; third-party mutual funds, as well as proprietary mutual funds, plus mutual fund trading, and clearing services to broker-dealers; and exchange-traded funds (ETFs), including proprietary and third-party ETFs.",
  },
  {
    name: "Bristol-Myers Squibb Company",
    symbol: "BMY",
    janPrice: 61.74,
    decPrice: 62.29,
    gainLoss: 0.55,
    sector: "Healthcare",
    company_summary:
      "Bristol-Myers Squibb Company develops, licenses, manufactures, and markets biopharmaceutical products worldwide. The company offers products in hematology, oncology, cardiovascular, and immunology therapeutic classes. Its products include Revlimid, an oral immunomodulatory drug for the treatment of multiple myeloma; Opdivo for anti-cancer indications; Eliquis, an oral inhibitor indicated for reduction in risk of stroke/systemic embolism in NVAF, and for the treatment of DVT/PE; and Orencia for adult patients with active RA and psoriatic arthritis, as well as reducing signs and symptoms in pediatric patients with active polyarticular juvenile idiopathic arthritis. The company also provides Sprycel for the treatment of Philadelphia chromosome-positive chronic myeloid leukemia; Yervoy for the treatment of patients with unresectable or metastatic melanoma.",
  },
  {
    name: "Raytheon Technologies Corporation",
    symbol: "RTX",
    janPrice: 71.38,
    decPrice: 85.24,
    gainLoss: 13.86,
    sector: "Industrials",
    company_summary:
      "Raytheon Technologies Corporation, an aerospace and defense company, provides systems and services for the commercial, military, and government customers worldwide. It operates through four segments: Collins Aerospace Systems, Pratt & Whitney, Raytheon Intelligence & Space, and Raytheon Missiles & Defense. The Collins Aerospace Systems segment offers aerospace and defense products, and aftermarket service solutions for aircraft manufacturers and airlines, as well as regional, business, and general aviation; and for defense and commercial space operations. This segment also designs, produces, and supports cabin interior, communications and aviation systems, oxygen systems, food and beverage preparation, storage and galley systems, and lavatory and wastewater management systems; airborne intelligence, surveillance and reconnaissance systems, test and training range systems, crew escape systems, and simulation and training solutions; information management services.",
  },
  {
    name: "CVS Health Corporation",
    symbol: "CVS",
    janPrice: 68.68,
    decPrice: 102.4,
    gainLoss: 33.72,
    sector: "Healthcare",
    company_summary:
      "CVS Health Corporation provides health services in the United States. The company's Pharmacy Services segment offers pharmacy benefit management solutions, including plan design and administration, formulary management, retail pharmacy network management, mail order pharmacy, specialty pharmacy and infusion, clinical, and disease and medical spend management services. It serves employers, insurance companies, unions, government employee groups, health plans, prescription drug plans, Medicaid managed care plans, plans offered on public health insurance and private health insurance exchanges, other sponsors of health benefit plans, and individuals. This segment operates retail specialty pharmacy stores; and specialty mail order, mail order dispensing, and compounding pharmacies, as well as branches for infusion and enteral nutrition services. Its Retail/LTC segment sells prescription and over-the-counter drugs, consumer health and beauty products, and personal care products; and provides health care services through its MinuteClinic walk-in medical clinics.",
  },
  {
    name: "The Goldman Sachs Group, Inc.",
    symbol: "GS",
    janPrice: 267.0,
    decPrice: 388.04,
    gainLoss: 121.04,
    sector: "Financial Services",
    company_summary:
      "The Goldman Sachs Group, Inc., a financial institution, provides range of financial services for corporations, financial institutions, governments, and individuals worldwide. It operates through four segments: Investment Banking, Global Markets, Asset Management, and Consumer & Wealth Management. The company's Investment Banking segment provides financial advisory services, including strategic advisory assignments related to mergers and acquisitions, divestitures, corporate defense activities, restructurings, and spin-offs; and middle-market lending, relationship lending, and acquisition financing, as well as transaction banking services. This segment also offers underwriting services, such as equity underwriting for common and preferred stock and convertible and exchangeable securities; and debt underwriting for various types of debt instruments, including investment-grade and high-yield debt, bank and bridge loans, and emerging- and growth-market debt, as well as originates structured securities.",
  },
  {
    name: "Starbucks Corporation",
    symbol: "SBUX",
    janPrice: 107.66,
    decPrice: 114.22,
    gainLoss: 6.56,
    sector: "Consumer Cyclical",
    company_summary:
      "Starbucks Corporation, together with its subsidiaries, operates as a roaster, marketer, and retailer of specialty coffee worldwide. The company operates through three segments: North America, International, and Channel Development. Its stores offer coffee and tea beverages, roasted whole beans and ground coffees, single serve products, and ready-to-drink beverages; and various food products, such as pastries, breakfast sandwiches, and lunch items. The company also licenses its trademarks through licensed stores, and grocery and foodservice accounts. The company offers its products under the Starbucks, Teavana, Seattle's Best Coffee, Evolution Fresh, Ethos, Starbucks Reserve, and Princi brands. As of October 3, 2021, it operated 16,826 company-operated and licensed stores in North America; and 17,007 company-operated and licensed stores internationally. The company was founded in 1971 and is based in Seattle, Washington.",
  },
  {
    name: "Citigroup Inc.",
    symbol: "C",
    janPrice: 61.59,
    decPrice: 60.65,
    gainLoss: -0.94,
    sector: "Financial Services",
    company_summary:
      "Citigroup Inc., a diversified financial services holding company, provides various financial products and services to consumers, corporations, governments, and institutions in North America, Latin America, Asia, Europe, the Middle East, and Africa. The company operates in two segments, Global Consumer Banking (GCB) and Institutional Clients Group (ICG). The GCB segment offers traditional banking services to retail customers through retail banking, Citi-branded cards, and Citi retail services. It also provides various banking, credit card, lending, and investment services through a network of local branches, offices, and electronic delivery systems.",
  },
  {
    name: "BlackRock, Inc.",
    symbol: "BLK",
    janPrice: 730.6,
    decPrice: 922.57,
    gainLoss: 191.97,
    sector: "Financial Services",
    company_summary:
      "BlackRock, Inc. is a publicly owned investment manager. The firm primarily provides its services to institutional, intermediary, and individual investors including corporate, public, union, and industry pension plans, insurance companies, third-party mutual funds, endowments, public institutions, governments, foundations, charities, sovereign wealth funds, corporations, official institutions, and banks. It also provides global risk management and advisory services. The firm manages separate client-focused equity, fixed income, and balanced portfolios. It also launches and manages open-end and closed-end mutual funds, offshore funds, unit trusts, and alternative investment vehicles including structured funds. The firm launches equity, fixed income, balanced, and real estate mutual funds. It also launches equity, fixed income, balanced, currency, commodity, and multi-asset exchange traded funds.",
  },
  {
    name: "Amgen Inc.",
    symbol: "AMGN",
    janPrice: 231.25,
    decPrice: 225.17,
    gainLoss: -6.08,
    sector: "Healthcare",
    company_summary:
      "Amgen Inc. discovers, develops, manufactures, and delivers human therapeutics worldwide. It focuses on inflammation, oncology/hematology, bone health, cardiovascular disease, nephrology, and neuroscience areas. The company's products include Enbrel to treat plaque psoriasis, rheumatoid arthritis, and psoriatic arthritis; Neulasta that reduces the chance of infection due a low white blood cell count in patients cancer; Prolia to treat postmenopausal women with osteoporosis; Xgeva for skeletal-related events prevention; Otezla for the treatment of adult patients with plaque psoriasis, psoriatic arthritis, and oral ulcers associated with BehÃ§et's disease; Aranesp to treat a lower-than-normal number of red blood cells and anemia; KYPROLIS to treat patients with relapsed or refractory multiple myeloma; and Repatha, which reduces the risks of myocardial infarction, stroke, and coronary revascularization.",
  },
  {
    name: "International Business Machines Corporation",
    symbol: "IBM",
    janPrice: 120.32,
    decPrice: 131.62,
    gainLoss: 11.3,
    sector: "Technology",
    company_summary:
      "International Business Machines Corporation provides integrated solutions and services worldwide. Its Cloud & Cognitive Software segment offers software for vertical and domain-specific solutions in various application areas; and customer information control system and storage, and analytics and integration software solutions to support client mission on-premise workloads in banking, airline, and retail industries. It offers middleware and data platform software, including Red Hat that enables the operation of clients' hybrid multi-cloud environments; and Cloud Paks, WebSphere distributed, and analytics platform software, such as DB2 distributed, information integration, and enterprise content management, as well as IoT, Blockchain and AI/Watson platforms. The company's Global Business Services segment offers business consulting services; system integration, application management, maintenance, and support services for packaged software; and finance, procurement, talent and engagement, and industry-specific business process outsourcing services.",
  },
  {
    name: "American Tower Corporation",
    symbol: "AMT",
    janPrice: 226.07,
    decPrice: 285.76,
    gainLoss: 59.69,
    sector: "Real Estate",
    company_summary:
      "American Tower Corporation, one of the largest global REITs, is a leading independent owner, operator and developer of multitenant communications real estate with a portfolio of approximately 219,000 communications sites. For more information about American Tower, please visit the ÂEarnings MaterialsÂ and ÂInvestor PresentationsÂ sections of our investor relations website at www.americantower.com.",
  },
  {
    name: "Caterpillar Inc.",
    symbol: "CAT",
    janPrice: 183.0,
    decPrice: 206.38,
    gainLoss: 23.38,
    sector: "Industrials",
    company_summary:
      "Caterpillar Inc. manufactures and sells construction and mining equipment, diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives worldwide. Its Construction Industries segment offers asphalt pavers, compactors, cold planers, motorgraders, pipelayers, road reclaimers, telehandlers, and utility vehicles; backhoe, compact track, multi-terrain, skid steer, and track-type loaders; forestry and wheel excavators; and site prep and track-type tractors. The company's Resource Industries segment provides electric rope and hydraulic shovels, draglines, rotary drills, hard rock vehicles, track-type tractors, mining trucks, longwall miners, wheel loaders, off-highway and articulated trucks, wheel tractor scrapers, wheel dozers, landfill and soil compactors, machinery components, autonomous ready vehicles and solutions, and select work tools.",
  },
  {
    name: "Intuitive Surgical, Inc.",
    symbol: "ISRG",
    janPrice: 275.28,
    decPrice: 364.58,
    gainLoss: 89.3,
    sector: "Healthcare",
    company_summary:
      "Intuitive Surgical, Inc., together with its subsidiaries, designs, develops, manufactures, and markets da Vinci surgical systems, and related instruments and accessories in the United States and internationally. The company's da Vinci Surgical System include surgeon's consoles, patient-side carts, 3-D HD vision systems, skills simulators, da Vinci Xi integrated table motions, and Firefly fluorescence imaging products that enable surgeons to perform various surgical procedures, including gynecologic, urologic, general, cardiothoracic, and head and neck surgical procedures.",
  },
  {
    name: "The Boeing Company",
    symbol: "BA",
    janPrice: 210.0,
    decPrice: 203.17,
    gainLoss: -6.83,
    sector: "Industrials",
    company_summary:
      "The Boeing Company, together with its subsidiaries, designs, develops, manufactures, sales, services, and supports commercial jetliners, military aircraft, satellites, missile defense, human space flight and launch systems, and services worldwide. The company operates through four segments: Commercial Airplanes; Defense, Space & Security; Global Services; and Boeing Capital. The Commercial Airplanes segment provides commercial jet aircraft for passenger and cargo requirements, as well as fleet support services. The Defense, Space & Security segment engages in the research, development, production, and modification of manned and unmanned military aircraft and weapons systems; strategic defense and intelligence systems, which include strategic missile and defense systems, command, control, communications, computers, intelligence, surveillance and reconnaissance, cyber and information solutions, and intelligence systems; and satellite systems, such as government and commercial satellites, and space exploration.",
  },
  {
    name: "Prologis, Inc.",
    symbol: "PLD",
    janPrice: 99.55,
    decPrice: 165.89,
    gainLoss: 66.34,
    sector: "Real Estate",
    company_summary:
      "Prologis, Inc. is the global leader in logistics real estate with a focus on high-barrier, high-growth markets. As of December 31, 2020, the company owned or had investments in, on a wholly owned basis or through co-investment ventures, properties and development projects expected to total approximately 984 million square feet (91 million square meters) in 19 countries. Prologis leases modern logistics facilities to a diverse base of approximately 5,500 customers principally across two major categories: business-to-business and retail/online fulfillment.",
  },
  {
    name: "ServiceNow, Inc.",
    symbol: "NOW",
    janPrice: 556.94,
    decPrice: 663.28,
    gainLoss: 106.34,
    sector: "Technology",
    company_summary:
      "ServiceNow, Inc. provides enterprise cloud computing solutions that defines, structures, consolidates, manages, and automates services for enterprises worldwide. It operates the Now platform for workflow automation, artificial intelligence, machine learning, performance analytics, electronic service catalogs and portals, configuration management systems, data benchmarking, encryption, and collaboration and development tools. The company also provides information technology (IT) service management applications; IT service management product suite for enterprise's employees, customers, and partners; IT business management product suite; IT operations management product that connects a customer's physical and cloud-based IT infrastructure; IT Asset Management to automate IT asset lifecycles; and enterprise development operations product for developers' toolchain. In addition, it offers security incident management, threat enrichment intelligence, vulnerability response management, and security incident intelligence sharing security operation products; governance, risk, and compliance product to create policies and controls; human resources, legal, and workplace service delivery products; safe workplace applications; customer service management product; and field service management applications.",
  },
  {
    name: "Target Corporation",
    symbol: "TGT",
    janPrice: 176.51,
    decPrice: 224.1,
    gainLoss: 47.59,
    sector: "Consumer Defensive",
    company_summary:
      "Target Corporation operates as a general merchandise retailer in the United States. The company offers food assortments, including perishables, dry grocery, dairy, and frozen items; apparel, accessories, home dÃ©cor products, electronics, toys, seasonal offerings, food, and other merchandise; and beauty and household essentials. It also provides in-store amenities, such as Target CafÃ©, Target Optical, Starbucks, and other food service offerings. The company sells its products through its stores; and digital channels, including Target.com. As of January 30, 2021, the company operated approximately 1,897 stores. Target Corporation was founded in 1902 and is headquartered in Minneapolis, Minnesota.",
  },
  {
    name: "General Electric Company",
    symbol: "GE",
    janPrice: 87.12,
    decPrice: 94.62,
    gainLoss: 7.5,
    sector: "Industrials",
    company_summary:
      "General Electric Company operates as a high-tech industrial company worldwide. The company's Power segment offers heavy-duty and aeroderivative gas turbines for utilities, independent power producers, and industrial applications; maintenance, service, and upgrade solutions to plant assets and their operational lifecycle; steam power technology for fossil and nuclear applications, including boilers, generators, steam turbines, and air quality control systems; and advanced reactor technologies solutions comprising reactors, fuels, and support services for boiling water reactors. This segment also applies the science and systems of power conversion to provide motors, generators, automation, and control equipment; and drives for energy intensive industries, such as marine, oil and gas, mining, rail, metals, test systems, and water. Its Renewable Energy segment provides various solutions for its customers through combining onshore and offshore wind, blades, hydro, storage, solar, and grid solutions, as well as hybrid renewables and digital services offerings.",
  },
  {
    name: "S&P Global Inc.",
    symbol: "SPGI",
    janPrice: 331.71,
    decPrice: 478.1,
    gainLoss: 146.39,
    sector: "Financial Services",
    company_summary:
      "S&P Global Inc., together with its subsidiaries, provides ratings, benchmarks, analytics, and data to the capital and commodity markets worldwide. The company operates through four segments: S&P Global Ratings (Ratings), S&P Global Market Intelligence (Market Intelligence), S&P Global Platts (Platts), and S&P Dow Jones Indices (Indices). The Ratings segment offers credit ratings, research, and analytics to investors, corporations, governments, municipalities, commercial and investment banks, insurance companies, asset managers, and other debt issuers. The Market Intelligence segment provides multi-asset-class data, research, and analytical capabilities that integrate cross-asset analytics and desktop services to investment managers, investment banks, private equity firms, insurance companies, commercial banks, corporations, professional services firms, government agencies, and regulators.",
  },
  {
    name: "American Express Company",
    symbol: "AXP",
    janPrice: 121.3,
    decPrice: 164.39,
    gainLoss: 43.09,
    sector: "Financial Services",
    company_summary:
      "American Express Company, together with its subsidiaries, provides charge and credit payment card products, and travel-related services worldwide. The company operates through three segments: Global Consumer Services Group, Global Commercial Services, and Global Merchant and Network Services. Its products and services include payment and financing products; network services; accounts payable expense management products and services; and travel and lifestyle services. The company's products and services also comprise merchant acquisition and processing, servicing and settlement, point-of-sale marketing, and information products and services for merchants; and fraud prevention services, as well as the design and operation of customer loyalty programs.",
  },
  {
    name: "Micron Technology, Inc.",
    symbol: "MU",
    janPrice: 76.48,
    decPrice: 94.43,
    gainLoss: 17.95,
    sector: "Technology",
    company_summary:
      "Micron Technology, Inc. designs, manufactures, and sells memory and storage products worldwide. The company operates through four segments: Compute and Networking Business Unit, Mobile Business Unit, Storage Business Unit, and Embedded Business Unit. It provides memory and storage technologies comprises DRAM products, which are dynamic random access memory semiconductor devices with low latency that provide high-speed data retrieval; NAND products that are non-volatile and re-writeable semiconductor storage devices; and NOR memory products, which are non-volatile re-writable semiconductor memory devices that provide fast read speeds under the Micron and Crucial brands, as well as through private labels. The company offers memory products for the cloud server, enterprise, client, graphics, and networking markets, as well as for smartphone and other mobile-device markets.",
  },
  {
    name: "Anthem, Inc.",
    symbol: "ANTM",
    janPrice: 321.11,
    decPrice: 459.52,
    gainLoss: 138.41,
    sector: "Healthcare",
    company_summary:
      "Anthem, Inc., through its subsidiaries, operates as a health benefits company in the United States. It operates through four segments: Commercial & Specialty Business, Government Business, IngenioRx, and Other. The company offers a spectrum of network-based managed care health benefit plans to large and small groups, individuals, Medicaid, and Medicare markets. Its managed care plans include preferred provider organizations; health maintenance organizations; point-of-service plans; traditional indemnity plans and other hybrid plans, including consumer-driven health plans; and hospital only and limited benefit products. The company also provides a range of managed care services to self-funded customers, including claims processing, underwriting, stop loss insurance, actuarial services, provider network access, medical cost management, disease management, wellness programs, and other administrative services.",
  },
  {
    name: "Deere & Company",
    symbol: "DE",
    janPrice: 271.81,
    decPrice: 350.75,
    gainLoss: 78.94,
    sector: "Industrials",
    company_summary:
      "Deere & Company manufactures and distributes various equipment worldwide. The company operates through four segments: Production and Precision Agriculture, Small Agriculture and Turf, Construction and Forestry, and Financial Services. The Production and Precision Agriculture segment provides mid-size tractors, combines, cotton pickers and strippers, sugarcane harvesters, harvesting front-end equipment, sugarcane loaders, pull-behind scrapers, and tillage and seeding equipment, as well as application equipment, including sprayers and nutrient management, and soil preparation machinery for grain growers. The Small Agriculture and Turf segment offers utility tractors, and related loaders and attachments; turf and utility equipment, including riding lawn equipment, commercial mowing equipment, golf course equipment, and utility vehicles, as well as implements for mowing, tilling, snow and debris handling, aerating, residential, commercial, golf, and sports turf care applications; other outdoor power products; and hay and forage equipment.",
  },
  {
    name: "ConocoPhillips",
    symbol: "COP",
    janPrice: 73.21,
    decPrice: 40.5,
    gainLoss: 32.71,
    sector: "Energy",
    company_summary:
      "ConocoPhillips explores for, produces, transports, and markets crude oil, bitumen, natural gas, liquefied natural gas (LNG), and natural gas liquids worldwide. The company primarily engages in the conventional and tight oil reservoirs, shale gas, heavy oil, LNG, oil sands, and other production operations. Its portfolio includes unconventional plays in North America; conventional assets in North America, Europe, Asia, and Australia; various LNG developments; oil sands assets in Canada; and an inventory of conventional and unconventional exploration prospects. The company was founded in 1917 and is headquartered in Houston, Texas.",
  },
  {
    name: "Zoetis Inc.",
    symbol: "ZTSS",
    janPrice: 166.0,
    decPrice: 246.51,
    gainLoss: 80.51,
    sector: "Healthcare",
    company_summary:
      "Zoetis Inc. discovers, develops, manufactures, and commercializes animal health medicines, vaccines, and diagnostic products in the United States and internationally. It commercializes products primarily across species, including livestock, such as cattle, swine, poultry, fish, and sheep; and companion animals comprising dogs, cats, and horses. The company offers vaccines, which are biological preparations to prevent diseases of the respiratory, gastrointestinal, and reproductive tracts or induce a specific immune response; anti-infectives that prevent, kill, or slow the growth of bacteria, fungi, or protozoa; and parasiticides that prevent or eliminate external and internal parasites that include fleas, ticks, and worms. It also provides other pharmaceutical products, which comprise pain and sedation, antiemetic, reproductive, and oncology products; dermatology products for itch associated with allergic conditions and atopic dermatitis; and medicated feed additives that offer medicines to livestock.",
  },
  {
    name: "3M Company",
    symbol: "MMM",
    janPrice: 175.0,
    decPrice: 176.7,
    gainLoss: 1.7,
    sector: "Industrials",
    company_summary:
      "3M Company develops, manufactures, and markets various products worldwide. It operates through four business segments: Safety and Industrial, Transportation and Electronics, Health Care, and Consumer. The Safety and Industrial segment offers personal safety products, industrial adhesives and tapes, abrasives, closure and masking systems, electrical markets, automotive aftermarket, and roofing granules to industrial, electrical, and safety markets. The Transportation and Electronics provides electronics, such as display materials and systems, electronic materials solutions; automotive and aerospace, and commercial solutions; advanced materials; and transportation safety products to transportation and electronic original equipment manufacturer customers. The Health Care segment offers medical and surgical supplies, skin health and infection prevention products, oral care, separation and purification sciences, health information systems, drug delivery systems, and food safety products to healthcare industry. The Consumer segment provides home improvement, home care, and consumer health care products, as well as stationery and office supplies to various consumers.",
  },
  {
    name: "Automatic Data Processing, Inc.",
    symbol: "ADP",
    janPrice: 175.97,
    decPrice: 246.29,
    gainLoss: 70.32,
    sector: "Industrials",
    company_summary:
      "Automatic Data Processing, Inc. provides cloud-based human capital management solutions worldwide. It operates in two segments, Employer Services and Professional Employer Organization (PEO). The Employer Services segment offers strategic, cloud-based platforms, and human resources (HR) outsourcing solutions. Its offerings include payroll, benefits administration, talent management, HR management, workforce management, insurance, retirement, and compliance services. The PEO Services segment provides HR outsourcing solutions to small and mid-sized businesses through a co-employment model. This segment offers benefits package, protection and compliance, talent engagement, comprehensive outsourcing, and recruitment process outsourcing services. The company was founded in 1949 and is headquartered in Roseland, New Jersey.",
  },
  {
    name: "Booking Holdings Inc.",
    symbol: "BKNG",
    janPrice: 2250.0,
    decPrice: 2394.51,
    gainLoss: 144.51,
    sector: "Consumer Cyclical",
    company_summary:
      "Booking Holdings Inc. provides travel and restaurant online reservation and related services worldwide. The company operates Booking.com, which offers online accommodation reservations; Rentalcars.com that provides online rental car reservation services; Priceline, which offer online travel reservation services, including hotel, rental car and airline ticket reservation services, as well as vacation packages and cruises; and Agoda that provides online accommodation reservation services, as well as flight, ground transportation and activities reservation services. It also operates KAYAK, an online price comparison service that allows consumers to search and compare travel itineraries and prices, comprising airline ticket, accommodation reservation, and rental car reservation information; and OpenTable for booking online restaurant reservations. Further, it offers travel-related insurance products, and restaurant management services.",
  },
  {
    name: "Lam Research Corporation",
    symbol: "LRCX",
    janPrice: 478.15,
    decPrice: 723.4,
    gainLoss: 245.25,
    sector: "Technology",
    company_summary:
      "Lam Research Corporation designs, manufactures, markets, refurbishes, and services semiconductor processing equipment used in the fabrication of integrated circuits. The company offers ALTUS systems to deposit conformal films for tungsten metallization applications; SABRE electrochemical deposition products for copper interconnect transition that offers copper damascene manufacturing; SOLA ultraviolet thermal processing products for film treatments; and VECTOR plasma-enhanced CVD ALD products. It also provides SPEED gapfill high-density plasma chemical vapor deposition products; and Striker single-wafer atomic layer deposition products for dielectric film solutions.",
  },
  {
    name: "Ford Motor Company",
    symbol: "F",
    janPrice: 8.81,
    decPrice: 20.8,
    gainLoss: 11.99,
    sector: "Consumer Cyclical",
    company_summary:
      "Ford Motor Company designs, manufactures, markets, and services a range of Ford trucks, cars, sport utility vehicles, electrified vehicles, and Lincoln luxury vehicles worldwide. It operates through three segments: Automotive, Mobility, and Ford Credit. The Automotive segment sells Ford and Lincoln vehicles, service parts, and accessories through distributors and dealers, as well as through dealerships to commercial fleet customers, daily rental car companies, and governments. The Mobility segment designs and builds mobility services; and provides self-driving systems development services. The Ford Credit segment primarily engages in vehicle-related financing and leasing activities to and through automotive dealers.",
  },
  {
    name: "Mondelez International, Inc.",
    symbol: "MDLZ",
    janPrice: 58.49,
    decPrice: 65.52,
    gainLoss: 7.03,
    sector: "Consumer Defensive",
    company_summary:
      "Mondelez International, Inc., through its subsidiaries, manufactures, markets, and sells snack food and beverage products worldwide. It offers biscuits, including cookies, crackers, and salted snacks; chocolates; and gums and candies, as well as various cheese and grocery, and powdered beverage products. The company's snack brand portfolio includes Cadbury, Milka, and Toblerone chocolates; Oreo, belVita, and LU biscuits; Halls candies; and Trident gums and Tang powdered beverages. It serves supermarket chains, wholesalers, supercenters, club stores, mass merchandisers, distributors, convenience stores, gasoline stations, drug stores, value stores, and other retail food+ outlets through direct store delivery, company-owned and satellite warehouses, distribution centers, and other facilities, as well as through independent sales offices and agents, and e-commerce channels.",
  },
  {
    name: "The PNC Financial Services Group, Inc.",
    symbol: "PNC",
    janPrice: 149.68,
    decPrice: 201.07,
    gainLoss: 51.39,
    sector: "Financial Services",
    company_summary:
      "The PNC Financial Services Group, Inc. operates as a diversified financial services company in the United States. It operates through three segments: Retail Banking, Corporate & Institutional Banking, and Asset Management Group. The Retail Banking segment offers brokerage, insurance, and investment and cash management services; checking, savings, and money market accounts; certificates of deposits; and lending products, which includes residential mortgages, home equity loans and lines of credit, auto loans, education loans, and personal and small business loans, and credit cards to consumer and small business customers through a network of branches, ATMs, call centers, and online and mobile banking channels.",
  },
  {
    name: "Analog Devices, Inc.",
    symbol: "ADI",
    janPrice: 148.45,
    decPrice: 175.47,
    gainLoss: 27.02,
    sector: "Technology",
    company_summary:
      "Analog Devices, Inc. designs, manufactures, tests, and markets integrated circuits (ICs), software, and subsystems that leverage analog, mixed-signal, and digital signal processing technologies. The company provides data converter products, which translate real-world analog signals into digital data, as well as translates digital data into analog signals; power management and reference products for power conversion, driver monitoring, sequencing, and energy management applications in the automotive, communications, industrial, and high-end consumer markets; and power ICs include performance, integration, and software design simulation tools for accurate power supply designs. It also offers high-performance amplifiers to condition analog signals; and radio frequency and microwave ICs to support cellular infrastructure.",
  },
  {
    name: "General Motors Company",
    symbol: "GM",
    janPrice: 41.95,
    decPrice: 57.43,
    gainLoss: 15.48,
    sector: "Consumer Cyclical",
    company_summary:
      "General Motors Company designs, builds, and sells cars, trucks, crossovers, and automobile parts worldwide. The company operates through GM North America, GM International, Cruise, and GM Financial segments. It markets its vehicles primarily under the Buick, Cadillac, Chevrolet, GMC, Holden, Baojun, and Wuling brand names. The company also sells trucks, crossovers, and cars to dealers for consumer retail sales, as well as to fleet customers, including daily rental car companies, commercial fleet customers, leasing companies, and governments. In addition, it offers safety and security services for retail and fleet customers, including automatic crash response, emergency services, roadside assistance, crisis assist, stolen vehicle assistance, and turn-by-turn navigation, as well as connected services comprising mobile applications for owners to remotely control their vehicles and electric vehicle.",
  },
  {
    name: "Stryker Corporation",
    symbol: "SYK",
    janPrice: 245.34,
    decPrice: 270.42,
    gainLoss: 25.08,
    sector: "Healthcare",
    company_summary:
      "Stryker Corporation operates as a medical technology company. The company operates through three segments: Orthopaedics, MedSurg, and Neurotechnology and Spine. The Orthopaedics segment provides implants for use in hip and knee joint replacements, and trauma and extremities surgeries. The MedSurg segment offers surgical equipment and surgical navigation systems, endoscopic and communications systems, patient handling, emergency medical equipment and intensive care disposable products, reprocessed and remanufactured medical devices, and other medical device products that are used in various medical specialties.",
  },
  {
    name: "The TJX Companies, Inc.",
    symbol: "SYK",
    janPrice: 68.3,
    decPrice: 74.29,
    gainLoss: 5.99,
    sector: "Consumer Cyclical",
    company_summary:
      "The TJX Companies, Inc., together with its subsidiaries, operates as an off-price apparel and home fashions retailer. It operates through four segments: Marmaxx, HomeGoods, TJX Canada, and TJX International. The company sells family apparel, including footwear and accessories; home fashions, such as home basics, furniture, rugs, lighting products, giftware, soft home products, decorative accessories, tabletop, and cookware, as well as expanded pet, kids, and gourmet food departments; fine jewelry and accessories; and other merchandise.",
  },
  {
    name: "Altria Group, Inc.",
    symbol: "MO",
    janPrice: 41.08,
    decPrice: 46.79,
    gainLoss: 5.71,
    sector: "Consumer Defensive",
    company_summary:
      "Altria Group, Inc., through its subsidiaries, manufactures and sells cigarettes, oral tobacco products, and wine in the United States. It offers cigarettes primarily under the Marlboro brand; cigars principally under the Black & Mild brand; and moist smokeless tobacco products under the Copenhagen, Skoal, Red Seal, and Husky brands, as well as provides on! oral nicotine pouches. The company also produces and sells varietal and blended table wines, and sparkling wines under the Chateau Ste. Michelle and 14 Hands names; and imports and markets Antinori, Torres, and Villa Maria Estate wines, as well as Champagne Nicolas Feuillatte in the United States.",
  },
  {
    name: "Gilead Sciences, Inc.",
    symbol: "GILD",
    janPrice: 58.67,
    decPrice: 72.87,
    gainLoss: 14.2,
    sector: "Healthcare",
    company_summary:
      "Gilead Sciences, Inc., a research-based biopharmaceutical company, discovers, develops, and commercializes medicines in the areas of unmet medical need in the United States, Europe, and internationally. The company provides Biktarvy, Genvoya, Descovy, Odefsey, Truvada, Complera/ Eviplera, Stribild, and Atripla products for the treatment of human immunodeficiency virus (HIV) infection; Veklury, an injection for intravenous use, for the treatment of coronavirus disease 2019; and Epclusa, Harvoni, Vosevi, Vemlidy, and Viread for the treatment of liver diseases. It also offers Yescarta, Tecartus, Trodelvy, and Zydelig products for the treatment of hematology, oncology, and cell therapy patients. In addition, the company provides Letairis, an oral formulation for the treatment of pulmonary arterial hypertension.",
  },
  {
    name: "Lockheed Martin Corporation",
    symbol: "LMT",
    janPrice: 354.98,
    decPrice: 350.28,
    gainLoss: -4.7,
    sector: "Industrials",
    company_summary:
      "Lockheed Martin Corporation, a security and aerospace company, engages in the research, design, development, manufacture, integration, and sustainment of technology systems, products, and services worldwide. It operates through four segments: Aeronautics, Missiles and Fire Control, Rotary and Mission Systems, and Space. The Aeronautics segment offers combat and air mobility aircraft, unmanned air vehicles, and related technologies. The Missiles and Fire Control segment provides air and missile defense systems; tactical missiles and air-to-ground precision strike weapon systems; logistics; fire control systems; mission operations support, readiness, engineering support, and integration services; manned and unmanned ground vehicles; and energy management solutions.",
  },
  {
    name: "Chubb Limited",
    symbol: "CB",
    janPrice: 152.44,
    decPrice: 193.48,
    gainLoss: 41.04,
    sector: "Financial Services",
    company_summary:
      "Chubb Limited provides insurance and reinsurance products worldwide. The company's North America Commercial P&C Insurance segment offers commercial property, casualty, workers' compensation, package policies, risk management, financial lines, marine, construction, environmental, medical, cyber risk, surety, and excess casualty; and group accident and health insurance to large, middle market, and small commercial businesses. Its North America Personal P&C Insurance segment provides affluent and high net worth individuals and families with homeowners, automobile and collector cars, valuable articles, personal and excess liability, travel insurance, and recreational marine insurance and services. The company's North America Agricultural Insurance segment offers multiple peril crop and crop-hail insurance; and coverage for farm and ranch property, and commercial agriculture products.",
  },
];

const seedCompanies = () => Company.bulkCreate(companyData);

module.exports = seedCompanies;
