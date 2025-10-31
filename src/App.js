import InputView from "./InputView.js";
import Lottos from "./Lottos.js";
import OutputView from "./OutputView.js";

class App {


    constructor() {
        this.inputView = new InputView()
        this.outputView = new OutputView()
    }

    async run() {
        const buyPrice = await this.inputView.askBuyPrice()
        const userLottos=Lottos.initLottosByPrice(buyPrice)
        this.outputView.printLottos(userLottos)

        const winLotto=await this.inputView.askWinNumbers()
        const bonusNumber=await this.inputView.askBonusNumber(winLotto)

        const lottos=new Lottos(winLotto,bonusNumber,userLottos)

        const winners=lottos.winners()
        const profit=Lottos.profit(buyPrice,winners)
        this.outputView.printWinners(winners,profit)
    }
}

export default App;
