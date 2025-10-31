import {Random} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";


export default class Lottos {

    #lottos = []
    #winLotto
    #bonusNumber
    constructor( winLotto,bonusNumber,lottos) {

        this.#winLotto = winLotto
        this.#bonusNumber = bonusNumber
        this.#lottos = lottos
    }

    _checkLotto(lotto){
        const winLottoNumbersArr=this.#winLotto.numbers
        const lottoNumbersArr=lotto.numbers
        const winCount=winLottoNumbersArr.filter(number=>lottoNumbersArr.includes(number)).length
        if(winCount===5 && lottoNumbersArr.includes(this.#bonusNumber)){
            return -1
        }
        return winCount

    }

    static initLottosByPrice(price) {
        const count = price / 1000
        const lottos = []
        for (let i = 0; i < count; i++) {
            const numbers = Random.pickUniqueNumbersInRange(1, 45, 6)
            lottos.push(new Lotto(numbers));
        }

        return lottos

    }
    static profit(price,winners){
        const PRIZES = {
            '-1': 30000000,
            '3': 5000,
            '4': 50000,
            '5': 1500000,
            '6': 2000000000
        };
        let profit=0
        Object.entries(winners).forEach(([key,value])=>{
            profit += (PRIZES[key] || 0) * value;
        })
        return ((profit / price) * 100).toFixed(1);
    }

    winners(){
        const winners=this.#lottos.reduce((acc,lotto)=> {
            const result=this._checkLotto(lotto)
            acc[result]=(acc[result] || 0) +1
            return acc
        },{})

        return winners
        // return filterWinners

    }

}