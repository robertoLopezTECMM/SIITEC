import React from 'react'

export const GoogleButton = () => {

    function handleCredentialResponse(response) {
        //Google token: ID_TOKEN
        //console.log('ID_TOKEN', response.credential);

        const body = {id_token: response.credential};

        fetch('http://localhost:3302/autenticacion/google', {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json() )
        .then(resp =>{ 
            console.log(resp)
        }).
        catch(console.warn);
    }
  return (
    <>
        <div id="g_id_onload"
            data-client_id="116926260799-t29jjjuclulishgfhk9q0ng44gll879g.apps.googleusercontent.com"
            data-auto_prompt="false"
            data-callback={()=>handleCredentialResponse()}>
        </div>
        <div className="g_id_signin"
            data-type="standard"
            data-size="large"
            data-theme="outline"
            data-text="sign_in_with"
            data-shape="rectangular"
            data-logo_alignment="left">
        </div>
    </>
  )
}
