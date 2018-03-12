import React from 'react';
import PropTypes from 'prop-types'

const Result = (props) => {
    return (
        <div className="result">
            You are <strong>{props.quizResult}</strong>!
        </div>
    );
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;