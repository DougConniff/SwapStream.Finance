import { ChainId,ERC20Token , WETH9 } from '@pancakeswap/sdk'

import { USDC_ETH, SST } from '@pancakeswap/tokens'

export const rinkebyTokens = {
  weth: WETH9[ChainId.RINKEBY],
  usdc: USDC_ETH[ChainId.RINKEBY],
  sst: SST[ChainId.RINKEBY],
  syrup: new ERC20Token(
    ChainId.RINKEBY,
    '0xD213A1B698Ca84B480B523DED26d9Ec2b224865D',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://SwapStream.finance/',
  ),
}
