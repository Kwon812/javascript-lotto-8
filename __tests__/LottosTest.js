import Lotto from "../src/Lotto.js";
import Lottos from "../src/Lottos.js";

describe("Lottos Class Test", () => {

    test('가격 금액별 로또 출력 테스트 ',()=>{

        expect(Lottos.initLottosByPrice(4000).length).toBe(4)
        expect(Lottos.initLottosByPrice(4000)[0]).toBeInstanceOf(Lotto)

    })
    test('로또 당첨 테스트  ',()=>{
        Lottos.initLottosByPrice=jest.fn(()=>{
            return ([
                new Lotto([1,2,3,4,5,6]),
                new Lotto([1,2,3,4,5,23]),
                new Lotto([1,2,3,4,5,12])
            ])
        })
        const lottos=Lottos.initLottosByPrice()

        console.log(lottos)
        const winLotto=new Lotto([1,2,3,4,5,6])
        const bonus=12
        const ls=new Lottos(winLotto,bonus,lottos)
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
        expect(Lottos.profit(price,winners)).toBe('500.0')
    })
});