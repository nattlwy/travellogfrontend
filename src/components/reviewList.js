import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import url from '../Constants';

const ReviewCard = (props) => (
    <div className="card">
      <img src={props.image} style={{ width: 300, height: 200 }} />
      <h5 className="card-header">{props.name}</h5>
      <div className="card-body">
        <h5 className="card-title">{props.country}</h5>
        <p className="card-text">{props.review}</p>
        <button
        onClick={() => {
          props.editReview(props.keyt);
        }}
      >
        Edit
      </button>
      {'  '}
      <button
        onClick={() => {
          props.deleteReview(props.keyt);
        }}
      >
        Delete
      </button>
      </div>
    </div>


  // <tr className="d-flex">
  //   <td className="col-10">{props.todo}</td>
  //   <td className="col-2" style={{ textAlign: 'right' }}>
  //     <button
  //       onClick={() => {
  //         props.editReview(props.keyt);
  //       }}
  //     >
  //       Edit
  //     </button>
  //     {'  '}
  //     <button
  //       onClick={() => {
  //         props.deleteReview(props.keyt);
  //       }}
  //     >
  //       delete
  //     </button>
  //   </td>
  // </tr>
);

export default function ReviewList() {
  const [reviews, setReviewList] = useState([]);
  useEffect(() => {
    axios
      .get(url()['url'] + '/travelreviews/')
      .then((response) => {
        setReviewList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteReview = (id) => {
    axios
      .delete(url()['url'] + '/travelreviews/delete/' + id)
      .then((response) => {
        console.log(response.data);
      });

    setReviewList(reviews.filter((el) => el._id !== id));
  };

  const editReview = (id) => {
    window.location = '/update/' + id;
  };

  return (
    <div>
      <Navbar />

      <h3>List of reviews</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Reviews</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => {
            return (
              <ReviewCard
                name={review.name}
                country={review.country}
                image={review.image}
                review={review.review}
                keyt={review._id}
                deleteReview={deleteReview}
                editReview={editReview}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
