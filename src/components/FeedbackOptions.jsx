import React from 'react';

function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <>
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          onClick={onLeaveFeedback}
          data-action={option}
        >
          {option}
        </button>
      ))}
    </>
  );
}
export default FeedbackOptions;
