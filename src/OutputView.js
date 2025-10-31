
import {Console} from "@woowacourse/mission-utils";
export default class OutputView {


    printLottos(lottos){
        Console.print(`${lottos.length}개를 구매했습니다.`)
        lottos.forEach(lotto => {
            Console.print(`[${lotto.numbers.join(', ')}]`)
            // Console.print(`[${lotto.getNumbers().toString()}]`)
        })
    }

    printWinners(winners,profit){

        Console.print('당첨 통계\n' +
            '---\n' +
            `3개 일치 (5,000원) - ${winners['3']||0}개\n` +
            `4개 일치 (50,000원) - ${winners['4']||0}개\n` +
            `5개 일치 (1,500,000원) - ${winners['5']||0}개\n` +
            `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winners['-1']||0}개\n` +
            `6개 일치 (2,000,000,000원) - ${winners['6']||0}개\n` +
            `총 수익률은 ${profit}%입니다.`)
    }
}