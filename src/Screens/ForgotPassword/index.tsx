import React, { useState } from 'react'
import { PassThrough } from 'stream'
import './index.css'
import { NewPasswords } from './NewPasswords'
import { RecoveryEmail } from './RecoveryEmail'
import { VerificationCodeScreen } from './VerificationCodeScreen'
export const ForgotPassword = () => {
    const [stepActive, setStepActive] = useState('recoveryEmail')

    return (
        <div className="mainContainer">
            <div className="mainContainer">
                { stepActive === 'recoveryEmail' ?
                    <RecoveryEmail buttonOnClick={()=>setStepActive('verifyCode')}/>
                : stepActive === 'verifyCode'?
                    <VerificationCodeScreen
                        onCompleteFourDigits={() => console.log('newPasswords')}
                        onChangeStep={()=>setStepActive('newPasswords')}
                        message={''}
                    />
                :stepActive === 'newPasswords'?
                    <NewPasswords onChangeStep={()=>setStepActive('passwordChanged')}/>
                :stepActive === 'passwordChanged'?
                    <h1>contraseñas cambiadas</h1>
                :null
                }
            </div>
        </div>
    )
}
