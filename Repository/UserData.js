const getUserData = (agentNum, token) => {
  
    const fetchPromise = new Promise((resolve, reject)=>{
      fetch("https://agents.d.co.il/api/zapagents/GetCustomers", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
            Keyword: agentNum
          }),
      }) 
      .then(data => resolve(data.json()))
      .then(parsedData => '\n\n **** ' + Console.log(JSON.stringify(parsedData)))
      .catch(error => {
        fetchPromise.reject(error);
        console.error("getUserData Error: " + error);
      });
    });
  
    return fetchPromise;
  };


  const sendLoginDetails = (userName, password) => {
    const fetchPromise = new Promise((resolve, reject) => {
      fetch("https://agents.d.co.il/Token", {
        method: 'POST',
        body: "grant_type=password&username=" + userName + "&password=" + password

      })
      .then(receivedData => resolve(receivedData.json()))
      .then(parsedData => '\n\n **** ' + Console.log(JSON.stringify(parsedData)))
      .catch(error => {
        fetchPromise.reject(error);
        console.error("getUserData Error: " + error);
      });
    })

    return fetchPromise;
  }

  
  export { getUserData, sendLoginDetails };
  