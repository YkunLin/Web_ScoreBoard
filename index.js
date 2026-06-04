
let score_l = 0
let score_r =0
let score_left_el = document.getElementById("score-left")
let score_right_el = document.getElementById("score-right")


function addOne(){
    score_l += 1
    score_left_el.textContent = score_l
}

function addTwo(){
    score_l += 2
    score_left_el.textContent = score_l
}

function addThree(){
    score_l += 3
    score_left_el.textContent = score_l
}

function addOne_r(){
    score_r += 1
    score_right_el.textContent = score_r
}

function addTwo_r(){
    score_r += 2
    score_right_el.textContent = score_r
}

function addThree_r(){
    score_r += 3
    score_right_el.textContent = score_r
}