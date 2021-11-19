const MEDIA = { mobileMediaQuery: window.matchMedia("(max-width: 599px)") };

/**
 * Keeps track of the previous scroll position to determine if the user scrolls
 * up or down
 */
const SCROLL = (() => {
    let _previousPos = window.scrollY;

    const getPrevious = () => _previousPos;

    function setPrevious(newPos) {
        _previousPos = newPos;
    }

    return { setPrevious, getPrevious };
})();

/**
 * If the device has changed to tablet layout or wider, show the header
 */
function handleDeviceChange() {
    if (!MEDIA.mobileMediaQuery.matches) {
        showHeader();
    }
}

function isMobile() {
    const { mobileMediaQuery } = MEDIA;
    mobileMediaQuery.addListener(handleDeviceChange);
    return mobileMediaQuery.matches;
}

/**
 * Hides the mobile header to show the bottom half, showing only navigation
 * links and hiding social links
 */
function hideHeader() {
    const header = document.getElementsByTagName("header")[0];
    if (!header.classList.contains("header--closed")) {
        header.classList.add("header--closed");
    }
}

/**
 * Shows the entire header when scrolling up on mobile, or when switching to
 * tablet or desktop devices
 */
function showHeader() {
    const header = document.getElementsByTagName("header")[0];
    if (header.classList.contains("header--closed")) {
        header.classList.remove("header--closed");
    }
}

export function addMediaQuery() {
    const { mobileMediaQuery } = MEDIA;
    mobileMediaQuery.addListener(handleDeviceChange);
    handleDeviceChange(mobileMediaQuery);
}

/**
 * If on mobile and the user scrolls down, hide the bottom layer of the header
 */
export function changeHeader() {
    if (isMobile()) {
        let current = window.scrollY;

        if (current > SCROLL.getPrevious()) {
            hideHeader();
        } else {
            showHeader();
        }

        SCROLL.setPrevious(current);
    } else {
        showHeader();
    }
}
