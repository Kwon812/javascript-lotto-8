import Lottos from "../src/Lottos.js";
import Lotto from "../src/Lotto.js";
import LottoMachine from "../src/LottoMachine.js";


describe('LottoMachine Class Test',()=>{

    test('로또 당첨 테스트  ',()=>{

        Lottos.generateLottosByPrice=jest.fn(()=>{
            return (new Lottos([
                new Lotto([1,2,3,4,5,6]),
                new Lotto([1,2,3,4,5,23]),
                new Lotto([1,2,3,4,5,12])
            ]))
        })
        const lottos=Lottos.generateLottosByPrice(3000)
        const winLotto=new Lotto([1,2,3,4,5,6])
        const bonus=12
        const ls=new LottoMachine(winLotto,bonus,lottos)
        const checkSpy=jest.spyOn(ls,'_checkLotto')

        expect(ls.winners()).toEqual({
            '6':1,
            '5':1,
            '-1':1
        })

        expect(checkSpy).toHaveBeenCalled()
        expect(checkSpy.mock.results.length).toBe(3)
    })
    test('수익률  테스트  ',()=>{
        const price=3000
        const winners={
            '3':3
        }
        expect(LottoMachine.profit(price,winners)).toBe('500.0')
    })
})