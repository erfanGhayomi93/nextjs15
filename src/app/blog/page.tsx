 


export default async function Page() {
 
  return (
    <ul>
      {[1,2,3,4,5,6].map((post) => (
        <div key={post}>post</div>
      ))}
    </ul>
  )
}