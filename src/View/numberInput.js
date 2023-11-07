import { Console } from "@woowacourse/mission-utils";

const numberInput = async () => {
  const winningNumbers = await Console.readLineAsync(
    "당첨번호를 입력해 주세요."
  );
  const bonusNumbers = await Console.readLineAsync(
    "보너스 번호를 입력해 주세요."
  );
  return [winningNumbers.split(",").map(Number), bonusNumbers];
};

export default numberInput;
