'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()

  async function create() {
    const req = await fetch(`http://127.0.0.1:8090/api/collections/notes/records`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        content
      })
    })
    setTitle('')
    setContent('')

    router.refresh()
  }

  return <form onSubmit={ create }>
    <h2>Create Note</h2>
    <input type="text" value={ title } onChange={ (e) => setTitle(e.target.value) } />
    <textarea value={ content } onChange={ (e) => setContent(e.target.value) } />
    <button type="submit">Save</button>
  </form>
}