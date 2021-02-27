let drumButtons = document.querySelectorAll(".drum").length;
console.log(drumButtons);
for (let i = 0; i < drumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", () => {
    alert("I Got Clicked");
  });
}

/// ALTERNATİF YOL BUL ^^^^ 