export const fetchEndpoint = async (method="get", params="/", credentialsCookie="same-origin", authorizationToken="", reqBody="") => {
    const fetchResponse = await fetch(`http://localhost:4000${params}`, {
        method: method,
        credentials: credentialsCookie,
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${authorizationToken}`
        },
        body: JSON.stringify(reqBody)
    })
    return fetchResponse.json();
 
}