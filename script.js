(function () {
  const scene = document.getElementById("envelopeScene");
  const waxSeal = document.getElementById("waxSeal");
  const invitation = document.getElementById("invitation");
  const topHinge = document.getElementById("topHinge");

  if (!scene || !waxSeal || !invitation) return;

  let isOpen = false;

  function openEnvelope() {
    if (isOpen) return;
    isOpen = true;

    waxSeal.disabled = true;
    scene.classList.add("is-open");
    invitation.setAttribute("aria-hidden", "false");

    if (topHinge) {
      topHinge.setAttribute("aria-hidden", "false");
    }
  }

  waxSeal.addEventListener("click", openEnvelope);

  waxSeal.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openEnvelope();
    }
  });
})();
