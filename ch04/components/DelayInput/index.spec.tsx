import {
  render,
  screen,
  RenderResult,
  fireEvent,
  act,
} from "@testing-library/react";
import { DelayInput } from "./index";
import { HTMLInputTypeAttribute } from "react";

// DelayInputコンポーネントに関するテスト
describe("DelayInput", () => {
  let renderResult: RenderResult;
  let handleChange: jest.Mock;

  beforeEach(() => {
    // モック関数を作成する
    handleChange = jest.fn();

    // モック関数をDelayButtonに渡して描画
    renderResult = render(<DelayInput onChange={handleChange} />);

    // タイマーをjestのものに置き換える
    jest.useFakeTimers();
  });

  afterEach(async () => {
    // テスト中に使用したjestのタイマーをリセットします
    // 現在pending中のタイマーのみ実行する
    await act(() => {
      jest.runOnlyPendingTimers();
    });

    // タイマーを元のものに戻す
    jest.useRealTimers();

    renderResult.unmount();
  });

  // span要素のテキストが空であることをテスト
  it("should displau empty in span on initial render", () => {
    const spanNode = screen.getByTestId("display-text") as HTMLSpanElement;

    // 初期表示は空
    expect(spanNode).toHaveTextContent("入力したテキスト:");
  });

  // 入力して1秒後にテキストが表示されるかテスト
  it("should display input text 1second after onChange event occurs", async () => {
    const inputText = "Test Input Text";
    const inputNode = screen.getByTestId("input-text") as HTMLInputElement;

    // inputのonChangeイベントを呼び出す
    fireEvent.change(inputNode, { target: { value: inputText } });

    // act関数内で実行することにより、タイマーのコールバック中で起きる状態変更が反映されることを保証する
    await act(() => {
      // タイマーにセットされたtimeoutをすべて実行する
      jest.runAllTimers();
    });
    const spanNode = screen.getByTestId("display-text") as HTMLSpanElement;

    // 入力したテキストが表示されるか確認
    expect(spanNode).toHaveTextContent(`入力したテキスト: ${inputText}`);

    // モック関数を渡し、呼ばれたか確認する
    expect(handleChange).toHaveBeenCalled();
  });
});
