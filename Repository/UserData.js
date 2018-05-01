const getUserData = (agentNum) => {
  
    const fetchPromise = new Promise((resolve, reject)=>{
      fetch("https://agents.d.co.il/api/zapagents/GetCustomers", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer qN-a_Xcf7ekkW8Oxx-7pLWsuuAZctrLio5dcsj7ShHSTsWIHJBKobQz5EocF4V_cbZbIJ5GE63VKdUv47cWCpTigJcJQlPkhR5N7jvuEvFNc3vYnsK4RPhuyv30yCFGb37RiOIFSXQkdO7-AW8zsv__CW0fKYuxdb_9JxL3FfzKP7tTFKuWnjb6NCRuWeymLKzurAj6YsXznx0Q03wUsCRhzuxuRxT0Qtwn9SyKhnxC_nPnqR3ubCQWV_i9U_Jh02CEufNtCgnYknT3Bzs7dnOvoapf-t4FTn1IRUVaSqNc0EUcB_g7FnRLoiHiDBt3FIByKBe-kF8ouWz8aQA2qaf0tt5HPQH8bLCgI_bh84lNUdDJhD8HuKn1VV-i7ANwDKJSvD0cNLwIGp5rs5KXPJVMDw64NS-pVDrpTVWrECCuYmzrCtCwpTKU3nYMVsuvY'
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
  
  export { getUserData };
  