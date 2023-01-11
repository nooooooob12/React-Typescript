import * as React from 'react';

interface User {
    id: string,
    pw: string,
}
export function Login(user: User) {
    return (
        <div>
            <h2>Login Try</h2>
            <div>
                <b>아이디: <input type="text" value={user.id} /></b>
            </div>
            <div>
            <b>패스워드: <input type="text" value={user.pw} /></b>
            </div>
            <div>
                <input type="button" value="로그인" />
                <input type="button" value="회원가입" />
                <input type="button" value="취소" />
            </div>
        </div>

    )
}
export default Login;