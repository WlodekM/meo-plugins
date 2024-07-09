const style = document.createElement('style');

style.textContent = `
.avatar {
  border-radius: 7px;
  position: relative;
}
.avatar:active {
transform: translateY(0);
box-shadow: 0px 1px 5px #00000050;
}
.pfp::after {
  content: '';
  position: absolute;
  background-image: url("data:image/png;base64,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");
  width: 54px;
  height: 54px;
  background-position: center;
  background-size: 130%;
  user-select: none;
  pointer-events: none;
}
`;

document.head.appendChild(style);