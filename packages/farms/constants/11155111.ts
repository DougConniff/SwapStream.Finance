import { bscTestnetTokens, rinkebyTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'SST',
    lpAddress: '0x1A96CF832e63e539ea3D7070de5C3652880bFb26',
    token: rinkebyTokens.syrup,
    quoteToken: rinkebyTokens.weth,
  },
  {
    pid: 1,
    lpSymbol: 'SST-WETH LP',
    lpAddress: '0x5bB4e6Ba34A4060475BB120fC62288e64Cc590FF',
    token: rinkebyTokens.weth,
    quoteToken: rinkebyTokens.sst,
  },
 
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms