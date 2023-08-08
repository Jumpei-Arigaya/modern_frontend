import {
  render,
  screen,
  RenderResult,
  fireEvent,
  act,
} from "@testing-library/react";
import { DelayInput } from "./index";

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

  afterEach(() => {
    // テスト中に使用したjestのタイマーをリセットします
    // 現在pending中のタイマーのみ実行する
    jest.runOnlyPendingTimers();

    // タイマーを元のものに戻す
    jest.useRealTimers();
  });
});
