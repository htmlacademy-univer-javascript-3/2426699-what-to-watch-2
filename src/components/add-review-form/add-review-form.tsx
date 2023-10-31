import React, { useState } from 'react';

const AddReviewForm = () => { 
  const [formData, setFormData] = useState({
    rating: 8, // Значение по умолчанию
    reviewText: '',
  });

  // Обработчик изменения значения рейтинга
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: parseInt(event.target.value),
    });
  };

  // Обработчик изменения текста отзыва
  const handleReviewTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      reviewText: event.target.value,
    });
  };

  // Обработчик отправки формы
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Отправленные данные:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="add-review__form">
      <div className="rating">
        
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={formData.reviewText}
          onChange={handleReviewTextChange}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddReviewForm;
