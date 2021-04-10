const iMToken = artifacts.require("../contracts/ImToken.sol");

contract("iM Token", async accounts => {
    it("should put 90,000,000 iM Tokens in the first account", async () => {
        const instance = await iMToken.deployed();
        const balance = await instance.balanceOf.call(accounts[0]);
        const decimals = await instance.decimals.call();
        assert.equal(balance / (10 ** decimals), 90000000);
    });

    it("should send coin correctly", async () => {
        // Get initial balances of first and second account.
        const account_one = accounts[0];
        const account_two = accounts[1];

        const instance = await iMToken.deployed();
        const iM = instance;

        const amount = 10;

        const balance = await iM.balanceOf.call(account_one);
        const account_one_starting_balance = balance;

        const balance_two = await iM.balanceOf.call(account_two);
        const account_two_starting_balance = balance_two;
        await iM.transfer(account_two, amount);

        const balance_new_one = await iM.balanceOf.call(account_one);
        const account_one_ending_balance = balance_new_one;

        const balance_new_two = await iM.balanceOf.call(account_two);
        const account_two_ending_balance = balance_new_two.toNumber();

        assert.equal(
            account_one_ending_balance,
            account_one_starting_balance - amount,
            "Amount wasn't correctly taken from the sender"
        );

        assert.equal(
            account_two_ending_balance,
            account_two_starting_balance + amount,
            "Amount wasn't correctly sent to the receiver"
        );
    });
});
