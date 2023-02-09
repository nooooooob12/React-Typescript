//딕셔너리 단어사전 만들어보기
type Words = {
    [key:string]:string //string만을 가지고 있는 object(key:value)
    //property의 이름은 모르지만 타입은 알 땐 유용함!
}

class Dict {
        private words:Words //자동 초기화 x 수동 초기화해보기
        constructor(){
            this.words = {}
        }
        //단어 추가 메소드 만들기
        add(word:Word){
            if(this.words[word.term]===undefined){ //주어진 단어가 존재하는지에 대한 존재여부 체크
                this.words[word.term] = word.def; //
            }
        }
        def(term:string){
            return this.words[term] //def를 통해 word를 찾아주는 메소드
        }
    }

class Word{
    constructor(
        public term:string,
        public def : string
    ){}
}

const kimchi = new Word("Kimchi","한국음식")

const dict =new Dict()
dict.add(kimchi);
dict.def("Kimchi")