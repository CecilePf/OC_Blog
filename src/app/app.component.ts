import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: "post 1",
      content: "Coucou ! Test de taille de contenu.",
      loveIts: 0,
      created_at: Date
    },
    {
      title: "post 2",
      content: "Voici le post numéro 2 !",
      loveIts: 0,
      created_at: Date
    },
    {
      title: "post 3",
      content: "Et là le post numéro 3.",
      loveIts: 0,
      created_at: Date
    }
  ];

}

