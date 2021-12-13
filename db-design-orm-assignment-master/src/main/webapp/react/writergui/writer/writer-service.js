const WRITER_URL = "http://localhost:8080/api/writer"

export const findAllWriters = () =>
  fetch(WRITER_URL)
  .then(response => response.json())

export const findWriterById = (id) =>
    fetch(`${WRITER_URL}/${id}`)
    .then(response => response.json())

export const deleteWriter = (id) =>
    fetch(`${WRITER_URL}/${id}`, {
      method: "DELETE"
    })

export const createWriter = (writer) =>
    fetch(WRITER_URL, {
      method: 'POST',
      body: JSON.stringify(writer),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const updateWriter = (id, writer) =>
    fetch(`${WRITER_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(writer),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export default{
  findAllWriters,
  findWriterById,
  deleteWriter,
  createWriter,
  updateWriter
}
