# Celo Kit

A tool box for developers building on the Celo blockchain

## Features
-  Tokens: List of top ERC20 tokens on Celo blockchain. (name, symbol, testnet and mainnet contract address)
- TokenFn: Functions related to tokens
- AddressFn:  Utilities functions for address
- Contract Address: List of important contract address
## Install Package

Using your package manager of choice

```
npm i celo-kit
```


## Example

```ts
// list of all tokens
TokenList 

// USDT token
const USDT: Token = Object.freeze({
  id: TokenId.USDT,
  symbol: TokenId.USDT,
  name: 'USDT',
  color: Color.usdcBlue,
  decimals: 6,
  address: {
    alfajores: '0xBba91F588d031469ABCCA566FE80fB1Ad8Ee3287',
    celo: '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e',
    baklava: '0x27c586469038A1749B27BF5914DAff7A14227AfB',
  },
});

```

## SVG icons for Tokens

```ts
import { Celo } from "celo-kit/icons"

// use in a component
function MyComponent() {

  return (
    <div>
      <img src={Celo} className="size-[50px]" />
    </div>
  )
}
```

Can be used in React, Svelte, Vue.js and any js library.