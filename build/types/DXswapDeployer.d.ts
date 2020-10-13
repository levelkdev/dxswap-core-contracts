/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { Contract, ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { ContractEvent, Callback, TransactionObject, BlockType } from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export class DXswapDeployer extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): DXswapDeployer;
  methods: {
    deploy(): TransactionObject<void>;

    dxdaoAvatar(): TransactionObject<string>;

    initialTokenPairs(
      arg0: number | string
    ): TransactionObject<{
      tokenA: string;
      tokenB: string;
      swapFee: string;
      0: string;
      1: string;
      2: string;
    }>;

    state(): TransactionObject<string>;
  };
  events: {
    FeeSetterDeployed: ContractEvent<string>;
    PairDeployed: ContractEvent<string>;
    PairFactoryDeployed: ContractEvent<string>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
