import {describe,it} from 'node:test'
import assert from 'node:assert'
import sum from './index.js'

describe("sum add function",() => {
    it("should return 2 when 1+1",() => {
        assert.equal(sum(1,1),2);
    })

    it("should return 0 when a or b is not number", () => {
        assert.equal(sum('a', 1), 0);
    })

    it("should return 0 when a or b less than 0",() => {
        assert.equal(sum(-1,1),0);
    })
})
