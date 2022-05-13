import React, {useState} from 'react'

const NewDocForm = ({addNewDoc}) => {
    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState('')
    const [stream, setStream] = useState('')
    const [image, setImage] = useState('')
    const [trailer, setTrailer] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/natureDocs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  title: title,
                  comment: comment,
                  rating: rating,
                  where: stream,
                  image: image,
                  embedID: trailer
        })
    })
    .then(r => r.json())
    .then(data => addNewDoc(data))

    setTitle('')
    setComment('')
    setRating('')
    setStream('')
    setImage('')
    setTrailer('')
}



    return (
    <div className="ui segment">
    <form id="form" onSubmit={handleSubmit} className="ui form">
      <div className="inline fields">
        <input
          type="text"
          name="title"
          placeholder="Documentary Title"
          value={title} onChange={(e) => setTitle(e.target.value)}
        /><>
        </>
        <input
          type="text"
          name="comment"
          placeholder="Description"
          value={comment} onChange={(e) => setComment(e.target.value)}
        /><>
        </>
        <input
          type="text"
          name="rating"
          placeholder="Rating"
          value={rating} onChange={(e) => setRating(e.target.value)}
        /><>
        </>
        <input
          type="text"
          name="where"
          placeholder="Streaming Service"
          value={stream} onChange={(e) => setStream(e.target.value)}
        /><>
        </>
         <input
          type="text"
          name="image"
          placeholder="ImageURL"
          value={image} onChange={(e) => setImage(e.target.value)}
        />
         <input
          type="text"
          name="embedID"
          placeholder="Trailer URL"
          value={trailer} onChange={(e) => setTrailer(e.target.value)}
        />
      </div>
      <></>
      <button className="ui button" type="submit">
        Add To Library
      </button>
    </form>
  </div>
);
}

export default NewDocForm