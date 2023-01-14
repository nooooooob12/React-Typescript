import React,{useReducer,useContext,createContext,Dispatch} from 'react';

// 아래에서 필요한 타입을 미리 선언(Color, State, Action, DisPatch)
type Color = 'red'|'blue'|'orange'

// State(상태)에 들어갈 타입을 지정해주는 단계
type State = {
    count:number;
    text:string;
    color:Color;
    isGood: boolean;
}
//Ation(액션)들을 위한 타입을 지정해주는 단계
type Action =
|{type:'SET_COUNT'; count:number} | {type:"SET_TEXT"; text:string} | {type:"SET_COLOR"; color:Color;} | {type:"TOGGLE_GOOD";}

//DisPatch에서 사용할 타입을 지정(위에서 지정한 Action타입을 제네릭(Generic)타입으로 설정하여 생성 시점의 Action 타입에서의 타입들로 경계선을 생성??)
type SampleDispatch = Dispatch<Action>;

//Context 생성해주는 단계 Context를 만들면서 위에서 선언했던 상태값 타입 또는 null값으로 줌. 기본값은 null?

const SampleContext = createContext<State |null>(null);
const SampleDispatchContext = createContext<SampleDispatch|null>(null);

//리듀서 선언
function reducer(state:State,action:Action):State{
    switch(action.type){
        case 'SET_COUNT':
            return{
                ...state,
                count: action.count
            }
        case 'SET_TEXT':
            return{
                ...state,
                text:action.text
            }
        case 'SET_COLOR':
            return{
                ...state,
                color:action.color
            }
        case 'TOGGLE_GOOD':
            return{
                ...state,
                isGood: !state.isGood
            }
        default:
            throw new Error('Happy Hacking') 
    }
}

export function SampleProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, {
      count: 0,
      text: 'hello,mr.ha',
      color: 'red',
      isGood: true
    });

    return(
        <SampleContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>
         </SampleContext.Provider>   
    )
}

export function useSampleState(){
    const state = useContext(SampleContext);
    if(!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않은 경우 에러를 표기
    return state;
}

export function useSampleDispatch(){
    const dispatch = useContext(SampleDispatchContext);
    if(!dispatch) throw new Error('Cannot find SampeDispatchContext') //위와 동일한 유효하지 않은 환경에서 에러 표기
    return dispatch;
}




//SampleStateContext를 정의할 때, createContext<State>({count: 0, ...}) 
//식으로 기본값을 지정 해 주고, useSampleState(): State {...} 으로 return type을 정의 해 주면, null check를 하지 않아도 된다는 댓글도 확인함.