import Link from "next/link"
import CreateNote from "./CreateNote";

async function getNotes(page: number = 1) {
  const req = await fetch(`http://127.0.0.1:8090/api/collections/notes/records?page=${ page }&perPage=10`, {
    cache: "no-cache"
  })
  const res = await req.json()
  return res?.items as any[]
}
export default async function NotesPage() {
  const notes = await getNotes()

  return <div>
    <h1>Notes</h1>
    <div>
      {
        notes?.map(note => <Note key={ note.id } note={ note } />)
      }
    </div>

    <CreateNote />
  </div>
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {}

  return <Link href={ `/notes/${ id }` }>
    <div>
      <h2>{ title }</h2>
      <h5>{ content }</h5>
      <p>{ created }</p>
    </div>
  </Link>
}
