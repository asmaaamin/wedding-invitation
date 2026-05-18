(function () {
  const scene = document.getElementById("envelopeScene");
  const waxSeal = document.getElementById("waxSeal");
  const invitation = document.getElementById("invitation");

  if (!scene || !waxSeal || !invitation) return;

  let isOpen = false;

  function openEnvelope() {
    if (isOpen) return;
    isOpen = true;

    scene.classList.add("is-opening");
    waxSeal.disabled = true;

    scene.classList.add("is-open");
    invitation.setAttribute("aria-hidden", "false");

    setTimeout(function () {
      scene.classList.remove("is-opening");
    }, 600);
  }

  waxSeal.addEventListener("click", openEnvelope);

  waxSeal.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openEnvelope();
    }
  });
})();
