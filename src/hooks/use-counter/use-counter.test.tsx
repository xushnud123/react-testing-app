import { renderHook, act } from "../../utils/test-utils";
import { useCounter } from "./use-counter";

describe("useCounter", () => {
  test("initial count 0", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("initialCount props 1", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 1,
      },
    });
    expect(result.current.count).toBe(1);
  });

  test("increment button", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  test("decrement button", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
