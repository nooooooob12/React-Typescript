
//Reducer가 많아지면 action 상수가 중복될 위험이 있으므로 액션 이름에 파일 이름을 체킹
export const INCRESE = "COUNT/INCRESE";

export const IncreseCounter = count =>({type:INCRESE, count});
const initalState = {
    count: 0
}
const counter = (state=initalState, action) => {
    switch (action.type){
    case INCRESE:
    return {
        ...state,
        count: action.count
    }
    default: //default를 추가하지 않으면 맨 처음 State값이 undefined가 나오므로 디폴트값으로 state를 지정해주기!
        return state
};
}

export default counter;