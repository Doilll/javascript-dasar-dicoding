import {describe,it} from 'node:test'
import assert from 'node:assert'
import { sum } from './index.js'

describe("function sum", () => {
    it('harus return sesuai pertambahan dua argumen', () => {
        assert.equal(sum(2, 3), 5);
    })
})
