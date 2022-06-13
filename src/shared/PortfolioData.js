//Cards for projects
import coinrek_card_category from 'assets/images/coinrek_card_category.jpg';
import van_card_category from 'assets/images/van_card_category.jpg';
import menu_card_category from 'assets/images/menu_card_category.jpg';

//Cards for diplomas
import google_card from 'assets/images/google_card.png'
import hong_kong_react_card from 'assets/images/hong_kong_react_card.png'
import hong_kong_angular_card from 'assets/images/hong_kong_angular_card.png'
import digital_campus_flutter_card from 'assets/images/digital_campus_flutter_card.png'
import iteso_enginner_card from 'assets/images/iteso_enginner_card.png'

export const PortfolioData = {
    title: {
        fr: "Pourquoi moi ?",
        es: "¿Porque yo?",
        en: "Why me?",
    },
    subtitle: {
        fr: "Derniers projets",
        es: "Ultimos proyectos",
        en: "Last projects",
    },
    description: {
        fr: <>{'Développeur UX et Ingénieur Électronique, ma passion pour l’Internet des objets m’a fait m’orienter vers le développement d’applications et le design UX/UI, depuis sa conception, son développement et le lancement du produit dans la vie réelle. Originaire du Mexique, la terre de la Tequila, je vis maintenant vivant au bord de la mer Méditerranée en France et je suis à la recherche de nouveaux défis professionnels.'}<br/><br/><div className='md:hidden xl:flex'>{'J’ai développé des applications et des sites Web qui peuvent vous intéresser, n’hésitez pas à jeter un oeil à mes projets et n’hésitez pas à me contacter si vous avez des questions.'}</div></>,
        es: <>{'Ingeniero Electronico, con una pasion por el Internet de las cosas, me ha inclinado al desarrollo de Apps y el diseño UX/UI, desde su concepcion, diseño, desarrollo y el lanzamiento del producto en la vida real. Originario de Mexico, la tierra del Tequila y ahora viviendo en el Mar Mediterraneo de Francia, estoy en busca nuevos retos en la vida profesional.'}<br/><br/><div className='md:hidden xl:flex'>{'He desarrollado Apps y sitios web que te pueden interesar, no dudes en dar un vistazo a mis proyectos que sin duda alguna me he esforzado para inspirar a alguien mas, contactame si tienes alguna duda.'}</div></>,
        en: <>{'Electronic Engineer, with a passion for the Internet of Things, I have been inclined to the development of Apps and UX/UI design, from its conception, design, development and launch of the product in real life. Originally from Mexico, the land of Tequila and now living in the Mediterranean Sea of France, I am looking for new challenges in professional life.'}<br/><br/><div className='md:hidden xl:flex'>{'I have developed Apps and websites that may interest you, do not hesitate to take a look at my projects that I have undoubtedly tried to inspire someone else, contact me if you have any questions.'}</div></>,
    },
    title_dev: {
        fr: "développeur",
        en: "developer",
        es: "desarrollador"
    },
    button: {
        see_cv: {
            fr: "Regarder CV",
            es: "Ver CV",
            en: "Check my CV",
        },
        cv: {
            fr: "Téléchargez CV",
            es: "Descarga CV",
            en: "Download CV",
        },
        info: {
            fr: "Plus d'info",
            es: "Mas info",
            en: "More info",
        },
        check:{
            fr: "Regarder le projet",
            es: "Ver el proyecto",
            en: "See the project",
        }
    },
    job: {
        fr: <>{'Ingénieur Électronique'} <br/>et<br/> {'Développeur UX'}</>,
        es: <>{'Ingeniero Electronico'} <br/>y<br/> {'Desarrollador UX'}</>,
        en: <>{'Electronic Engineer'} <br/>&<br/> {'UX Developer'}</>,
    },
    category: {
        title: {
            projects: {
                fr: "PROJETS",
                es: "PROYECTOS",
                en: "PROJECTS",
            },
            diplomas: {
                fr: "DIPLÔMES",
                es: "DIPLOMAS",
                en: "DIPLOMAS",
            },
        },
        projects:[
            {
                title:{
                    fr: "Menu en ligne pour les restaurants",
                    es: "Menu en linea para restaurantes",
                    en: "Menu online for the restaurants",
                },
                resume:{
                    fr: "Site développé avec Javascript et React, Material UI est utilisé pour son interface en plus de Figma pour son design.",
                    es: "Sitio desarrollado con Javascript y la libreria React, utilizando Material UI para una interfaz amable con el usuario",
                    en: "Site developed with Javascript and the React library, Material UI is used for its interface and Figma for its graphic design",
                },
                description:{
                    fr: "Un menu en ligne pour que les clients voient les produits offerts par le restaurant. Les utilisateurs peuvent sélectionner les produits et les enregistrer dans un panier afin qu’ils puissent les montrer au serveur.",
                    es: "Un menu en linea desarrollado con la finalidad de que los clientes puedan ver los productos que ofrece el restaurante, el usuaio puede seleccionar los productos y guardarlos en un carrito para que despues pueda mostrarlos al mesero y pueda ver su orden.",
                    en: "An online menu that the customers can see the products offered by the restaurant, the users can select the products and save them in a cart so that the users can show them to the waiter and he can see their order",
                },
                image: menu_card_category
            },
            {
                title:{
                    fr: "Compteur de pièces de monnaie",
                    es: "Contador para monedero electronico",
                    en: "Counter for Coin Aceptor",
                },
                resume:{
                    fr: "Le projet enregistre la date, l’heure et le lieu des pièces et les affiche dans une application sur Android",
                    es: "El proyecto registra la fecha, hora y lugar de las monedas y mostradas en una App para la plataforma Android",
                    en: "The project records the date, time and place of the coins and displays them in an Android application",
                },
                description:{
                    fr: "L’application a été développée avec le langage Java pour Android, le circuit avec votre logiciel avec le langage C ont également été développés par moi-même, les deux produits sont connectés à une base de données dans Firebase pour échanger des informations et l’App a besoin d’une auto-identification soit par Facebook ou Google pour être utilisable.",
                    es: "La app fue desarrollada con el lenguage Java para Android, el circuito junto a su software con lenguaje en C fueron tambien desarrollados por mi, los dos productos se conectan a una base de datos en Firebase para intercambiar la informacion y la App se necesita una autentificacion ya sea por medio de Facebook o Google para poder ser uso se ella.",
                    en: "The app was developed with the Java language for Android, the circuit along with its software with language in C were also developed by myself, the two products are connected to a database in Firebase to exchange the information and the App need an authentication via Facebook or Google to be able to use it.",
                },
                image: coinrek_card_category
            },
            {
                title:{
                    fr: "Site Web pour réserver une Van",
                    es: "Sitio Web para reservar una Van",
                    en: "Website to book a Van",
                },
                resume:{
                    fr: "Le site Web créé avec React et MongoDB vous invite à vouloir réserver le voyage de vos rêves.",
                    es: "El sitio web creado con React y MongoDB, te invita con el diseño querer reservar el viaje de tus sueños.",
                    en: "The website created with React and MongoDB, invites you with the design to want to book the trip of your dreams",
                },
                description:{
                    fr: "Créé avec Javascript avec React et base de données avec MongoDB, le site a pour but d’attirer l’attention du client. Une grande attention a été portée à tous les détails afin que le client ait le désir de réserver le Van.",
                    es: "Pagina creada con Javascript con React y base de datos en MongoDB, el sitio fue creado con la intension de llamar la atencion del cliente en cada detalle de la pagina y de esta forma, el cliente tenga el deseo de reservar la Van.",
                    en: "Page created with Javascript with React and database in MongoDB, the site was created with the goal of calling the attention of the customer in every detail of the page and in this way, the client has the desire to book the Van.",
                },
                image: van_card_category
            },
        ],
        diplomas:[
            {
                title: {
                    fr: "Certificat de Conception UX",
                    es: "Certificado de Diseño UX",
                    en: "UX Design Certificate",
                },
                university: {
                    fr: "Google",
                    es: "Google",
                    en: "Google",
                },
                country: {
                    fr: "États-Unis",
                    es: "Estados Unidos",
                    en: "United States",
                },
                image: google_card
            },
            {
                title: {
                    fr: "Développement Full-Stack Web avec React",
                    es: "Programacion Web Full-Stack con React",
                    en: "Full-Stack Web Development with React",
                },
                university: {
                    fr: "The Hong Kong University",
                    es: "The Hong Kong University",
                    en: "The Hong Kong University",
                },
                country: {
                    fr: "Chine",
                    es: "China",
                    en: "China",
                },
                image: hong_kong_react_card
            },
            {
                title: {
                    fr: "Développement Full-Stack Web avec Angular",
                    es: "Programacion Web Full-Stack con Angular",
                    en: "Full-Stack Web Development with Angular",
                },
                university: {
                    fr: "The Hong Kong University",
                    es: "The Hong Kong University",
                    en: "The Hong Kong University",
                },
                country: {
                    fr: "Chine",
                    es: "China",
                    en: "China",
                },
                image: hong_kong_angular_card
            },
            {
                title: {
                    fr: "Graduate Développeur Flutter",
                    es: "Desarrollador Flutter",
                    en: "Flutter Development",
                },
                university: {
                    fr: "Digital Campus",
                    es: "Digital Campus",
                    en: "Digital Campus",
                },
                country: {
                    fr: "France",
                    es: "Francia",
                    en: "France",
                },
                image: digital_campus_flutter_card

            },
            {
                title: {
                    fr: "Ingénieur Électronique",
                    es: "Ingeniero en Electronica",
                    en: "Electronic Engineer",
                },
                university: {
                    fr: "ITESO",
                    es: "ITESO",
                    en: "ITESO",
                },
                country: {
                    fr: "Mexique",
                    es: "Mexico",
                    en: "Mexico",
                },
                image: iteso_enginner_card
            }
        ]
    }
}