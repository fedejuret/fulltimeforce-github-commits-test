'use strict'

const redirect = (url, newTab = true) => {

    if (newTab) {
        window.open(
            url,
            '_blank'
        );
    } else {
        window.location.href = url;
    }
}