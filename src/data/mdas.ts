export interface MDA {
  id: string;
  name: string;
  acronym: string;
  category: string;
  description: string;
  contacts: {
    phone: string[];
    email: string[];
    website?: string;
  };
  address: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export const mdaCategories = [
  "Energy",
  "Water",
  "Health",
  "Education",
  "Finance",
  "Agriculture",
  "Transportation",
  "Communication",
  "Security",
  "Environment",
  "Justice",
  "Trade",
  "Mining",
  "Tourism",
  "Social Welfare",
  "Foreign Affairs",
  "Labor",
  "Youth",
  "Sports",
  "Fisheries"
];

export const mdas: MDA[] = [
  // Energy Sector
  {
    id: "edsa",
    name: "Electricity Distribution and Supply Authority",
    acronym: "EDSA",
    category: "Energy",
    description: "The Electricity Distribution and Supply Authority (EDSA) is responsible for the distribution and supply of electricity throughout Sierra Leone.",
    contacts: {
      phone: ["+232 76 672 999", "+232 77 672 999"],
      email: ["info@edsa.sl", "customercare@edsa.sl"],
      website: "https://www.edsa.sl"
    },
    address: "Electricity House, Siaka Stevens Street, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/edsasierraleone",
      twitter: "https://twitter.com/EDSA_SL"
    }
  },
  {
    id: "egtc",
    name: "Electricity Generation and Transmission Company",
    acronym: "EGTC",
    category: "Energy",
    description: "The Electricity Generation and Transmission Company (EGTC) is responsible for generating and transmitting electricity in Sierra Leone.",
    contacts: {
      phone: ["+232 76 673 000", "+232 77 673 000"],
      email: ["info@egtc.sl"],
      website: "https://www.egtc.sl"
    },
    address: "Electricity House, Siaka Stevens Street, Freetown, Sierra Leone"
  },
  {
    id: "ewrc",
    name: "Electricity and Water Regulatory Commission",
    acronym: "EWRC",
    category: "Energy",
    description: "The Electricity and Water Regulatory Commission (EWRC) regulates the electricity and water sectors in Sierra Leone.",
    contacts: {
      phone: ["+232 76 615 986", "+232 77 615 986"],
      email: ["info@ewrc.gov.sl"],
      website: "https://www.ewrc.gov.sl"
    },
    address: "80 Siaka Stevens Street, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/ewrcsl"
    }
  },
  
  // Water Sector
  {
    id: "guma",
    name: "Guma Valley Water Company",
    acronym: "GUMA",
    category: "Water",
    description: "Guma Valley Water Company is responsible for the supply of safe drinking water to Freetown and its environs.",
    contacts: {
      phone: ["+232 76 223 2021", "+232 77 223 2021"],
      email: ["info@gumavalley.sl", "customerservice@gumavalley.sl"]
    },
    address: "Lamina Sankoh Street, Freetown, Sierra Leone"
  },
  {
    id: "salwaco",
    name: "Sierra Leone Water Company",
    acronym: "SALWACO",
    category: "Water",
    description: "Sierra Leone Water Company provides water supply services to areas outside of Freetown.",
    contacts: {
      phone: ["+232 76 601 601", "+232 77 601 601"],
      email: ["info@salwaco.sl"]
    },
    address: "Tower Hill, Freetown, Sierra Leone"
  },
  
  // Transportation Sector
  {
    id: "slrsa",
    name: "Sierra Leone Road Safety Authority",
    acronym: "SLRSA",
    category: "Transportation",
    description: "The Sierra Leone Road Safety Authority is responsible for road safety and vehicle registration in Sierra Leone.",
    contacts: {
      phone: ["+232 76 233 233", "+232 77 233 233"],
      email: ["info@slrsa.sl", "complaints@slrsa.sl"],
      website: "https://www.slrsa.gov.sl"
    },
    address: "Kissy Road, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/slrsa",
      twitter: "https://twitter.com/SLRSA_SL"
    }
  },
  {
    id: "slrtc",
    name: "Sierra Leone Road Transport Corporation",
    acronym: "SLRTC",
    category: "Transportation",
    description: "The Sierra Leone Road Transport Corporation provides public transportation services throughout Sierra Leone.",
    contacts: {
      phone: ["+232 76 622 622", "+232 77 622 622"],
      email: ["info@slrtc.sl"]
    },
    address: "Kissy Road, Freetown, Sierra Leone"
  },
  {
    id: "slaa",
    name: "Sierra Leone Airports Authority",
    acronym: "SLAA",
    category: "Transportation",
    description: "The Sierra Leone Airports Authority manages airports and air navigation services in Sierra Leone.",
    contacts: {
      phone: ["+232 76 721 721", "+232 77 721 721"],
      email: ["info@slaa.sl"],
      website: "https://www.slaa.sl"
    },
    address: "Lungi International Airport, Lungi, Sierra Leone"
  },
  {
    id: "slpa",
    name: "Sierra Leone Ports Authority",
    acronym: "SLPA",
    category: "Transportation",
    description: "The Sierra Leone Ports Authority manages and operates the ports in Sierra Leone.",
    contacts: {
      phone: ["+232 76 201 650", "+232 77 201 650"],
      email: ["info@slpa.sl"],
      website: "https://www.slpa.sl"
    },
    address: "Queen Elizabeth II Quay, Cline Town, Freetown, Sierra Leone"
  },
  {
    id: "slcaa",
    name: "Sierra Leone Civil Aviation Authority",
    acronym: "SLCAA",
    category: "Transportation",
    description: "The Sierra Leone Civil Aviation Authority regulates civil aviation in Sierra Leone.",
    contacts: {
      phone: ["+232 76 832 153", "+232 77 832 153"],
      email: ["info@slcaa.gov.sl"],
      website: "https://www.slcaa.gov.sl"
    },
    address: "Air Navigation Services Complex, Lungi International Airport, Lungi, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/slcaa",
      twitter: "https://twitter.com/SLCAA_SL"
    }
  },
  
  // Communication Sector
  {
    id: "natcom",
    name: "National Telecommunications Commission",
    acronym: "NATCOM",
    category: "Communication",
    description: "The National Telecommunications Commission regulates telecommunications and radio frequency spectrum in Sierra Leone.",
    contacts: {
      phone: ["+232 76 889 889", "+232 77 889 889"],
      email: ["info@natcom.gov.sl"],
      website: "https://www.natcom.gov.sl"
    },
    address: "Hill Station, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/natcomsl",
      twitter: "https://twitter.com/NATCOM_SL"
    }
  },
  {
    id: "slbc",
    name: "Sierra Leone Broadcasting Corporation",
    acronym: "SLBC",
    category: "Communication",
    description: "The Sierra Leone Broadcasting Corporation is the national broadcaster of Sierra Leone.",
    contacts: {
      phone: ["+232 76 777 777", "+232 77 777 777"],
      email: ["info@slbc.sl"],
      website: "https://www.slbc.sl"
    },
    address: "New England, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/slbcsl",
      twitter: "https://twitter.com/SLBC_SL"
    }
  },
  {
    id: "salpost",
    name: "Sierra Leone Postal Services",
    acronym: "SALPOST",
    category: "Communication",
    description: "Sierra Leone Postal Services provides postal services throughout Sierra Leone.",
    contacts: {
      phone: ["+232 76 611 611", "+232 77 611 611"],
      email: ["info@salpost.sl"]
    },
    address: "Siaka Stevens Street, Freetown, Sierra Leone"
  },
  
  // Health Sector
  {
    id: "mohs",
    name: "Ministry of Health and Sanitation",
    acronym: "MoHS",
    category: "Health",
    description: "The Ministry of Health and Sanitation is responsible for healthcare policy and service delivery in Sierra Leone.",
    contacts: {
      phone: ["+232 76 666 666", "+232 77 666 666"],
      email: ["info@mohs.gov.sl"],
      website: "https://www.mohs.gov.sl"
    },
    address: "Youyi Building, Brookfields, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/mohsierraleone",
      twitter: "https://twitter.com/mohs_sl"
    }
  },
  {
    id: "pcmh",
    name: "Princess Christian Maternity Hospital",
    acronym: "PCMH",
    category: "Health",
    description: "Princess Christian Maternity Hospital is the main maternity hospital in Sierra Leone.",
    contacts: {
      phone: ["+232 76 223 223", "+232 77 223 223"],
      email: ["info@pcmh.gov.sl"]
    },
    address: "Fourah Bay Road, Freetown, Sierra Leone"
  },
  {
    id: "connaught",
    name: "Connaught Hospital",
    acronym: "Connaught",
    category: "Health",
    description: "Connaught Hospital is the main referral hospital in Sierra Leone.",
    contacts: {
      phone: ["+232 76 224 224", "+232 77 224 224"],
      email: ["info@connaught.gov.sl"]
    },
    address: "Lightfoot Boston Street, Freetown, Sierra Leone"
  },
  {
    id: "nmcp",
    name: "National Malaria Control Program",
    acronym: "NMCP",
    category: "Health",
    description: "The National Malaria Control Program coordinates malaria control activities in Sierra Leone.",
    contacts: {
      phone: ["+232 76 667 667", "+232 77 667 667"],
      email: ["info@nmcp.gov.sl"]
    },
    address: "Youyi Building, Brookfields, Freetown, Sierra Leone"
  },
  
  // Education Sector
  {
    id: "moe",
    name: "Ministry of Education",
    acronym: "MoE",
    category: "Education",
    description: "The Ministry of Education oversees the educational system in Sierra Leone.",
    contacts: {
      phone: ["+232 76 555 555", "+232 77 555 555"],
      email: ["info@education.gov.sl"],
      website: "https://www.education.gov.sl"
    },
    address: "New England, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/moesl",
      twitter: "https://twitter.com/MoE_SL"
    }
  },
  {
    id: "usl",
    name: "University of Sierra Leone",
    acronym: "USL",
    category: "Education",
    description: "The University of Sierra Leone is the oldest university in Sierra Leone.",
    contacts: {
      phone: ["+232 76 556 556", "+232 77 556 556"],
      email: ["info@usl.edu.sl"],
      website: "https://www.usl.edu.sl"
    },
    address: "Mount Aureol, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/uslsl"
    }
  },
  {
    id: "njala",
    name: "Njala University",
    acronym: "Njala",
    category: "Education",
    description: "Njala University is a public university in Sierra Leone.",
    contacts: {
      phone: ["+232 76 557 557", "+232 77 557 557"],
      email: ["info@njala.edu.sl"],
      website: "https://www.njala.edu.sl"
    },
    address: "Njala, Moyamba District, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/njalauniversity"
    }
  },
  {
    id: "nctva",
    name: "National Council for Technical, Vocational and other Academic Awards",
    acronym: "NCTVA",
    category: "Education",
    description: "The National Council for Technical, Vocational and other Academic Awards regulates technical and vocational education in Sierra Leone.",
    contacts: {
      phone: ["+232 76 558 558", "+232 77 558 558"],
      email: ["info@nctva.gov.sl"]
    },
    address: "Tower Hill, Freetown, Sierra Leone"
  },
  
  // Finance Sector
  {
    id: "mof",
    name: "Ministry of Finance",
    acronym: "MoF",
    category: "Finance",
    description: "The Ministry of Finance is responsible for financial management and economic policy in Sierra Leone.",
    contacts: {
      phone: ["+232 76 444 444", "+232 77 444 444"],
      email: ["info@mof.gov.sl"],
      website: "https://www.mof.gov.sl"
    },
    address: "Treasury Building, George Street, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/mofsl",
      twitter: "https://twitter.com/MoF_SL"
    }
  },
  {
    id: "bsl",
    name: "Bank of Sierra Leone",
    acronym: "BSL",
    category: "Finance",
    description: "The Bank of Sierra Leone is the central bank of Sierra Leone.",
    contacts: {
      phone: ["+232 76 445 445", "+232 77 445 445"],
      email: ["info@bsl.gov.sl"],
      website: "https://www.bsl.gov.sl"
    },
    address: "Siaka Stevens Street, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/bankofsl",
      twitter: "https://twitter.com/BankofSL"
    }
  },
  {
    id: "nra",
    name: "National Revenue Authority",
    acronym: "NRA",
    category: "Finance",
    description: "The National Revenue Authority is responsible for collecting taxes and duties in Sierra Leone.",
    contacts: {
      phone: ["+232 76 446 446", "+232 77 446 446"],
      email: ["info@nra.gov.sl"],
      website: "https://www.nra.gov.sl"
    },
    address: "7 Bathurst Street, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/nrasl",
      twitter: "https://twitter.com/NRA_SL"
    }
  },
  {
    id: "nassit",
    name: "National Social Security and Insurance Trust",
    acronym: "NASSIT",
    category: "Finance",
    description: "The National Social Security and Insurance Trust manages the social security scheme in Sierra Leone.",
    contacts: {
      phone: ["+232 76 447 447", "+232 77 447 447"],
      email: ["info@nassit.gov.sl"],
      website: "https://www.nassit.gov.sl"
    },
    address: "32 Walpole Street, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/nassitsl"
    }
  },
  
  // Agriculture Sector
  {
    id: "moa",
    name: "Ministry of Agriculture",
    acronym: "MoA",
    category: "Agriculture",
    description: "The Ministry of Agriculture is responsible for agricultural policy and development in Sierra Leone.",
    contacts: {
      phone: ["+232 76 333 333", "+232 77 333 333"],
      email: ["info@agriculture.gov.sl"],
      website: "https://www.agriculture.gov.sl"
    },
    address: "Youyi Building, Brookfields, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/moasl",
      twitter: "https://twitter.com/MoA_SL"
    }
  },
  {
    id: "slari",
    name: "Sierra Leone Agricultural Research Institute",
    acronym: "SLARI",
    category: "Agriculture",
    description: "The Sierra Leone Agricultural Research Institute conducts agricultural research in Sierra Leone.",
    contacts: {
      phone: ["+232 76 334 334", "+232 77 334 334"],
      email: ["info@slari.gov.sl"],
      website: "https://www.slari.gov.sl"
    },
    address: "Tower Hill, Freetown, Sierra Leone"
  },
  
  // Environment Sector
  {
    id: "epa",
    name: "Environment Protection Agency",
    acronym: "EPA",
    category: "Environment",
    description: "The Environment Protection Agency is responsible for environmental protection and management in Sierra Leone.",
    contacts: {
      phone: ["+232 76 222 222", "+232 77 222 222"],
      email: ["info@epa.gov.sl"],
      website: "https://www.epa.gov.sl"
    },
    address: "21 Old Railway Line, Brookfields, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/epasl",
      twitter: "https://twitter.com/EPA_SL"
    }
  },
  {
    id: "npaa",
    name: "National Protected Area Authority",
    acronym: "NPAA",
    category: "Environment",
    description: "The National Protected Area Authority manages protected areas in Sierra Leone.",
    contacts: {
      phone: ["+232 76 223 223", "+232 77 223 223"],
      email: ["info@npaa.gov.sl"]
    },
    address: "Freetown, Sierra Leone"
  },
  {
    id: "met",
    name: "Sierra Leone Meteorological Agency",
    acronym: "SLMET",
    category: "Environment",
    description: "The Sierra Leone Meteorological Agency provides weather forecasts and climate information.",
    contacts: {
      phone: ["+232 76 224 224", "+232 77 224 224"],
      email: ["info@meteo.gov.sl"]
    },
    address: "F18 Charlotte Street, Freetown, Sierra Leone"
  },
  
  // Security Sector
  {
    id: "slp",
    name: "Sierra Leone Police",
    acronym: "SLP",
    category: "Security",
    description: "The Sierra Leone Police is the national police force of Sierra Leone.",
    contacts: {
      phone: ["+232 76 999 999", "+232 77 999 999", "+232 999"],
      email: ["info@police.gov.sl"],
      website: "https://www.police.gov.sl"
    },
    address: "Police Headquarters, George Street, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/sierraleonepolice",
      twitter: "https://twitter.com/SLP_SL"
    }
  },
  {
    id: "rslaf",
    name: "Republic of Sierra Leone Armed Forces",
    acronym: "RSLAF",
    category: "Security",
    description: "The Republic of Sierra Leone Armed Forces is the armed forces of Sierra Leone.",
    contacts: {
      phone: ["+232 76 888 888", "+232 77 888 888"],
      email: ["info@mod.gov.sl"],
      website: "https://www.mod.gov.sl"
    },
    address: "Ministry of Defence, Tower Hill, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/rslafsl",
      twitter: "https://twitter.com/RSLAF_SL"
    }
  },
  {
    id: "onsa",
    name: "Office of National Security",
    acronym: "ONS",
    category: "Security",
    description: "The Office of National Security coordinates national security in Sierra Leone.",
    contacts: {
      phone: ["+232 76 889 889", "+232 77 889 889"],
      email: ["info@ons.gov.sl"]
    },
    address: "Tower Hill, Freetown, Sierra Leone"
  },
  
  // Justice Sector
  {
    id: "moj",
    name: "Ministry of Justice",
    acronym: "MoJ",
    category: "Justice",
    description: "The Ministry of Justice is responsible for legal affairs in Sierra Leone.",
    contacts: {
      phone: ["+232 76 777 777", "+232 77 777 777"],
      email: ["info@justice.gov.sl"]
    },
    address: "Guma Building, Lamina Sankoh Street, Freetown, Sierra Leone"
  },
  {
    id: "judiciary",
    name: "Judiciary of Sierra Leone",
    acronym: "Judiciary",
    category: "Justice",
    description: "The Judiciary of Sierra Leone is the judicial branch of government.",
    contacts: {
      phone: ["+232 76 778 778", "+232 77 778 778"],
      email: ["info@judiciary.gov.sl"],
      website: "https://www.judiciary.gov.sl"
    },
    address: "Law Courts Building, Siaka Stevens Street, Freetown, Sierra Leone"
  },
  {
    id: "lc",
    name: "Law Reform Commission",
    acronym: "LRC",
    category: "Justice",
    description: "The Law Reform Commission reviews and reforms laws in Sierra Leone.",
    contacts: {
      phone: ["+232 76 779 779", "+232 77 779 779"],
      email: ["info@lrc.gov.sl"]
    },
    address: "Freetown, Sierra Leone"
  },
  
  // Trade Sector
  {
    id: "mti",
    name: "Ministry of Trade and Industry",
    acronym: "MTI",
    category: "Trade",
    description: "The Ministry of Trade and Industry is responsible for trade and industrial policy in Sierra Leone.",
    contacts: {
      phone: ["+232 76 666 666", "+232 77 666 666"],
      email: ["info@trade.gov.sl"]
    },
    address: "Youyi Building, Brookfields, Freetown, Sierra Leone"
  },
  {
    id: "slsb",
    name: "Sierra Leone Standards Bureau",
    acronym: "SLSB",
    category: "Trade",
    description: "The Sierra Leone Standards Bureau develops and enforces standards in Sierra Leone.",
    contacts: {
      phone: ["+232 76 667 667", "+232 77 667 667"],
      email: ["info@slsb.gov.sl"],
      website: "https://www.slsb.gov.sl"
    },
    address: "Tower Hill, Freetown, Sierra Leone"
  },
  
  // Mining Sector
  {
    id: "mmmr",
    name: "Ministry of Mines and Mineral Resources",
    acronym: "MMMR",
    category: "Mining",
    description: "The Ministry of Mines and Mineral Resources is responsible for mining policy in Sierra Leone.",
    contacts: {
      phone: ["+232 76 555 555", "+232 77 555 555"],
      email: ["info@mines.gov.sl"]
    },
    address: "Youyi Building, Brookfields, Freetown, Sierra Leone"
  },
  {
    id: "nma",
    name: "National Minerals Agency",
    acronym: "NMA",
    category: "Mining",
    description: "The National Minerals Agency regulates the minerals sector in Sierra Leone.",
    contacts: {
      phone: ["+232 76 556 556", "+232 77 556 556"],
      email: ["info@nma.gov.sl"],
      website: "https://www.nma.gov.sl"
    },
    address: "New England, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/nmasl",
      twitter: "https://twitter.com/NMA_SL"
    }
  },
  
  // Tourism Sector
  {
    id: "mtca",
    name: "Ministry of Tourism and Cultural Affairs",
    acronym: "MTCA",
    category: "Tourism",
    description: "The Ministry of Tourism and Cultural Affairs is responsible for tourism and cultural policy in Sierra Leone.",
    contacts: {
      phone: ["+232 76 444 444", "+232 77 444 444"],
      email: ["info@tourism.gov.sl"]
    },
    address: "Kingharman Road, Freetown, Sierra Leone"
  },
  {
    id: "ntb",
    name: "National Tourist Board",
    acronym: "NTB",
    category: "Tourism",
    description: "The National Tourist Board promotes tourism in Sierra Leone.",
    contacts: {
      phone: ["+232 76 445 445", "+232 77 445 445"],
      email: ["info@ntb.gov.sl"],
      website: "https://www.ntb.gov.sl"
    },
    address: "Kingharman Road, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/visitsierraleone",
      twitter: "https://twitter.com/Visit_SL",
      instagram: "https://www.instagram.com/visitsierraleone"
    }
  },
  
  // Social Welfare Sector
  {
    id: "mswgca",
    name: "Ministry of Social Welfare, Gender and Children's Affairs",
    acronym: "MSWGCA",
    category: "Social Welfare",
    description: "The Ministry of Social Welfare, Gender and Children's Affairs is responsible for social welfare policy in Sierra Leone.",
    contacts: {
      phone: ["+232 76 333 333", "+232 77 333 333"],
      email: ["info@socialwelfare.gov.sl"]
    },
    address: "New England, Freetown, Sierra Leone"
  },
  {
    id: "nacsa",
    name: "National Commission for Social Action",
    acronym: "NaCSA",
    category: "Social Welfare",
    description: "The National Commission for Social Action implements social protection programs in Sierra Leone.",
    contacts: {
      phone: ["+232 76 334 334", "+232 77 334 334"],
      email: ["info@nacsa.gov.sl"],
      website: "https://www.nacsa.gov.sl"
    },
    address: "Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/nacsasl"
    }
  },
  
  // Foreign Affairs Sector
  {
    id: "mfaic",
    name: "Ministry of Foreign Affairs and International Cooperation",
    acronym: "MFAIC",
    category: "Foreign Affairs",
    description: "The Ministry of Foreign Affairs and International Cooperation is responsible for foreign policy in Sierra Leone.",
    contacts: {
      phone: ["+232 76 222 222", "+232 77 222 222"],
      email: ["info@foreignaffairs.gov.sl"]
    },
    address: "Tower Hill, Freetown, Sierra Leone"
  },
  
  // Labor Sector
  {
    id: "mlss",
    name: "Ministry of Labour and Social Security",
    acronym: "MLSS",
    category: "Labor",
    description: "The Ministry of Labour and Social Security is responsible for labor policy in Sierra Leone.",
    contacts: {
      phone: ["+232 76 111 111", "+232 77 111 111"],
      email: ["info@labour.gov.sl"]
    },
    address: "New England, Freetown, Sierra Leone"
  },
  
  // Youth Sector
  {
    id: "mysc",
    name: "Ministry of Youth and Sports",
    acronym: "MYS",
    category: "Youth",
    description: "The Ministry of Youth and Sports is responsible for youth and sports policy in Sierra Leone.",
    contacts: {
      phone: ["+232 76 999 888", "+232 77 999 888"],
      email: ["info@youth.gov.sl"]
    },
    address: "National Stadium, Brookfields, Freetown, Sierra Leone"
  },
  {
    id: "naycom",
    name: "National Youth Commission",
    acronym: "NAYCOM",
    category: "Youth",
    description: "The National Youth Commission coordinates youth development in Sierra Leone.",
    contacts: {
      phone: ["+232 76 999 887", "+232 77 999 887"],
      email: ["info@naycom.gov.sl"],
      website: "https://www.naycom.gov.sl"
    },
    address: "Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/naycomsl",
      twitter: "https://twitter.com/NAYCOM_SL"
    }
  },
  
  // Sports Sector
  {
    id: "slfa",
    name: "Sierra Leone Football Association",
    acronym: "SLFA",
    category: "Sports",
    description: "The Sierra Leone Football Association governs football in Sierra Leone.",
    contacts: {
      phone: ["+232 76 888 777", "+232 77 888 777"],
      email: ["info@slfa.sl"],
      website: "https://www.slfa.sl"
    },
    address: "National Stadium, Brookfields, Freetown, Sierra Leone",
    socialMedia: {
      facebook: "https://www.facebook.com/slfasl",
      twitter: "https://twitter.com/SLFA_sl"
    }
  },
  
  // Fisheries Sector
  {
    id: "mfmr",
    name: "Ministry of Fisheries and Marine Resources",
    acronym: "MFMR",
    category: "Fisheries",
    description: "The Ministry of Fisheries and Marine Resources is responsible for fisheries policy in Sierra Leone.",
    contacts: {
      phone: ["+232 76 777 666", "+232 77 777 666"],
      email: ["info@fisheries.gov.sl"]
    },
    address: "Youyi Building, Brookfields, Freetown, Sierra Leone"
  }
];