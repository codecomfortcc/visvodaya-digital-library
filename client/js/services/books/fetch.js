const BASEURL = 'http://localhost:5000'
export async function fetchBooks(){
  const response =  await fetch(`${BASEURL}/api/books`,{
    method:GET,
    headers:{
      'Content-Type':'application/json'
    }
  })
  const responseData = await response.json()
  return responseData
}
export async function fetchBook(id){
  const response =  await fetch(`${BASEURL}/api/books/${id}`,{
    method:GET,
    headers:{
      'Content-Type':'application/json'
    }
  })
  const responseData = await response.json()
  return responseData
}
