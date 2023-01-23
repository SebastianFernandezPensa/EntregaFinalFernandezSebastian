
const stockProductos = 
  [
    {
      "id": 1,
      "nombre": "SYNTHA-6 ISOLATE 2,01 LBS",
      "cantidad": 1,
      "desc": "Isolate Protein Matrix (Whey Protein Isolate - Milk Protein Isolate)",
      "precio": 27000,
      "img": "img/Crash.jpg"
    },
    {
      "id": 2,
      "nombre": "PLATINUM WHEY PROTEIN 2 LBS DOYPACK ",
      "cantidad": 1,
      "desc": "Suplemento Dietario a Base de Ultra Concentrado de Proteínas de Suero Lácteo ",
      "precio": 6000,
      "img": "img/mortal.jpg"
    },
    {
      "id": 3,
      "nombre": "ZMA 90 CAPSULES - NATURAL NON-HORMONAL FORMULA",
      "cantidad": 1,
      "desc": "THE REAL ZMA I NATURAL NON-HORMONAL FORMULA",
      "precio": 3400,
      "img": "img/pacman.jpg"
    },
    {
      "id": 4,
      "nombre": "THE REAL ZMA I NATURAL NON-HORMONAL FORMULA",
      "cantidad": 1,
      "desc": "uplemento Dietario a Base de 100% L-Arginina",
      "precio": 2700,
      "img": "img/dragonball.jpg"
    },
    {
      "id": 5,
      "nombr": "MTOR BCAA 270 GRS - STRAWBERRY LIME",
      "cantidad": 1,
      "desc": "Complejo de Aminoácidos MTOR RATIO 8.1.1",
      "precio": 4500,
      "img": "img/naruto.jpg"
    },
    {
      "id": 6,
      "nombre": "CREATINE MONOHYDRATE ULTRAMICRONIZED (CREAPURE) 150 GRS - UNFLAVOR",
      "cantidad": 1,
      "desc": "Creatina Monohidrato Micronizada 5 Grs.",
      "precio": 8500,
      "img": "img/shingeki.jpg"
    },
    {
      "id": 7,
      "nombre": "PUMP 3D RIPPED 315 GRS - LEMONADE",
      "cantidad": 1,
      "desc": "No compres esto por tu bien",
      "precio": 5800,
      "img": "img/league.jpg"
    },
    {
      "id": 8,
      "nombre": "JUST PLANT PROTEIN",
      "cantidad": 1,
      "desc": " Incrementar la masa muscular magra / Minimizar tiempos de recuperación.",
      "precio": 6000,
      "img": "img/callduty.jpg"
    },
    {
      "id": 9,
      "nombre": "JUST CARBS",
      "cantidad": 1,
      "desc": "Suplemento Dietario a Base de Maltodextrina 100%",
      "precio": 1400,
      "img": "img/fifa.jpg"
    },
    {
      "id": 10,
      "nombre": "ISO WHEY RIPPED",
      "cantidad": 1,
      "desc": "Suplemento Dietario a Base de Aislado - Hidrolizado - Ultraconcentrado de Proteínas de Suero Lácteo",
      "precio": 9700,
      "img": "img/fornite.jpg"
    }
  ]
