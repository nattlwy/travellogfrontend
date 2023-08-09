import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Navbar from './navbar';
import url from "../Constants";

export default function EditReview() {

  const { id } = useParams();
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');
  const [comment, setComment] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    axios
      .get(url()['url'] + `/travelreviews/${id}`)
      .then((response) => {
        setUsername(response.data.name);
        setCountry(response.data.country);
        setComment(response.data.review);
        setImage(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


  const onSubmit = (e) => {
    e.preventDefault();
    const reviewvar = {
      name: username,
      country: country,
      review: comment,
      image: image
    };

    axios
      .post(url()['url'] + `/travelreviews/update/${id}`, reviewvar)
      .then((res) => {
        window.location = '/';
      });
  };

  return (
    <div>
      <Navbar />

      <h3>Edit New Review</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          Your name:
          <input
            type="text"
            required
            className="form-control"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          Country visited:
        <input
            type="text"
            required
            className="form-control"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          Your comment:
        <input
            type="text"
            required
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          Image URL:
        <input
            type="text"
            required
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <br></br>

        <div className="form-group">
          <input
            type="submit"
            value="Edit Travel Review Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
