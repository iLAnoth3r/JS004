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

const cardSection = document.querySelector(".row");
let propVenta = "";
for (let cardSection of propiedades_venta) {
  propVenta += `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img alt="casa" class="card-img-top" src=" ${cardSection.src}"/>
        <div class="card-body">
          <h5 class="card-title"> ${cardSection.nombre}</h5>
          <p class="card-text"> ${cardSection.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${cardSection.ubicacion}</p>
          <p><i class="fas fa-bed"></i>
            ${
              cardSection.habitaciones
            } Habitaciones | <i class="fas fa-bath"></i> ${
    cardSection.baños
  } Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${cardSection.costo}</p>
          ${
            cardSection.smoke
              ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
              : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
          }
           
           ${
             cardSection.pets
               ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
               : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
           } 
           
        </div>
      </div>
    </div>
`;
}

cardSection.innerHTML = propVenta;