const enOferta = [
    {"id": 1,
    "nombre": "SYNTHA-6 ISOLATE 2,01 LBS",
    "cantidad": 1,
    "desc": "Isolate Protein Matrix (Whey Protein Isolate - Milk Protein Isolate)",
    "precio": 27000,
    "img": "img/Crash.jpg"},
    {"id": 1,
    "nombre": "SYNTHA-6 ISOLATE 2,01 LBS",
    "cantidad": 1,
    "desc": "Isolate Protein Matrix (Whey Protein Isolate - Milk Protein Isolate)",
    "precio": 27000,
    "img": "img/Crash.jpg"},
    {"id": 1,
    "nombre": "SYNTHA-6 ISOLATE 2,01 LBS",
    "cantidad": 1,
    "desc": "Isolate Protein Matrix (Whey Protein Isolate - Milk Protein Isolate)",
    "precio": 27000,
    "img": "img/Crash.jpg"},
    {"id": 1,
    "nombre": "SYNTHA-6 ISOLATE 2,01 LBS",
    "cantidad": 1,
    "desc": "Isolate Protein Matrix (Whey Protein Isolate - Milk Protein Isolate)",
    "precio": 27000,
    "img": "img/Crash.jpg"},
    
  ]


  let carrito = [];


  const oferta = document.querySelector("#contenedorOferta")
  const contenedor = document.querySelector("#contenedor");
  const carritoContenedor = document.querySelector("#carritoContenedor");
  const vaciarCarrito = document.querySelector("#vaciarCarrito");
  const precioTotal = document.querySelector("#precioTotal");
  const activarFuncion = document.querySelector("#activarFuncion");
  const procesarCompra = document.querySelector("#procesarCompra");
  const totalProceso = document.querySelector("#totalProceso");
  const formulario = document.querySelector('#procesar-pago')
  
  if (activarFuncion) {
    activarFuncion.addEventListener("click", procesarPedido);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    mostrarCarrito();
    document.querySelector("#activarFuncion").click(procesarPedido);
  });
  if(formulario){
    formulario.addEventListener('submit', enviarCompra)
  }
  
  
  if (vaciarCarrito) {
    vaciarCarrito.addEventListener("click", () => {
      carrito.length = [];
      mostrarCarrito();
    });
  }
  
  if (procesarCompra) {
    procesarCompra.addEventListener("click", () => {
      if (carrito.length === 0) {
        Swal.fire({
          title: "¡Tu carrito está vacio!",
          text: "Compra algo para continuar con la compra",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      } else {
        location.href = "compra.html";
      }
    });
  }
  
  stockProductos.forEach((prod) => {
    const { id, nombre, precio, desc, img, cantidad } = prod;
    if (contenedor) {
      contenedor.innerHTML += `
      <div class="card mt-3" style="width: 18rem;">
      <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Precio: ${precio}</p>
        <p class="card-text">Descripcion: ${desc}</p>
        <p class="card-text">Cantidad: ${cantidad}</p>
        <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
      </div>
    </div>
      `;
    }
  });


  
  const agregarProducto = (id) => {
    const existe = carrito.some(prod => prod.id === id)
  
    if(existe){
      const prod = carrito.map(prod => {
        if(prod.id === id){
          prod.cantidad++
        }
      })
    } else {
      const item = stockProductos.find((prod) => prod.id === id)
      carrito.push(item)
    }
    mostrarCarrito()
  
  };
  
  const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body");
    if (modalBody) {
      modalBody.innerHTML = "";
      carrito.forEach((prod) => {
        const { id, nombre, precio, desc, img, cantidad } = prod;
        console.log(modalBody);
        modalBody.innerHTML += `
        <div class="modal-contenedor">
          <div>
          <img class="img-fluid img-carrito" src="${img}"/>
          </div>
          <div>
          <p>Producto: ${nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad :${cantidad}</p>
        <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
          </div>
        </div>
        
    
        `;
      });
    }
  
    if (carrito.length === 0) {
      console.log("Nada");
      modalBody.innerHTML = `
      <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
      `;
    } else {
      console.log("Algo");
    }
    carritoContenedor.textContent = carrito.length;
  
    if (precioTotal) {
      precioTotal.innerText = carrito.reduce(
        (acc, prod) => acc + prod.cantidad * prod.precio,
        0
      );
    }
  
    guardarStorage();
  };
  
  function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
  function eliminarProducto(id) {
    const juegoId = id;
    carrito = carrito.filter((juego) => juego.id !== juegoId);
    mostrarCarrito();
  }
  function procesarPedido() {
    carrito.forEach((prod) => {
      const listaCompra = document.querySelector("#lista-compra tbody");
      const { id, nombre, precio, img, cantidad } = prod;
      if (listaCompra) {
        const row = document.createElement("tr");
        row.innerHTML += `
                <td>
                <img class="img-fluid img-carrito" src="${img}"/>
                </td>
                <td>${nombre}</td>
              <td>${precio}</td>
              <td>${cantidad}</td>
              <td>${precio * cantidad}</td>
              `;
        listaCompra.appendChild(row);
      }
    });
    totalProceso.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }
  
   function enviarCompra(e){
     e.preventDefault()
     const cliente = document.querySelector('#cliente').value
     const email = document.querySelector('#correo').value
  
     if(email === '' || cliente == ''){
       Swal.fire({
         title: "¡Debes completar tu email y nombre!",
         text: "Rellena el formulario",
         icon: "error",
         confirmButtonText: "Aceptar",
     })
   } else {
  
    const btn = document.getElementById('button');
  
     btn.value = 'Enviando...';
  
     const serviceID = 'default_service';
     const templateID = 'template_qxwi0jn';
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Finalizar compra';
        alert('Correo enviado!');
      }, (err) => {
        btn.value = 'Finalizar compra';
        alert(JSON.stringify(err));
      });
      
     const spinner = document.querySelector('#spinner')
     spinner.classList.add('d-flex')
     spinner.classList.remove('d-none')
  
     setTimeout(() => {
       spinner.classList.remove('d-flex')
       spinner.classList.add('d-none')
       formulario.reset()
  
       const alertExito = document.createElement('p')
       alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
       alertExito.textContent = 'Compra realizada correctamente'
       formulario.appendChild(alertExito)
  
       setTimeout(() => {
         alertExito.remove()
       }, 3000)
  
  
     }, 3000)
   }
   localStorage.clear()
  
   }
















