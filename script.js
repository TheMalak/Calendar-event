const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".enable-modal");
const closeButton = document.querySelector(".close-modal");
const modalImage = document.querySelector(".modal-right img"); // Seleccionamos la imagen dentro del modal
let isOpened = false;

function openModal(title, description, imageUrl) {
    modal.classList.add("is-open");
    body.style.overflow = "hidden";
    document.getElementById("event-title").innerHTML = title;
    document.getElementById("event-description").innerHTML = description;
    modalImage.src = imageUrl;
}

const closeModal = () => {
    modal.classList.remove("is-open");
    body.style.overflow = "initial";
};

// window.addEventListener("scroll", () => {
//   if (window.scrollY > window.innerHeight / 3 && !isOpened) {
//     isOpened = true;
//     openModal(title, description, imageUrl);
//   }
// });

// modalButton.addEventListener("click", () => openModal(title, description, imageUrl));
closeButton.addEventListener("click", closeModal);

document.onkeydown = evt => {
    evt = evt || window.event;
    if (evt.keyCode === 27) closeModal();
};

function setCorrectCalendarTitle() {
    var calendarTitle = document.querySelector('.fc-toolbar-title');
    if (calendarTitle) {
        calendarTitle.textContent = calendarTitle.textContent.replace(' de ', ', ');
        calendarTitle.textContent = calendarTitle.textContent.toUpperCase();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        theme: 'themeSystem',
        locale: 'es',
        todayButton: false,
        events: [
            {
                title: "Día Mundial Contra el Cáncer",
                start: "2025-02-04",
                extendedProps: {
                    description: "El 4 de febrero se conmemora el Día Mundial contra el Cáncer, una fecha para crear conciencia, apoyar a quienes luchan contra la enfermedad y fomentar la prevención. Pequeñas acciones como llevar una vida saludable, realizar chequeos médicos y apoyar la investigación pueden marcar la diferencia. Juntos, podemos generar un impacto y avanzar hacia un futuro con menos casos y mejores tratamientos. Hoy y siempre, sumemos esfuerzos para combatir el cáncer con información, prevención y solidaridad. 💪🎗️ #DíaMundialContraElCáncer",
                    imageUrl: "./assets/imageEvents/02-04.png"
                }
            },
            {
                title: "Día Mundial de la pizza",
                start: "2025-02-09",
                extendedProps: {
                    description: "El 9 de febrero se celebra el Día Mundial de la Pizza, un platillo icónico que ha conquistado el mundo con su versatilidad y sabor. Desde la clásica margarita hasta las más creativas combinaciones, la pizza es sinónimo de felicidad y buena compañía. Ya sea con amigos, familia o en solitario, este es el día perfecto para disfrutar de tu versión favorita, probar nuevos sabores y rendir homenaje a esta deliciosa creación. ¡Celebra con una rebanada caliente y crujiente, y deja que cada bocado sea un tributo a este manjar universal! 🍕🎉",
                    imageUrl: "./assets/imageEvents/02-09.jpeg"
                }
            },
            {
                title: "San Valentín",
                start: "2025-02-14",
                extendedProps: {
                    description: "El 14 de febrero celebramos San Valentín, el día del amor y la amistad. Una ocasión especial para demostrar cariño a quienes más queremos, ya sea con un detalle, unas palabras sinceras o simplemente compartiendo momentos inolvidables. No importa cómo lo celebres, lo esencial es valorar y fortalecer los lazos que nos unen. ¡Haz de este día una oportunidad para expresar amor en todas sus formas y contagiar felicidad! ❤️🌹 #FelizSanValentín",
                    imageUrl: "./assets/imageEvents/02-14.png"
                }
            },
            {
                title: "Día internacional del guía del turismo",
                start: "2025-02-21",
                extendedProps: {
                    description: "El 21 de febrero celebramos el Día Internacional del Guía de Turismo, homenajeando a quienes con pasión y conocimiento nos ayudan a descubrir la historia, cultura y belleza de cada destino. Su labor es clave para hacer de cada viaje una experiencia enriquecedora e inolvidable. ¡Agradezcamos a estos expertos que convierten cada recorrido en una aventura llena de aprendizaje y emoción! 🌍✨ #DíaDelGuíaDeTurismo",
                    imageUrl: "./assets/imageEvents/02-21.png"
                }
            },
        ],
        eventClick: function (info) {
            info.jsEvent.preventDefault();

            if (info.event.title) {
                openModal(info.event.title, info.event.extendedProps.description, info.event.extendedProps.imageUrl);
            }
        }
    });
    calendar.render();
    if(calendar) {
        document.querySelectorAll('.fc-event-title-container').forEach(element => {
            const div = document.createElement('div');
            div.className = 'mobile-title d-none';
        
            const img = document.createElement('img');
            img.src = './assets/save.svg';
            img.alt = 'Save Icon';
        
            div.appendChild(img);
            element.appendChild(div);
        });
    }
    // setCorrectCalendarTitle();
});