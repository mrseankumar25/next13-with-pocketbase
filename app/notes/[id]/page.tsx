async function getNote(noteId: string) {
  const req = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${ noteId }`, {
    next: {
      revalidate: 10
    }
  })
  const res = await req.json()
  return res
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id)

  return <div>
  <h2>{ note.title }</h2>
  <h5>{ note.content }</h5>
  <p>{ note.created }</p>
</div>
}