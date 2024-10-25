import { ContractName } from './contractNames';

export interface IContractAddress {
  name: ContractName;
  alfajores: string;
  celo: string;
}

export const coreContracts: Record<ContractName, IContractAddress> = {
  [ContractName.Accounts]: {
    name: ContractName.Accounts,
    alfajores: '0xed7f51A34B4e71fbE69B3091FcF879cD14bD73A9',
    celo: '0x7d21685C17607338b313a7174bAb6620baD0aaB7',
  },
  [ContractName.Attestations]: {
    name: ContractName.Attestations,
    alfajores: '0xAD5E5722427d79DFf28a4Ab30249729d1F8B4cc0',
    celo: '0xdC553892cdeeeD9f575aa0FBA099e5847fd88D20',
  },
  [ContractName.FederatedAttestations]: {
    name: ContractName.FederatedAttestations,
    alfajores: '0x70F9314aF173c246669cFb0EEe79F9Cfd9C34ee3',
    celo: '0x0aD5b1d0C25ecF6266Dd951403723B2687d6aff2',
  },
  [ContractName.OdisPayments]: {
    name: ContractName.OdisPayments,
    alfajores: '0x645170cdB6B5c1bc80847bb728dBa56C50a20a49',
    celo: '0xae6b29f31b96e61dddc792f45fda4e4f0356d0cb',
  },
  [ContractName.BlockchainParameters]: {
    name: ContractName.BlockchainParameters,
    alfajores: '0xE5aCbb07b4Eed078e39D50F66bF0c80cF1b93abe',
    celo: '0x6E10a8864C65434A721d82e424d727326F9d5Bfa',
  },
  [ContractName.DoubleSigningSlasher]: {
    name: ContractName.DoubleSigningSlasher,
    alfajores: '0x50C100baCDe7E2b546371EB0Be1eACcf0A6772ec',
    celo: '0x50C100baCDe7E2b546371EB0Be1eACcf0A6772ec',
  },
  [ContractName.DowntimeSlasher]: {
    name: ContractName.DowntimeSlasher,
    alfajores: '0xf2224c1d7b447D9A43a98CBD82FCCC0eF1c11CC5',
    celo: '0x71CAc3B31c138F3327C6cA14f9a1c8d752463fDd',
  },
  [ContractName.Election]: {
    name: ContractName.Election,
    alfajores: '0x1c3eDf937CFc2F6F51784D20DEB1af1F9a8655fA',
    celo: '0x8D6677192144292870907E3Fa8A5527fE55A7ff6',
  },
  [ContractName.EpochRewards]: {
    name: ContractName.EpochRewards,
    alfajores: '0xB10Ee11244526b94879e1956745bA2E35AE2bA20',
    celo: '0x07F007d389883622Ef8D4d347b3f78007f28d8b7',
  },
  [ContractName.Escrow]: {
    name: ContractName.Escrow,
    alfajores: '0xb07E10c5837c282209c6B9B3DE0eDBeF16319a37',
    celo: '0xf4Fa51472Ca8d72AF678975D9F8795A504E7ada5',
  },
  [ContractName.Exchange]: {
    name: ContractName.Exchange,
    alfajores: '0x17bc3304F94c85618c46d0888aA937148007bD3C',
    celo: '0x67316300f17f063085Ca8bCa4bd3f7a5a3C66275',
  },
  [ContractName.ExchangeEUR]: {
    name: ContractName.ExchangeEUR,
    alfajores: '0x997B494F17D3c49E66Fafb50F37A972d8Db9325B',
    celo: '0xE383394B913d7302c49F794C7d3243c429d53D1d',
  },
  [ContractName.FeeCurrencyWhitelist]: {
    name: ContractName.FeeCurrencyWhitelist,
    alfajores: '0xB8641365dBe943Bc2fb6977e6FBc1630EF47dB5a',
    celo: '0xBB024E9cdCB2f9E34d893630D19611B8A5381b3c',
  },
  [ContractName.Freezer]: {
    name: ContractName.Freezer,
    alfajores: '0xfe0Ada6E9a7b782f55750428CC1d8428Cd83C3F1',
    celo: '0x47a472F45057A9d79d62C6427367016409f4fF5A',
  },
  [ContractName.FeeHandler]: {
    name: ContractName.FeeHandler,
    alfajores: '0xEAaFf71AB67B5d0eF34ba62Ea06Ac3d3E2dAAA38',
    celo: '0xcD437749E43A154C07F3553504c68fBfD56B8778',
  },
  [ContractName.GasPriceMinimum]: {
    name: ContractName.GasPriceMinimum,
    alfajores: '0xd0Bf87a5936ee17014a057143a494Dc5C5d51E5e',
    celo: '0xDfca3a8d7699D8bAfe656823AD60C17cb8270ECC',
  },
  [ContractName.GoldToken]: {
    name: ContractName.GoldToken,
    alfajores: '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9',
    celo: '0x471EcE3750Da237f93B8E339c536989b8978a438',
  },
  [ContractName.Governance]: {
    name: ContractName.Governance,
    alfajores: '0xAA963FC97281d9632d96700aB62A4D1340F9a28a',
    celo: '0xD533Ca259b330c7A88f74E000a3FaEa2d63B7972',
  },
  [ContractName.GrandaMento]: {
    name: ContractName.GrandaMento,
    alfajores: '0xEcf09FCD57b0C8b1FD3DE92D59E234b88938485B',
    celo: '0x03f6842B82DD2C9276931A17dd23D73C16454a49',
  },
  [ContractName.LockedGold]: {
    name: ContractName.LockedGold,
    alfajores: '0x6a4CC5693DC5BFA3799C699F3B941bA2Cb00c341',
    celo: '0x6cC083Aed9e3ebe302A6336dBC7c921C9f03349E',
  },
  [ContractName.MentoFeeHandlerSeller]: {
    name: ContractName.MentoFeeHandlerSeller,
    alfajores: '0xae83C63B5FB50C353c8d23397bcC9dBf3a9837Ac',
    celo: '0x4eFa274B7e33476C961065000D58ee09F7921A74',
  },
  [ContractName.Random]: {
    name: ContractName.Random,
    alfajores: '0xdd318EEF001BB0867Cd5c134496D6cF5Aa32311F',
    celo: '0x22a4aAF42A50bFA7238182460E32f15859c93dfe',
  },
  [ContractName.Registry]: {
    name: ContractName.Registry,
    alfajores: '0x000000000000000000000000000000000000ce10',
    celo: '0x000000000000000000000000000000000000ce10',
  },
  [ContractName.Reserve]: {
    name: ContractName.Reserve,
    alfajores: '0xa7ed835288Aa4524bB6C73DD23c0bF4315D9Fe3e',
    celo: '0x9380fA34Fd9e4Fd14c06305fd7B6199089eD4eb9',
  },
  [ContractName.SortedOracles]: {
    name: ContractName.Accounts,
    alfajores: '0xFdd8bD58115FfBf04e47411c1d228eCC45E93075',
    celo: '0xefB84935239dAcdecF7c5bA76d8dE40b077B7b33',
  },
  [ContractName.StableToken]: {
    name: ContractName.StableToken,
    alfajores: '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1',
    celo: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
  },
  [ContractName.StableTokenEUR]: {
    name: ContractName.StableTokenEUR,
    alfajores: '0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F',
    celo: '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73',
  },
  [ContractName.TransferWhitelist]: {
    name: ContractName.TransferWhitelist,
    alfajores: '0x52449A99e3455acB831C0D580dCDAc8B290d5182',
    celo: '0xb49E4d6F0B7f8d0440F75697E6c8b37E09178BCF',
  },
  [ContractName.UniswapFeeHandlerSeller]: {
    name: ContractName.UniswapFeeHandlerSeller,
    alfajores: '0xc7b6E77C3702666DDa8EB5b7F30234B020788b21',
    celo: '0xD3aeE28548Dbb65DF03981f0dC0713BfCBd10a97',
  },
  [ContractName.Validators]: {
    name: ContractName.Validators,
    alfajores: '0x9acF2A99914E083aD0d610672E93d14b0736BBCc  ',
    celo: '0xaEb865bCa93DdC8F47b8e29F40C5399cE34d0C58',
  },
};