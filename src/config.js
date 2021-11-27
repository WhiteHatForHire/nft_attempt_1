const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Bobble Boys";
const description = "A collection of larger than life people you know and love, fully bobble-licous";
// Base URI is important
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
// Having layer configs that are only '1' config would make that a 100% unique mint. It can be presaved as a single file image in a folder named something unique. That will be one of a kind.
// Likewise, you can have as many editions below as you want. For fish types, each would be their own edition.
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Bodies" },
      { name: "Heads" },
      { name: "Hats" },
    ]
  },
  {
    growEditionSizeTo: 11,
    layersOrder: [
      { name: "Background_Image" },
      { name: "Bodies" },
      { name: "Heads" },
      { name: "Hats" },
    ]
  },
];
//This shuffles the configs above
const shuffleLayerConfigurations = true;

const debugLogs = false;

// Image size for generated image
const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 20 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

// You can add extra metaData here
const extraMetadata = {
// key: "ValuePair"
};

// Character to deliminate rarity
const rarityDelimiter = "#";

// Program fails if you don't have enough layers to make 10,000 variations
const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
