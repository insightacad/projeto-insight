const currentUrl = window.location.href;

// Crie um objeto URL com a URL atual
const urlObject = new URL(currentUrl);

// Use o URLSearchParams para acessar os parâmetros da URL
const params = new URLSearchParams(urlObject.search);

async function getUserProfile() {
    
    const regex = /^[a-zA-Z0-9_-]+$/;

    if (regex.test(params.get('username'))) {
        try {
            // HTTP Request
            const response = await fetch(`https://enfb5yeka2zt.x.pipedream.net/api/user/profile?username=${params.get('username')}`,{
                method: "GET",
            })
    
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
    else {
        location.replace("https://google.com")
    }
}