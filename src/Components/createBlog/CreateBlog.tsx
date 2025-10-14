import React, { useRef } from "react"
import { Editor } from "@tinymce/tinymce-react"
import Card from "../UI/Container"
import Button from "../UI/Button"
import Container from "../UI/Container"

export default function App() {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      // @ts-ignore
      console.log(editorRef.current.getContent())
    }
  }
  return (
    <Container>
      <h1 className="text-center mb-5 text-emerald-400 text-4xl font-bold">
        Create Blog!
      </h1>
      <Editor
        apiKey="635e0ycpjcgptrtk9kkzm8g6qv6weu3v54388hzb83b8fj7o"
        // @ts-ignore
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p></p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help |" +
            "styles ",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:30px }",
        }}
      />
      <Button onClick={log}>Log editor content</Button>
    </Container>
  )
}
