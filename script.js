class ActiveSelector {
    constructor(list, activeClass) {
        this.list = list;
        this.activeClass = activeClass;
        this.currentActive = null;
        this.list.childNodes.forEach((item) => item.addEventListener('click', this.onClick.bind(this)));
    }

    onClick(e) {
        const clicked = e.currentTarget;

        if (this.currentActive) {
            this.currentActive.classList.remove(this.activeClass);
        }

        this.currentActive = clicked;
        clicked.classList.add(this.activeClass);
    }

    changeActiveClass(newClass) {
        this.activeClass = newClass;
    }

    // TODO
    observerCallback(mutationsList, observer) {

    }

    setObserver() {
        const config = {
            attributes: false,
            childList: true,
            subtree: false,
        }
        const observer = new MutationObserver(this.observerCallback);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.list').forEach(list => new ActiveSelector(list, 'active'));
});