import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import url from "../Constants";

export default function CreateReview() {
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');
  const [comment, setComment] = useState('');
  const [image, setImage] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();
    const reviewvar = {
      name: username,
      country: country,
      review: comment,
      image: image
    };

    axios
      .post(url()['url'] + '/travelreviews/add', reviewvar)
      .then((res) => {
        window.location = '/';
      });
  };

  return (
    <div>
      <Navbar />

      <h3>Create New Review</h3>
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
          Image URL
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
            value="Create Travel Review Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
