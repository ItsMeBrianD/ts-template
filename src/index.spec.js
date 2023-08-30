import {describe, expect, it} from "vitest";
import { sum } from ".";


describe("sum", () => {
    it("should be defined", () => {expect(sum).toBeDefined()})
    it("should know that 2+2=4", () => {expect(sum(2,2)).toBe(4)})
})