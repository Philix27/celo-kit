/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ChainId } from './chains';
import {
  Tokens,
  NativeStableTokenIds,
  TokenId,
  Token,
  TokenList,
} from './tokens';
// TokenFn.addresses
export class TokenFn {
  static tokenList: Token[] = TokenList;

  static isNativeToken(tokenId: string) {
    return Object.keys(Tokens).includes(tokenId);
  }

  static isNativeStableToken(tokenId: string) {
    return NativeStableTokenIds.includes(tokenId as TokenId);
  }

  static getTokenOptionsByChainId(chainId: ChainId): TokenId[] {
    const tokensForChain = this.tokenList[chainId];

    return tokensForChain
      ? Object.entries(tokensForChain)
          .filter(([, tokenAddress]) => tokenAddress !== '') // Allows incomplete 'TokenAddresses' list i.e When tokens are not on all chains
          .map(([tokenId]) => tokenId as TokenId)
      : [];
  }

  static getTokenById(id: string): Token | null {
    return Tokens[id as TokenId] || null;
  }
}
