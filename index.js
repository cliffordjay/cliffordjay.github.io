const btnLike1 = document.getElementById("btnLike1")
const count1 = document.getElementById("count1")
const btnDisLike1 = document.getElementById("btnDisLike1")
const countDisLike1 = document.getElementById("countDisLike1")

function countLike1() {
  let likeCounts = parseInt(count1.value) + 1;
  count1.textContent = likeCounts.toString();
}

btnLike1.addEventListener("click", countLike1)

function countdisLike1() {
  let likeCounts = parseInt(countDisLike1.value) + 1;
  countDisLike1.textContent = likeCounts.toString();
}

btnDisLike1.addEventListener("click", countdisLike1)


const btnDisLike2 = document.getElementById("btnDisLike2")
const countDisLike2 = document.getElementById("countDisLike2")
const btnLike2 = document.getElementById("btnLike2")
const count2 = document.getElementById("count2")

function countLike2() {
  let likeCounts = parseInt(count2.value) + 1;
  count2.textContent = likeCounts.toString();
}

btnLike2.addEventListener("click", countLike2)


function countdisLike2() {
  let likeCounts = parseInt(countDisLike2.value) + 1;
  countDisLike2.textContent = likeCounts.toString();
}


btnDisLike2.addEventListener("click", countdisLike2)


const submit = document.getElementById("submit");
const comment = document.getElementById("comment");
const commentbox = document.getElementById("commentbox");

function submitcomment(){
commentbox.textContent += comment.value.toString() +"\n";

}
submit.addEventListener("click", submitcomment);
