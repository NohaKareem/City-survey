(_ => {
    let q_input = document.querySelectorAll('.question');
    let q_text = document.querySelectorAll('.response');
    let london_loc = document.querySelectorAll('input[name="london_loc"');
    console.log(london_loc)

    // let preLockDown = document.querySelectorAll('.preLockDown');

    // update scale % value
    q_input.forEach((q, i) => {
        q.addEventListener('change', _ => {
            q_text[i].innerHTML = q.value + "%";
        });
    });

    // offer hover tooltip
    // preLockDown.forEach(_ => {
    //     console.log(preLockDown)
    // preLockDown.innerHTML = `<div class="preLockDown">pre-lockdown <span class="tooltip">druing 4 months to the COVID lockdown (around mid-March, 2020)</span></div>`
    //     // preLockDown.addEventListener('hover', _ => {

    //     // });
    // });

})();