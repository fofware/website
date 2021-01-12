import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [
    {src: [
      "https://scontent.fcor5-1.fna.fbcdn.net/v/t1.0-9/83745522_101802471386124_8777483706303512576_o.jpg?_nc_cat=100&ccb=2&_nc_sid=e3f864&_nc_ohc=oOqL1Glyf2gAX9Xdcx_&_nc_ht=scontent.fcor5-1.fna&oh=34615870696f0b6db92e4fd5612753d5&oe=5FC9976F",
    ]},
    {src: [
      "/assests/images/mypicture.jpg",
      'https://scontent.fcor5-1.fna.fbcdn.net/v/t1.0-9/82437606_101781431388228_3901187209490857984_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=_oYyKdona2MAX90WRzn&_nc_ht=scontent.fcor5-1.fna&oh=17bac619b03e23eae5b443721db466fc&oe=5FC9BB5B',
      "https://scontent.fcor5-1.fna.fbcdn.net/v/t1.0-9/82437606_101781431388228_3901187209490857984_o.jpg?_nc_cat=103&amp;ccb=2&amp;_nc_sid=730e14&amp;_nc_ohc=_oYyKdona2MAX90WRzn&amp;_nc_ht=scontent.fcor5-1.fna&amp;oh=17bac619b03e23eae5b443721db466fc&amp;oe=5FC9BB5B",
      'http://drcossia.com.ar/wp-content/uploads/2018/02/BolsasMarcas_v2.jpg'
    ]}
  ]

  constructor() { }

  datos: any = [];

  ngOnInit(): void {
    this.getHome();
  }

  getHome() {
    this.datos = [
      {
        titulo: "Alimento Perros"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , src: ["../../../assets/images/lobo_cara_lapiz.png"]
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Gatos"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , src: ["../../../assets/images/gato.png"]
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Perros"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , src: ["../../../assets/images/perro_cartoon.png"]
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Gatos"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , src: ["../../../assets/images/gato_cartoon1.png"]
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Perros"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , src: ["../../../assets/images/damayvagabundo.png"]
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Gatos"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , src: ["../../../assets/images/tomyjerry_cheff.png"]
        , links: [
          { texto: 'Adultos', link: '/balanceados/perros/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/gatos/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Perros"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , src: ["../../../assets/images/perroovejeroaleman.png"]
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Gatos"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , src: ["../../../assets/images/gato_parado.png"]
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Perros"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , src: ["../../../assets/images/lobo_gris_cara.png"]
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Gatos"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , src: ["../../../assets/images/gato_dibu_ojos_azules.png"]
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Perros"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , src: ["../../../assets/images/perro_asomando.png"]
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
      , {
        titulo: "Alimento Gatos"
        , texto: "Some quick example text to build on the card title and make up the bulk of the card's content."
        , src: ["../../../assets/images/gato_asomando.png"]
        , links: [
          { texto: 'Adultos', link: '/balanceados/adultos' }
          , { texto: 'Cachorros', link: '/balanceados/cachorros' }
        ]
      }
    ]
  }
}
