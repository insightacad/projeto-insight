window.getUserInfoByUsername = async function(username) {

    const regex = /^[a-zA-Z0-9_-]+$/;

    if (regex.test(userid)) {
        try {
            // HTTP Request
            const response = await fetch(`https://enfb5yeka2zt.x.pipedream.net/api/user/profile?username=${username}`,{
                method: "GET",
            })
    
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
    
            // Error debugging
            const json = await response.json();
            return json
          } catch (error) {
            console.error(error.message);
          }
    }
    else {
        return {
            "message": "Please, input a valid username."
        }
    }
};

window.getAccountInfoByToken = async function() {

    const regex = /^[a-zA-Z0-9_-]+$/;

    if (regex.test("teste")) {
        try {
            // HTTP Request
            const response = await fetch(`https://enfb5yeka2zt.x.pipedream.net/api/user/account`,{
                method: "GET",
                credentials: 'same-origin',
            })
    
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
    
            const json = await response.json();
            return json

            // Error debugging
          } catch (error) {
            console.error(error.message);
          }
    }
    else {
        return {
            "message": "Token was not found in our systems."
        }
    }
};
