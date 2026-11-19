// All lookup drill items. Each book file exports an array; see README for the item format.
import NFPA72 from './nfpa72.js';
import NEC from './nec.js';
import IBC from './ibc.js';
export const LOOKUPS = [...NFPA72, ...NEC, ...IBC];
