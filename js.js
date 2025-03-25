const step1 = document.querySelector(".stp1");
const step2 = document.querySelector(".stp2");
const step3 = document.querySelector(".stp3");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const err = step1.querySelector(".err");
const next1 = step1.querySelector(".continue");
const next2 = step2.querySelector(".continue");
const next3 = step3.querySelector(".continue");
const topic = step2.querySelectorAll(".topic");
step2.classList.add("hidden");
step3.classList.add("hidden");
next1.addEventListener("click", () => {
  console.log("clik");
});
let obj = { name: "", email: "", topics: [] };
let eroor = "";
err.style.color = "red";
const check = () => {
  if (email.value.trim().includes("@") && name.value.trim().length >= 3) {
    obj.email = email.value;
    obj.name = name.value;

    return true;
  } else {
    eroor = "please cheack that your name and email are correct";

    return false;
  }
};

const showNxtStep = () => {
  if (check() === true) {
    step1.classList.add("hidden");
    step2.classList.remove("hidden");
    console.log(obj);
  } else {
    err.textContent = eroor;
  }
};
next1.addEventListener("click", (e) => {
  e.preventDefault();
  showNxtStep();
});

const checkExesiste = (newTopic) => {
  if (!obj.topics.includes(newTopic)) {
    obj.topics.push(newTopic);
  }
};
const ul = document.querySelector("ul");
const nm = document.querySelector(".nm");
const eml = document.querySelector(".eml");
topic.forEach((topc) => {
  topc.addEventListener("click", (e) => {
    e.preventDefault;
    topc.style.background = "#5425AF";
    checkExesiste(topc.textContent);
    console.log(obj);
  });
});

const showRst = () => {
  step2.classList.add("hidden");
  step3.classList.remove("hidden");
  nm.textContent = obj.name;
  eml.textContent = obj.email;
  const { topics } = obj;
  topics.forEach((topi) => {
    const li = document.createElement("li");
    li.textContent = topi;
    ul.append(li);
  });
};

next2.addEventListener("click", showRst);
next3.addEventListener("click", () => {
  const ok = confirm("Done. Registered!");

  if (ok) {
    obj = {
      name: "",
      email: "",
      topics: [],
    };
    document.querySelectorAll("input").forEach((inp) => {
      inp.value = "";
    });
    topic.forEach((topc) => {
      topc.style.background = "#212936";
    });

    step3.classList.add("hidden");
    step1.classList.remove("hidden");
    ul.innerHTML = ``;
  } else {
    console.log("The user cancel ");
  }
});
