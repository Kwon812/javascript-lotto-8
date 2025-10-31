import {Console} from '@woowacourse/mission-utils'
import Validator from "./Validator.js";
import Lotto from "./Lotto.js";
export default class InputView {


    async askBuyPrice() {
        while (1) {
            try {
               const priceRaw=await Console.readLineAsync('구입금액을 입력해 주세요.\n')
                const price=Number(priceRaw);
                Validator.buyPriceValidator(price)
                return price
            } catch (e) {
                Console.print(e)
            }
        }
    }
    async askWinNumbers(){
        while (1) {
            try {
                const winNumbersRaw=await Console.readLineAsync('당첨번호를 입력해주세요.\n')
                const winNumbers=winNumbersRaw.split(',').map(Number)
                return new Lotto(winNumbers)
            } catch (e) {
                Console.print(e)
            }
        }
    }

    async askBonusNumber(winLotto){
        while (1) {
            try {
                const bonusNumberRaw=await Console.readLineAsync('보너스번호를 입력해주세요.\n')
                const bonusNumber=Number(bonusNumberRaw);
                Validator.bonusNumberValidator(bonusNumber,winLotto)
                return bonusNumber
            } catch (e) {
                Console.print(e)
            }
        }
    }
}