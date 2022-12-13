/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
    BaseContract,
    BigNumber,
    BytesLike,
    CallOverrides,
    ContractTransaction,
    Overrides,
    PopulatedTransaction,
    Signer,
    utils,
} from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface FactoryInterface extends utils.Interface {
    functions: {
        "deployToken(string,string)": FunctionFragment;
    };

    getFunction(nameOrSignatureOrTopic: "deployToken"): FunctionFragment;

    encodeFunctionData(functionFragment: "deployToken", values: [string, string]): string;

    decodeFunctionResult(functionFragment: "deployToken", data: BytesLike): Result;

    events: {
        "TokenCreated(address)": EventFragment;
    };

    getEvent(nameOrSignatureOrTopic: "TokenCreated"): EventFragment;
}

export interface TokenCreatedEventObject {
    tokenAddress: string;
}
export type TokenCreatedEvent = TypedEvent<[string], TokenCreatedEventObject>;

export type TokenCreatedEventFilter = TypedEventFilter<TokenCreatedEvent>;

export interface Factory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;

    interface: FactoryInterface;

    queryFilter<TEvent extends TypedEvent>(
        event: TypedEventFilter<TEvent>,
        fromBlockOrBlockhash?: string | number | undefined,
        toBlock?: string | number | undefined
    ): Promise<Array<TEvent>>;

    listeners<TEvent extends TypedEvent>(
        eventFilter?: TypedEventFilter<TEvent>
    ): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;

    functions: {
        deployToken(
            name: string,
            symbol: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;
    };

    deployToken(
        name: string,
        symbol: string,
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    callStatic: {
        deployToken(name: string, symbol: string, overrides?: CallOverrides): Promise<string>;
    };

    filters: {
        "TokenCreated(address)"(tokenAddress?: null): TokenCreatedEventFilter;
        TokenCreated(tokenAddress?: null): TokenCreatedEventFilter;
    };

    estimateGas: {
        deployToken(
            name: string,
            symbol: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<BigNumber>;
    };

    populateTransaction: {
        deployToken(
            name: string,
            symbol: string,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<PopulatedTransaction>;
    };
}
