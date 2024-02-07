const chainsByOracle = [
  {
    name: "Supra",
    chains: [
      "aptos",
      "aurora",
      "arbitrum",
      "arbitrum-nova",
      "avax",
      "base",
      "beam",
      "boba-bnb",
      "boba-eth",
      "bsc",
      "canto",
      "celo",
      "core",
      "cronos",
      "defichain",
      "dfk",
      "dogechain",
      "evmos",
      "ethereum",
      "fantom",
      "functionx",
      "fuse",
      "hedera",
      "shimmer_evm",
      "iotex",
      "jbc",
      "kava",
      "klaytn",
      "kroma",
      "linea",
      "mantle",
      "meld",
      "metis",
      "milkomeda",
      "mode",
      "moonbeam",
      "nordek",
      "op_bnb",
      "optimism",
      "polygon",
      "rollux",
      "sui",
      "syscoin",
      "telos",
      "tron",
      "manta",
    ],
  },
  {
    name: "Stork",
    chains: [
      "arbitrum",
      "aurora",
      "avax",
      "base",
      "bsc",
      "ethereum",
      "mantle",
      "op_bnb",
      "polygon_zkevm",
      "starknet",
      "starkex",
      "tron",
      "sui",
      "era",
    ],
  },
  {
    name: "Pyth",
    chains: [
      "arbitrum",
      "aurora",
      "avax",
      "bnb",
      "bittorrent",
      "base",
      "boba",
      "canto",
      "celo",
      "chiliz",
      "conflux",
      "core",
      "cronos",
      "eos",
      "evmos",
      "ethereum",
      "fantom",
      "filecoin",
      "xdai",
      "eon",
      "kcc",
      "kava",
      "lightlink phoenix",
      "linea",
      "manta",
      "mantle",
      "meter",
      "mode",
      "neon",
      "optimism",
      "polygon",
      "polygon_zkevm",
      "ronin",
      "scroll",
      "shimmer_evm",
      "tomochain",
      "wemix",
      "zkfair",
      "era",
      "zetachain",
      "solana",
      "aptos",
      "sui",
      "cosmos",
      "near",
    ],
  },
  {
    name: "Chainlink",
    chains: [
      "ethereum",
      "bsc",
      "polygon",
      "xdai",
      "avax",
      "fantom",
      "arbitrum",
      "optimism",
      "moonriver",
      "moonbeam",
      "metis",
      "base",
      "celo",
      "scroll",
      "linea",
      "era",
      "polygon_zkevm",
      "starknet",
      "solana",
    ],
  },
  {
    name: "Switchboard",
    chains: ["solana", "ethereum", "core", "arbitrum", "optimism", "base", "aurora", "aptos", "sui"],
  },
  {
    name: "RedStone",
    chains: ["ethereum", "arbitrum", "manta", "bsc", "kava", "mantle", "canto"],
  },
  {
    name: "UMA",
    chains: ["ethereum", "polygon", "boba", "optimism", "arbitrum", "xdai", "avax"],
  },
  {
    name: "API3",
    chains: [
      "arbitrum",
      "avax",
      "base",
      "bsc",
      "ethereum",
      "fantom",
      "xdai",
      "kava",
      "linea",
      "mantle",
      "moonbeam",
      "moonriver",
      "optimism",
      "polygon",
      "polygon_zkevm",
      "rootstock",
    ],
  },
  {
    name: "Band",
    chains: [
      "clv",
      "fantom",
      "secret",
      "godwoken",
      "sora",
      "avax",
      "ethereum",
      "horizen",
      "astar",
      "bitgert",
      "bittorrent",
      "findora",
      "icon",
      "meter",
      "oasis",
      "celo",
      "harmony",
      "moonriver",
      "okxchain",
      "platon",
      "bsc",
      "optimism",
      "cronos",
    ],
  },
  {
    name: "DIA",
    chains: [
      "ethereum",
      "polygon",
      "bsc",
      "optimism",
      "avax",
      "fantom",
      "arbitrum",
      "solana",
      "near",
      "polkadot",
      "kusama",
      "cosmos",
      "celo",
      "moonbeam",
      "era",
      "metis",
      "xdai",
      "injective",
      "acala",
      "aleph zero",
      "astar",
      "aurora",
      "base",
      "boba",
      "clv",
      "conflux",
      "evmos",
      "fuse",
      "neon",
      "nervos",
      "okxchain",
      "polygon_zkevm",
      "pontem",
      "shiden",
      "shibuya",
      "telos",
      "vara",
      "velas",
      "wanchain",
    ],
  },
  {
    name: "Witnet",
    chains: [
      "arbitrum",
      "avax",
      "boba",
      "celo",
      "conflux",
      "cronos",
      "cube",
      "dogechain",
      "elastos",
      "ethereum",
      "fuse",
      "xdai",
      "harmony",
      "hoo",
      "kava",
      "kucoin",
      "klaytn",
      "meter",
      "metis",
      "moonbeam",
      "okxchain",
      "optimism",
      "polygon",
      "reef",
      "scroll",
      "smartbch",
      "syscoin",
      "ultron",
    ],
  },
  {
    name: "WINkLink",
    chains: ["tron"],
  },
  {
    name: "Scope",
    chains: ["solana"],
  },
  {
    name: "Acurast",
    chains: [
      "tezos",
      "aleph zero",
      "arbitrum",
      "astar",
      "base",
      "bsc",
      "ethereum",
      "moonbeam",
      "optimism",
      "pendulum",
      "polygon",
      "aeternity",
    ],
  },
  {
    name: "Ojo Oracle",
    chains: ["archway", "comdex", "injective", "juno", "neutron", "osmosis", "secret", "stargaze"],
  },
  {
    name: "Pragma",
    chains: ["starknet"],
  },
  {
    name: "Harbinger",
    chains: ["tezos"],
  },
  {
    name: "SEDA",
    chains: ["aurora", "evmos", "optimism"],
  },
  {
    name: "Nest",
    chains: ["ethereum", "bsc", "aurora", "kucoin", "clv", "polygon"],
  },
];

export { chainsByOracle };
