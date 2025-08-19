import { bscTestnetTokens, rinkebyTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'SST',
    lpAddress: '0xad07F58e0cfaf6aF19b7Ceb86B1ac245cb9DB3e1',
    token: rinkebyTokens.syrup,
    quoteToken: rinkebyTokens.weth,
  },
  {
    pid: 1,
    lpSymbol: 'SST-WETH LP',
    lpAddress: '0x11e695BCe07c49924Cca9DB1a8DC6A622A262545',
    token: rinkebyTokens.weth,
    quoteToken: rinkebyTokens.sst,
  },
 
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms