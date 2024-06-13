import { useParams } from "@solidjs/router"

export default function PostNotFound() {
  const params = useParams();
  

  
  const entries = Object.entries(params)
  console.log('entries', entries)
  console.log('isArray', Array.isArray(entries))
  console.log('entries[0]', entries[0])
  console.log('entries.length', entries.length)
  
  return (
    <main class="component">
      <div class="file-name">routes/blog/[...post].jsx</div>
      <br />
      <div>params: {params.post}</div>
    </main>
  );
}