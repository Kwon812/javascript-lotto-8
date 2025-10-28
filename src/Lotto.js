class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const isValidNumbers=numbers.every(number=>number>0 && number<46)
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (!isValidNumbers) {
      throw new Error('[ERROR] 로또 번호는 1이상 45 이하여야 합니다')
    }
  }

  // TODO: 추가 기능 구현
  getNumbers(){
    return this.#numbers;
  }
}

export default Lotto;
