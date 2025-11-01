import Lotto from "../src/Lotto.js";
import Lottos from "../src/Lottos.js";
import LottoMachine from "../src/LottoMachine.js";



describe("Lottos Class Test", () => {

    test('generateLootosByPrice 메서드 테스트 ',()=>{

        const lottos=Lottos.generateLottosByPrice(4000).lottos
        expect(lottos.length).toBe(4)
        expect(lottos[0]).toBeInstanceOf(Lotto)

    })

});