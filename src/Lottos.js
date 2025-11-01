import {Random} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";


export default class Lottos {

    #lottos = []

    constructor(lottos = []) {
        this.#lottos = lottos
    }


    static initLottosByPrice(price) {
        const count = price / 1000
        const lottos = []
        for (let i = 0; i < count; i++) {
            const numbers = Random.pickUniqueNumbersInRange(1, 45, 6)
            lottos.push(new Lotto(numbers));
        }

        return new Lottos(lottos)

    }

    get lottos() {
        return this.#lottos
    }


}