const BASEURL = 'http://localhost:5000'
// using uploadthing to upload pdf files 
export async function addBook(file){
  const response =  await fetch(`${BASEURL}/api/upload`,{
    method:'POST',
    body: file
  })
  const responseData = await response.json()
  return responseData
}
export async function deleteBook(id){
  const response =  await fetch(`${BASEURL}/api/upload/${id}`,{
    method:'DELETE',
    headers:{
      'Content-Type':'application/json'
    }
  })
  const responseData = await response.json()
  return responseData
}

