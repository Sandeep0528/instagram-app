document.addEventListener("DOMContentLoaded", function () {
    const likeButton = document.querySelector('.like-button');
    const commentInput = document.querySelector('.comment-input');
    const submitComment = document.querySelector('.submit-comment');

    likeButton.addEventListener('click', function () {
        alert('You liked this photo!');
    });

    submitComment.addEventListener('click', function () {
        const comment = commentInput.value;
        if (comment) {
            alert('Comment submitted: ' + comment);
            commentInput.value = ''; // Clear the input
        } else {
            alert('Please enter a comment before submitting.');
        }
    });

    // Allow pressing Enter to submit comment
    commentInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            submitComment.click();
        }
    });
});

