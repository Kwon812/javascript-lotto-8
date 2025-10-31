export default class Validator{


    static buyPriceValidator(price){
        if(price % 1000!==0){
            throw ("[ERROR] 구입금액은 1000원 단위여야 합니다")
        }
    }
    static bonusNumberValidator(number,winLotto){
        if(number<1 || number>45){
            throw ('[ERROR] 보너스번호는 1 이상 45이하여야 합니다')
        }
        if(winLotto.getNumbers().includes(number)){
            throw ('[ERROR] 보너스번호는 당첨번호와 중복될 수 없습니다')
        }
    }
}