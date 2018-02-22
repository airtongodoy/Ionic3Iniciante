import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider 
  ],
})
export class FeedPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private MovieProvider: MovieProvider
  ) {
  }

  public nomePerfil:String = ". . : : A . s . G : : . .";
  
  public  feed_json = {
    titulo : "Airton Godoy",
    data: "21 Fevereiro de 2018",
    descricao: "Criando um primeiro app... Fantástico",
    qtdLikes: 199,
    qtdComentarios: 234,
    dataHoraComentario: "2h atrás"
  }

  public listaFilme = new Array<any>();

  public somarNumeros(num1:number, num2:number):void {
    alert(num1+num2);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');

    this.MovieProvider.getLastedMovies().subscribe(
      data=>{
        const responseDataa = (data as any);
        const objRetorno = JSON.parse(responseDataa._body);

        this.listaFilme = objRetorno.results;

        console.log(this.listaFilme);
      }, error=> {
        console.log(error);
      })
    //this.somarNumeros(1,5);
  }

}
