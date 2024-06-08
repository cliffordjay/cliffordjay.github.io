const btnLike1 = document.getElementById("btnLike1")
const count1 = document.getElementById("count1")

function countLike1() {
  let likeCounts = parseInt(count1.value) + 1
  count1.textContent = likeCounts.toString()
}

btnLike1.addEventListener("click", countLike1)

const btnDisLike1 = document.getElementById("btnDisLike1")
const countDisLike1 = document.getElementById("countDisLike1")

function countDisLike1() {
  let likeCounts = parseInt(count1.value) + 1
  count1.textContent = likeCounts.toString()
}

btnLike1.addEventListener("click", countDisLike1)


const btnLike2 = document.getElementById("btnLike2")
const count2 = document.getElementById("count2")

function countLike2() {
  let likeCounts = parseInt(count2
                            .value) + 1
  count2.textContent = likeCounts.toString()
}

btnLike2.addEventListener("click", countLike2)

const btnDisLike2 = document.getElementById("btnDisLike2")
const countDisLike2 = document.getElementById("countDisLike2")

function countDisLike2() {
  let likeCounts = parseInt(count2
                            .value) + 1
  count2.textContent = likeCounts.toString()
}

btnLike2.addEventListener("click", countDisLike2)

const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const comment box = document.getElementById("commentbox")

function submitComment(){
  commentbox.textcontent += comment.value.string()+ "\n"
}
submit.addEventListener("Click", submitComment)
