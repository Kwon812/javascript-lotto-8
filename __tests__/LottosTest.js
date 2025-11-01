import Lotto from "../src/Lotto.js";
import Lottos from "../src/Lottos.js";
import LottoMachine from "../src/LottoMachine.js";



describe("Lottos Class Test", () => {

    test('가격 금액별 로또 출력 테스트 ',()=>{

        const lottos=Lottos.initLottosByPrice(4000).lottos
        expect(lottos.length).toBe(4)
        expect(lottos[0]).toBeInstanceOf(Lotto)

    })

});