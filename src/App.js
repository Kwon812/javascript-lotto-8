import InputView from "./InputView.js";
import Lottos from "./Lottos.js";
import OutputView from "./OutputView.js";
import LottoMachine from "./LottoMachine.js";

class App {


    constructor() {
        this.inputView = new InputView()
        this.outputView = new OutputView()
    }

    async run() {
        const buyPrice = await this.inputView.askBuyPrice()

        const userLottos=Lottos.generateLottosByPrice(buyPrice)
        this.outputView.printLottos(userLottos.lottos)

        const winLotto=await this.inputView.askWinNumbers()
        const bonusNumber=await this.inputView.askBonusNumber(winLotto)

        const lottoGame=new LottoMachine(winLotto,bonusNumber,userLottos)

        const winners=lottoGame.winners()
        const profit=LottoMachine.profit(buyPrice,winners)
        this.outputView.printWinners(winners,profit)
    }
}

export default App;
