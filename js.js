const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: " 123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },

  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },

  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },

  {
    nombre: "Condominio Hall zona centro de Dion",
    src: "https://l2classic.club/forum/uploads/monthly_2019_09/Shot00078.jpg.505a3f2d355f7340d4eabcfa52197413.jpg",
    descripcion:
      "Esta hermosa sala situada en zona residencial de una prestigiosa villa",
    ubicacion: "123 Calle Principal, Dion, DI 35694",
    habitaciones: 1,
    baños: 1,
    costo: 2900,
    smoke: true,
    pets: true,
  },
];

const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: " 123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },

  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: " 789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },

  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },

  {
    nombre: "Villa de lujo",
    src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a8139a54-d195-442f-99fb-764b3a829b45/d1gssn6-3df47b25-b51f-49d1-acd7-741c3f4e0020.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E4MTM5YTU0LWQxOTUtNDQyZi05OWZiLTc2NGIzYTgyOWI0NVwvZDFnc3NuNi0zZGY0N2IyNS1iNTFmLTQ5ZDEtYWNkNy03NDFjM2Y0ZTAwMjAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jdvG1qfk-CUErnQ8cUsFxYbl5JFDgXRCr8mmHQ8HLKY",
    descripcion:
      "Lujosa villa con maravillosa vista y acceso a lugares de interés",
    ubicacion: "543 Villa del Cazador, Hunters City, HC 97431",
    habitaciones: 7,
    baños: 7,
    costo: 6790,
    smoke: true,
    pets: true,
  },
];

const cardSection = document.querySelector(".card");

cardSection.innerHTML = (
  <article className="tarjeta">
    <img alt="casa">${src}</img>
    <h5>${nombre}</h5>
    <p>${descripcion}</p>
    <p>${ubicacion}</p>
    <p>
      ${habitaciones} | ${baños}
    </p>
    <p>${smoke}</p>
    <p>${pets}</p>
  </article>
);
