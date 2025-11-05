import { describe, it, expect } from "vitest"
import { fibonacci } from "../src/fibonacci.js"

describe('calcular fibonacci', () => {
  
  it('n < 0', () => {
    expect(() => fibonacci(-1)).toThrow(RangeError)
    expect(() => fibonacci(-5)).toThrow("solo números enteros >= 0")
  })

  it('n = 0', () => {
    expect(fibonacci(0)).toBe(0)
  })

  it('n = 1', () => {
    expect(fibonacci(1)).toBe(1)
  })

  it('n ≥ 2', () => {
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(4)).toBe(3)
    expect(fibonacci(5)).toBe(5)
    expect(fibonacci(10)).toBe(55)
  })
})