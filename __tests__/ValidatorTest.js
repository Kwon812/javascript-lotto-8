import Validator from "../src/Validator.js";
import Lotto from "../src/Lotto.js";


describe('Validator test',()=>{


    test('구입금액이 1000원 단위가 아닐경우 예외발생',()=>{

        expect(()=>Validator.buyPriceValidator(1300)).toThrow()
    })


    test('보너스 번호가  당첨번호와 중복될경우  예외발생',()=>{

        const winLotto=new Lotto([1,2,3,4,5,6])
        expect(()=>Validator.bonusNumberValidator(3,winLotto)).toThrow()
    })
    test('보너스 번호가 1~45에 해당하지 않는 경우  예외발생',()=>{

        const winLotto=new Lotto([1,2,3,4,5,6])
        expect(()=>Validator.bonusNumberValidator(-1,winLotto)).toThrow()
        expect(()=>Validator.bonusNumberValidator(46,winLotto)).toThrow()
    })
})

