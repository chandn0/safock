import { t } from "@lingui/macro";
import TransactionInput, { TransactionInputProps } from "components/transaction-input";
import { useAtomValue } from "jotai";
import { stRsrBalanceAtom } from "state/atoms";
import { unStakeAmountAtom } from "views/insurance/atoms";

const ClaimInsuranceInput = (props: Partial<TransactionInputProps>) => {
    const max = useAtomValue(stRsrBalanceAtom);

    return (
        <TransactionInput
            title={t`Unstake`}
            placeholder={t`stRSR amount`}
            amountAtom={unStakeAmountAtom}
            maxAmount={max}
            {...props}
        />
    );
};

export default ClaimInsuranceInput;
