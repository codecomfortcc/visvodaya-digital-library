const BASEURL= 'http://localhost:5000'

export async function loginFetch(data){
  console.log(data)
  const response =  await fetch(`${BASEURL}/api/auth/login`,{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
  })
  console.log(response)
  const responseData = await response.json()
  console.log(responseData)
  return responseData
}
export async function signupFetch(data){
  const response =  await fetch(`${BASEURL}/api/auth/signup`,{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
  })
  const responseData = await response.json()
  return responseData
}
export async function logoutFetch(){
  const response =  await fetch(`${BASEURL}/api/auth/logout`,{
    method:"GET",
    headers:{
      'Content-Type':'application/json'
    }
  })
  const responseData = await response.json()
  return responseData
}
