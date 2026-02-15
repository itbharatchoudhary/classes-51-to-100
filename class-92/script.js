const MouseFollower = document.querySelector(".Mouse-Follower");


let x = 0, y = 0;
document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;

    x = clientX;
    y = clientY;
});

function far() {
    MouseFollower.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(far)

}

far();