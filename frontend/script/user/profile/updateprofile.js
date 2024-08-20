const inputs = document.querySelectorAll(".input")

const [id, username, password] = inputs;

async function UpdateProfile() {
    try {
        // Json Object
        const profilejson = {
            method: "POST",
            body: JSON.stringify({ username: username.value, password: password.value }),
            headers: {
              'Content-Type': "application/json"
            }
        };

        // HTTP Request
        const response = await fetch("https://enfb5yeka2zt.x.pipedream.net",profilejson)

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        // Error debugging
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
}