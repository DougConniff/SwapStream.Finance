import { ChainId,ERC20Token , WETH9 } from '@pancakeswap/sdk'

import { USDC_ETH, SST } from '@pancakeswap/tokens'

export const rinkebyTokens = {
  weth: WETH9[ChainId.RINKEBY],
  usdc: USDC_ETH[ChainId.RINKEBY],
  sst: SST[ChainId.RINKEBY],
  syrup: new ERC20Token(
    ChainId.RINKEBY,
    '0x142Da8e0cd9bDb4e5FFE41D099B37d8B7672803C',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://SwapStream.finance/',
  ),
}
