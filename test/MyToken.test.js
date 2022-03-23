const Token = artifacts.require("MyToken");

var chai = require("chai");

const BN = web3.utils.BN;
const chaiBN = require('chai-bn')(BN); // big number
chai.use(chaiBN);

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const expect = chai.expect;



contract("Token Test", async accounts => {
    const [initialHolder, recipient, anotherAccount] = accounts;

    beforeEach(async () => {
        this.myToken = await Token.new(1000);
    });

    it("All tokens should be in my account", async () => {
        let totalSupply = await this.myToken.totalSupply();
        //old style:
        //let balance = await instance.balanceOf.call(initialHolder);
        //assert.equal(balance.valueOf(), 0, "Account 1 has a balance");
        //condensed, easier readable style:
        await expect(this.myToken.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(totalSupply);
    });

    it("I can send tokens from Account 1 to Account 2", async () => {
        const sendTokens = 1;
        
        let totalSupply = await this.myToken.totalSupply();
        await expect(this.myToken.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(totalSupply);
        await expect(this.myToken.transfer(recipient, sendTokens)).to.eventually.be.fulfilled;
        await expect(this.myToken.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(totalSupply.sub(new BN(sendTokens)));
        await expect(this.myToken.balanceOf(recipient)).to.eventually.be.a.bignumber.equal(new BN(sendTokens));
    });


    it("It's not possible to send more tokens than account 1 has", async () => {
        let balanceOfAccount = await this.myToken.balanceOf(initialHolder);
        await expect(this.myToken.transfer(recipient, new BN(balanceOfAccount + 1))).to.eventually.be.rejected;

        //check if the balance is still the same
        await expect(this.myToken.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(balanceOfAccount);

    });
});