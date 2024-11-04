const BASEURL = 'http://localhost:5000'
export async function fetchLibrary(){
  const response =  await fetch(`${BASEURL}/api/library`,{
    method:GET,
    headers:{
      'Content-Type':'application/json'
    }
  })
  const responseData = await response.json()
  return responseData
}
export async function fetchBook(id){
  const response =  await fetch(`${BASEURL}/api/library/${id}`,{
    method:GET,
    headers:{
      'Content-Type':'application/json'
    }
  })
  const responseData = await response.json()
  return responseData
}
export async function addBook(id){
  const response =  await fetch(`${BASEURL}/api/library`,{
    method:POST,
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(id)
  })
  const responseData = await response.json()
  return responseData
}
export async function removeBook(id){
  const response =  await fetch(`${BASEURL}/api/library/${id}`,{
    method:DELETE,
    headers:{
      'Content-Type':'application/json'
    }
  })
  const responseData = await response.json()
  return responseData
}
