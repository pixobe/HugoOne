

function breadcrumbInit() {
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburger = document.getElementById("mobile-menu-open")
    const menuClose = document.getElementById("mobile-menu-close");

    if (hamburger && menuClose) {
        hamburger.addEventListener("click", function () {
            mobileMenu.classList.remove('hidden');
            menuClose.classList.remove('hidden')
            hamburger.classList.add("hidden")
        });

        menuClose.addEventListener("click", function () {
            mobileMenu.classList.add('hidden');
            menuClose.classList.add('hidden')
            hamburger.classList.remove("hidden")
        })
    }

}

/**
 * Submit forms
 */
async function submitForm(name, data) {

    try {
        // URL to which the POST request is sent
        const url = `https://pixobe.com/api/forms`;
        // Options for the fetch request
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-form-name': name,
            },
            body: JSON.stringify(data)
        };
        // Make the POST request
        return fetch(url, options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return;
            })
            .catch((error) => {
                console.error('Error in POST request:', error);
            });
    } catch (error) {
        console.error(error)
    }
}

window.onload = function () {
    //var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    breadcrumbInit();

    // register form submissions
    const submissionForms = document.querySelectorAll("[data-pixobe]");

    if (submissionForms) {
        submissionForms.forEach(formElement => {

            formElement.addEventListener("submit", async (e) => {
                e.preventDefault();
                const target = e.target;
                const dataset = target.dataset;
                const formData = new FormData(formElement);
                const data = {};

                formData.forEach((value, key) => {
                    data[key] = value;
                });

                const msg = formElement.querySelector("#msg");
                
                msg.innerText ="Submitting please wait...";
                formElement.append(msg);

                return submitForm(dataset.pixobe, { data })
                    .then(() => { })
                    .finally(() => {
                        msg.innerText="Thank you for subscribing!";
                    })

            })
        })
    }
}
