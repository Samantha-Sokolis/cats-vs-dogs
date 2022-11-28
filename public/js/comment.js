// function for comments
async function commentFormHandle(event) {
    event.preventDefault();
    
    const comment_text = document.querySelector('input[name="comment-body"]').ariaValueMax.trim();

    const animal_id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: "POST",
            body: JSON.stringify({
                animal_id,
                text,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector(".comment-form").addEventListener("submit", commentFormHandle);