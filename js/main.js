(_ => {
    let q_input = document.querySelectorAll('.question');
    let q_text = document.querySelectorAll('.response');

    // update scale value, with % unit if needed
    q_input.forEach((q, i) => {
        q.addEventListener('change', _ => {
            q_text[i].innerHTML = q.value + (q_text[i].classList.contains('notPercent') ? "" : "%");
        });
    });
})();