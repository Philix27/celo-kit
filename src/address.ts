/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ethers } from 'ethers';
import { getAddress, isAddress, parseEther } from 'viem';
// import { getAddress, isAddress } from './address'

/**
 * Shorten a wallet address.
 * @param {string} address - The full wallet address to shorten.
 * @param {number} [chars=4] - The number of characters to show at the start and end.
 * @returns {string} The shortened address.
 */

export class AddressFn {
  static formatBalance(balance: BigInt, decimals = 18) {
    return ethers.formatUnits(balance.toString(), decimals);
  }

  static isValidAddress(address: string) {
    // Need to catch because ethers' isAddress throws in some cases (bad checksum)
    try {
      const isValid = address && isAddress(address);
      return !!isValid;
    } catch (error) {
      // logger.warn('Invalid address', error, address);
      return false;
    }
  }

  static validateAddress(address: string, context: string) {
    if (!address || !isAddress(address)) {
      const errorMsg = `Invalid addresses for ${context}: ${address}`;
      // logger.error(errorMsg);
      // throw new Error(errorMsg);
    }
  }

  static normalizeAddress(address: string) {
    AddressFn.validateAddress(address, 'normalize');
    return address;
    // return getAddress(address);
  }

  static shortenAddress(
    address: string,
    capitalize = true,
    startCount = 6,
    endCount = 4
  ) {
    AddressFn.validateAddress(address, 'shorten');
    const normalizedAddress = AddressFn.normalizeAddress(address);

    const start = normalizedAddress.substring(0, startCount);
    const end = normalizedAddress.substring(address.length - endCount);

    const shortened = `${start}...${end}`;
    return capitalize ? AddressFn.capitalizeAddress(shortened) : shortened;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static capitalizeAddress(address: string) {
    return '0x' + address.substring(2).toUpperCase();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static areAddressesEqual(a1: string, a2: string) {
    AddressFn.validateAddress(a1, 'compare');
    AddressFn.validateAddress(a2, 'compare');
    return getAddress(a1) === getAddress(a2);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static trimLeading0x(input: string) {
    return input.startsWith('0x') ? input.substring(2) : input;
  }

  static ensureLeading0x(input: string) {
    return input.startsWith('0x') ? input : `0x${input}`;
  }

  static shortValue = (value: bigint): string => {
    return Number(parseEther(Number(value).toString()))
      .toString()
      .trimEnd();
  };
}
